import instance from "./../../provider/axios";
import { toast } from "react-toastify";
import useAllUsers from "../../../hooks/useAllUsers";

function AdminManagement() {
  const [users, isLoading, refetch] = useAllUsers();

  // Frontend code to make a user an admin
const makeAdmin = async (userId) => {
    try {
      await instance.put(`/users/${userId}`, { role: 'admin' });
      toast.success('User is now an admin');
      refetch();
    } catch (error) {
      toast.error('Error making user an admin');
      console.error('Error:', error);
    }
  };
  
  // Frontend code to remove admin privileges from a user
  const removeAdmin = async (userId) => {
    try {
      await instance.put(`/users/${userId}`, { role: 'user' });
      toast.warning('Admin privileges removed');
      refetch();
    } catch (error) {
      toast.error('Error removing admin privileges');
      console.error('Error:', error);
    }
  };

  // Filter users based on their roles
  const adminUsers = users.filter((user) => user.role === 'admin');
  const regularUsers = users.filter((user) => user.role === 'user');
  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>S/L</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
         {/* Render admin users first */}
         {adminUsers.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <th>
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    className="toggle toggle-accent"
                    checked={user.role === 'admin'}
                    onChange={() => (user.role === 'admin' ? removeAdmin(user._id) : makeAdmin(user._id))}
                  />
                </label>
              </th>
            </tr>
          ))}

          {/* Then render regular users */}
          {regularUsers.map((user, index) => (
            <tr key={user._id}>
              <th>{adminUsers.length + index + 1}</th>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <th>
                <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    className="toggle toggle-accent"
                    checked={user.role === 'admin'}
                    onChange={() => (user.role === 'admin' ? removeAdmin(user._id) : makeAdmin(user._id))}
                  />
                </label>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminManagement;
