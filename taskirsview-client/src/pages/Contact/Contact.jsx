import bgContact from "../../assets/bgContact.svg";
import PageTitle from "../../components/PageTitle";

function Contact() {
  return (
    <>
      <div>
        <PageTitle title={"CONTACT US"} />
      </div>
      <section
        className={`p-6 py-32 dark:bg-gray-100 dark:text-gray-900`}
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" flex justify-center bg-opacity-50 bg-base-300 py-14 rounded-md shadow-sm ">
            <div
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              bis_skin_checked="1"
            >
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full" bis_skin_checked="1">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2" bis_skin_checked="1">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full input input-primary rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Contact;
