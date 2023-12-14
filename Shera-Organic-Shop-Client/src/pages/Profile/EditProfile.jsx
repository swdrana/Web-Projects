import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import uploadThumbnail from "./../../assets/images/bg/upload-thumbnail.svg";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import instance from "../../provider/axios";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import { app, storage } from "../../firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../provider/AuthProvider";

function EditProfile() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const [photo, setPhoto] = useState(null);
  const { isLoading, isError, userInfo, error, refetch } = useContext(AuthContext);
  const [isSubmitting, setSubmitting] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
    if (photo && !photo.type.startsWith("image/")) {
      toast.error("Please upload a valid image file.");
    }
  }, [photo]);

  const onSubmit = async (data) => {
    const authUser = auth.currentUser;
    let updatedData = { ...data };

    if (photo) {
      // Image is selected, handle the image upload logic
      if (!photo.type.startsWith("image/")) {
        toast.error("Please upload a valid image file.");
        return;
      }

      // Check if the image size exceeds 100KB
      if (photo.size > 200 * 1024) {
        toast.error("Image size must be less than 200KB.");
        return;
      }

      setSubmitting(true);

      const storageRef = ref(
        storage,
        `user-profile-photos/${authUser.uid}.${photo.name.split(".").pop()}`
      );

      try {
        // Upload new photo to Firebase Storage
        await uploadBytes(storageRef, photo, {
          contentType: photo.type,
        });

        // Get the download URL of the uploaded photo
        const photoURL = await getDownloadURL(storageRef);

        // Update the copy of the data with the new photoURL
        updatedData = { ...updatedData, photoURL };
      } catch (error) {
        console.error("Error uploading profile photo:", error);
        toast.error("Error uploading profile photo. Please try again later.");
        setSubmitting(false);
        return;
      }
    }

    try {
      // Update the database with the new data (including photoURL if available)
      const response = await instance.put(
        `/users/user/${userInfo._id}`,
        updatedData
      );

      // Refetch user data
      refetch();

      if (response.data.success) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  // Utility function to format file size
  const formatFileSize = (sizeInBytes) => {
    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;

    if (sizeInBytes >= GB) {
      return `${(sizeInBytes / GB).toFixed(2)} GB`;
    } else if (sizeInBytes >= MB) {
      return `${(sizeInBytes / MB).toFixed(2)} MB`;
    } else if (sizeInBytes >= KB) {
      return `${(sizeInBytes / KB).toFixed(2)} KB`;
    } else {
      return `${sizeInBytes} Bytes`;
    }
  };

  if (isLoading) return <LoadingProgress />;
  if (error || isError) return error || isError;

  return (
    <div className="update-profile bg-white py-5 px-4">
      <h6 className="mb-4 font-bold text-xl">Update Profile</h6>
      <form
        className="profile-form"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        {/* img upload  */}
        <div className="w-full border border-dashed rounded-lg bg-gray-white p-4">
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setPhoto(file);
              setValue("photoURL", file);
              setSelectedFileName(
                `${file.name} Current Size: ${formatFileSize(file.size)}`
              );
            }}
            id="photoURL"
            className="custom-file-input cursor-pointer"
            hidden
          />

          <div
            className="custom-file-input flex flex-col py-10 items-center justify-center"
            onClick={() => document.getElementById("photoURL").click()}
            style={{ cursor: "pointer" }}
          >
            <>
              <img
                src={uploadThumbnail}
                alt="Icon or Placeholder"
                className="img-fluid"
              />
              <p className="text-dark fw-bold mb-2 mt-3">
                {selectedFileName
                  ? `Selected: ${selectedFileName} (Max 200 KB)`
                  : "Click Here to select photo (Max 200 KB)"}
              </p>
            </>
          </div>
        </div>

        {/* Form Fields */}
        <div className="">
          <fieldset className="border border-dashed rounded-md my-3">
            <legend className="ms-5">Name</legend>
            <input
              className="input border-0 w-full"
              type="text"
              name="name"
              placeholder="Your name"
              defaultValue={userInfo && userInfo.displayName}
              {...register("displayName")}
            />
          </fieldset>

          <div className="flex items-center justify-center w-full gap-5">
            <fieldset className="border border-dashed rounded-md my-3 w-full">
              <legend className="ms-5">Email Address</legend>
              <input
                className="input border-0 w-full"
                type="email"
                value={userInfo && userInfo.email}
                disabled
              />
            </fieldset>

            <fieldset className="border border-dashed rounded-md my-3 w-full">
              <legend className="ms-5">Phone</legend>
              <input
                className="input border-0 w-full"
                type="text"
                placeholder="Your Phone"
                defaultValue={userInfo && userInfo.phoneNumber}
                {...register("phoneNumber")}
              />
            </fieldset>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary mt-5 text-white"
          disabled={isSubmitting}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
