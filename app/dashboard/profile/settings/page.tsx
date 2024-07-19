"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import {Field, Fieldset, Input, Label, Legend, Select} from "@headlessui/react";

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
    <div className={"w-full"}>

      <Fieldset className="space-y-6 flex flex-col content-center items-center   rounded-xl bg-white/5 fieldset-no-width" onSubmit={handleUpdateProfile}>
        <Legend className={"w-3/4"}>Profile Settings</Legend>
        <Field className={"flex flex-col items-center justify-center border-2 rounded-full dark:border-gray-700 w-[90%] px-8 py-4 shadow-xl hover:scale-110"}>
          <Label className={"w-full md:w-fit"} htmlFor="email">Email:</Label>
          <Input
              className={"border-2 rounded-full mx-2 px-2 border-red-300 valid:border-green-300 dark:valid:border-green-600"}
            type="email"
            id="email"
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
        <Field className={"flex items-center justify-center border-2 dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow-xl hover:scale-110"}>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
              className={"border-2 rounded-full mx-2 px-2 border-red-300 valid:border-green-300 dark:valid:border-green-600"}
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Field>
        <Field className={"flex items-center justify-center border-2 dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow-xl hover:scale-110"}>
          <Label htmlFor="lastName">Last Name:</Label>
          <Input
              className={"border-2 rounded-full mx-2 px-2 border-red-300 valid:border-green-300 dark:valid:border-green-600"}
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Field>
        <Field className={"flex items-center justify-center border-2 dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow-xl hover:scale-110"}>
          <Label htmlFor="phone">Phone:</Label>
          <Input
              className={"border-2 rounded-full mx-2 px-2 border-red-300 valid:border-green-300 dark:valid:border-green-600"}
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
        <Field className={"flex items-center justify-center border-2 dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow-xl hover:scale-110"}>
          <Label htmlFor="userClass">Class: {userClass}</Label>
          <Input  className={"border-2 rounded-full mx-2 px-2 border-red-300 valid:border-green-300 dark:valid:border-green-600"}
            type="range"
            min="9"
            max="12"
            id="userClass"
            placeholder={userClass}
            onChange={(e) => setUserClass(e.target.value)}
            />
        </Field>
        <Field className={"flex items-center justify-center border-2 dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow-xl hover:scale-110"}>
          <Label htmlFor="faculty">Faculty of Interest:</Label>
          <Input
            type="text"
            id="faculty"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
        </Field>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <button className={"bg-green-500 w-full text-white p-4 rounded-full shadow-lg dark:bg-green-600 disabled:bg-green-300 disabled:dark:bg-green-950 disabled:dark:text-gray-500"}
                  type="submit">Update Profile
          </button>
      </Fieldset>
    </div>
  );
}
