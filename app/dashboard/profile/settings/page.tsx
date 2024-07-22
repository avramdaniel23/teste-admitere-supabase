"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import InputField from "@/components/Inputs/InputField";
import DropdownField from "@/components/Inputs/DropdownField";

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



  const classOptions = ["A 9-a", "A 10-a", "A 11-a", "A 12-a"];
  const facultyOptions = [
    "Facultatea de Automatică și Calculatoare",
    "Facultatea de Inginerie Electrică",
    "Facultatea de Electronică, Telecomunicații și Tehnologia Informației",
    "Facultatea de Energetică",
    "Facultatea de Inginerie Mecanică și Mecatronică",
    "Facultatea de Inginerie și Managementul Sistemelor Tehnologice",
    "Facultatea de Inginerie Industrială și Robotică",
    "Facultatea de Știința și Ingineria Materialelor",
    "Facultatea de Inginerie a Sistemelor Biotehnice",
    "Facultatea de Inginerie Chimică și Biotehnologii",
    "Facultatea de Chimie Aplicată și Știința Materialelor",
    "Facultatea de Inginerie în Limbi Străine",
    "Facultatea de Inginerie Aerospațială",
    "Facultatea de Inginerie a Transporturilor",
    "Facultatea de Științe Aplicate",
    "Facultatea de Antreprenoriat, Ingineria și Managementul Afacerilor"
  ];

  return (
    <div className="flex flex-col mb-14 gap-4 p-2 bg-slate-100">
      <div className="flex flex-row gap-1 items-center text-xl bg-white shadow-sm rounded-md p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-6 lg:size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
        </svg>
        <h1 className="lg:text-2xl">Profile Settings</h1>
      </div>
      <div className="flex flex-col p-4 items-center rounded-md bg-white shadow-sm">
        <div className="relative border-4 border-blue-400 w-20 h-20 rounded-full bg-gray-300 lg:w-32 lg:h-32">
          <div className="cursor-pointer flex items-center justify-center duration-200 opacity-0 hover:opacity-50 w-full h-full rounded-full bg-blue-100">
            <p className="text-center">Change profile picture</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(240, 246, 255)" className="cursor-pointer duration-100 hover:scale-110 absolute bottom-0 right-0 bg-blue-400 p-0.5 rounded-lg size-6 lg:size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>

        </div>
      </div>

      <form className="flex flex-col gap-8 bg-white rounded-md p-4 shadow-sm lg:gap-10 lg:p-8 lg:grid lg:grid-cols-2" onSubmit={handleUpdateProfile}>
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <InputField label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <InputField label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <InputField label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <DropdownField label="Class" value={userClass} onChange={(e) => setUserClass(e.target.value)} options={classOptions} />
        <DropdownField label="Faculty of Interest" value={faculty} onChange={(e) => setFaculty(e.target.value)} options={facultyOptions} />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button type="submit" className="mx-auto w-fit bg-blue-200 p-2 rounded-md duration-200 hover:bg-blue-300">Update Profile</button>
      </form>

    </div>
  );
}
