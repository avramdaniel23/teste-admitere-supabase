"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const supabase = createClient();

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState<any>("");
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [userClass, setUserClass] = useState<any>("");
  const [faculty, setFaculty] = useState<any>("");
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [successMessage, setSuccessMessage] = useState<any>("");

  // Function to fetch user information
  const fetchUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error);
    } else {
      console.log("Fetched user:", user);
      setUser(user);
      setEmail(user?.email);
      setFirstName(user?.user_metadata?.firstName || "");
      setLastName(user?.user_metadata?.lastName || "");
      setPhone(user?.user_metadata?.phone || "");
      setUserClass(user?.user_metadata?.userClass || "");
      setFaculty(user?.user_metadata?.faculty || "");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const updates = {
      email: email,
      data: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userClass: userClass,
        faculty: faculty,
      },
    };

    console.log("Updating user with data:", updates);

    const { data, error } = await supabase.auth.updateUser({
      email: updates.email,
      data: updates.data,
    });

    if (error) {
      console.error("Error updating user:", error);
      setErrorMessage(error.message);
    } else {
      console.log("User updated successfully:", data.user);
      setSuccessMessage("Profile updated successfully!");
      setUser(data.user);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1>Profile Settings</h1>
      <section className="w-[90%] items-center justify-center flex bg-blue-200 p-4 rounded-md ">
        <div className={`rounded-full shadow-xl relative cursor-pointer `}>
          <img
            className="w-20 h-20 lg:h-12 lg:w-12  object-scale-down p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-500"
            src="https://i.pinimg.com/564x/f4/76/2b/f4762b5fa708c903317cfd38647237f4.jpg"
            alt="Bordered avatar"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute bottom-0 right-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </div>
      </section>

      <form onSubmit={handleUpdateProfile}>
        <div className="p-1">
          <label htmlFor="email" className="text-sm/6 font-medium text-black">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6 text-black "
          />
        </div>
        <div className="p-1">
          <label
            htmlFor="firstName"
            className="text-sm/6 font-medium text-black"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className=" block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6 text-black"
          />
        </div>
        <div className="p-1">
          <label
            htmlFor="lastName"
            className="text-sm/6 font-medium text-black"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className=" block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6 text-black"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userClass">Class:</label>
          <input
            type="text"
            id="userClass"
            value={userClass}
            onChange={(e) => setUserClass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="faculty">Faculty of Interest:</label>
          <input
            type="text"
            id="faculty"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button type="submit">Update Profile</button>
      </form>
      <p>Email: {user.email}</p>
      <p>First Name: {user.user_metadata?.firstName}</p>
      <p>Last Name: {user.user_metadata?.lastName}</p>
      <p>Phone: {user.user_metadata?.phone}</p>
      <p>Class: {user.user_metadata?.userClass}</p>
      <p>Faculty of Interest: {user.user_metadata?.faculty}</p>
    </div>
  );
}
