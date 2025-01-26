import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../core/application/context/UserContext";
import EditButton from "../../ui/EditButton";
import { User } from "../../../core/domain/entity/Account";
import AccountSettingsSkeleton from "../../ui/AccountSettingSkeleton";

const AccountSettings: React.FC = () => {
  const accountSettingRepository = useContext(UserContext);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (accountSettingRepository) {
        try {
          const response = await accountSettingRepository.getMany();
          const userData = Array.isArray(response.data)
            ? response.data
            : response.data
            ? [response.data]
            : [];
          setUsers(userData);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch users", error);
          setError("Failed to load user data");
          setLoading(false);
        }
      }
    };

    fetchUsers();
  }, [accountSettingRepository]);

  const loggedInUserId = users.length > 0 ? users[0].id : null; // Assuming the first user is the logged-in one

  const filteredUsers = users.filter(user => user.id === loggedInUserId);

  if (loading) return <AccountSettingsSkeleton/>;
  if (error) return <p>{error}</p>;
  if (!filteredUsers || filteredUsers.length === 0) return <p>No data available.</p>;

  return (
    <div className="w-full h-screen overflow-hidden font-roboto">
      <h1 className="text-xl px-4 font-semibold">Account Settings</h1>
      <div className="bg-[#EDF2F6] rounded-lg p-4 space-y-6 h-full flex flex-col">
        {filteredUsers.map((user, index) => (
          <div key={index} className="space-y-6">
            {/* Profile Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">My Profile</h2>
              <div className="rounded-lg border bg-white">
                <div className="p-4 bg-[#EDF2F6] border-2 border-gray-300 rounded-md shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.imageUrl || "https://via.placeholder.com/150"}
                        alt="Profile picture"
                        className="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.location}</p>
                      </div>
                    </div>
                    <EditButton ariaLabel="Edit profile" />
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
              <div className="rounded-lg border bg-white">
                <div className="p-4 bg-[#EDF2F6] border-2 border-gray-300 rounded-md shadow-sm">
                  <div className="grid grid-cols-3 gap-6 items-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">First Name</p>
                      <p>{user.firstName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Last Name</p>
                      <p>{user.lastName}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email Address</p>
                      <p>{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone No.</p>
                      <p>{user.phoneNo}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p>{user.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Biography</h2>
              <div className="bg-[#EDF2F6] border-2 border-gray-300 rounded-md shadow-sm">
                <div className="p-4">
                  <p className="text-sm leading-relaxed">{user.biography}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSettings;
