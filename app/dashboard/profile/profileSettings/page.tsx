"use client";
import { createClient } from "@/utils/supabase/client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { facultati } from "../../../../libs/profileSettingsOpions/profileSettingsOptions";
import { judete } from "../../../../libs/profileSettingsOpions/judeteOptions";

const supabase = createClient();

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [userClass, setUserClass] = useState<string>("");
  const [highschool, setHighschool] = useState<string>("");
  const [faculty, setFaculty] = useState<any>(facultati[0]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [selectedCounty, setSelectedCounty] = useState<any>(judete[0]);

  // Function to fetch user information
  const fetchUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error);
    } else {
      setUser(user);
      setEmail(user?.email || "");
      setFirstName(user?.user_metadata?.firstName || "");
      setLastName(user?.user_metadata?.lastName || "");
      setPhone(user?.user_metadata?.phone || "");
      setUserClass(user?.user_metadata?.userClass || "");
      setHighschool(user?.user_metadata?.highschool || "");
      setFaculty(user?.user_metadata?.faculty || facultati[0]);
      setSelectedCounty(user?.user_metadata?.selectedCounty || judete[0]);
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
      // email: email,
      user_metadata: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userClass: userClass,
        faculty: faculty,
        highschool: highschool,
        selectedCounty: selectedCounty,
      },
    };

    console.log("Updating user with data:", updates);

    const { data, error } = await supabase.auth.updateUser({
      // email: updates.email,
      data: updates.user_metadata,
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
    <div className="w-full mb-[100px] md:mb-0 ">
      <h1 className="text-[36px] font-[900]">Profile Settings</h1>
      <form onSubmit={handleUpdateProfile} className="w-full mt-8 ">
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="w-[95%] md:w-full relative mx-auto ">
            <input
              type="email"
              id="email"
              value={email}
              readOnly={true}
              className="p-4 pl-8 w-full rounded-xl border border-gray-300 focus-visible:outline-none text-gray-400 "
            />
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold">
              Email
            </span>
          </div>

          <div className="w-[95%] md:w-full relative mx-auto">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-4 pl-8 w-full rounded-xl border border-gray-300 focus-visible:outline-gray-400 "
            />
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold">
              Prenume
            </span>
          </div>

          <div className="w-[95%] md:w-full relative mx-auto">
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-4 pl-8 w-full rounded-xl border border-gray-300 focus-visible:outline-gray-400 "
            />
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold ">
              Nume
            </span>
          </div>

          <div className="w-[95%] md:w-full relative mx-auto">
            <input
              type="tel"
              id="phone"
              value={phone}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => setPhone(e.target.value)}
              className="p-4 pl-8 w-full rounded-xl border border-gray-300 focus-visible:outline-gray-400 "
            />
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold ">
              Telefon
            </span>
          </div>
          <div className="w-[95%] md:w-full relative mx-auto">
            <input
              type="text"
              id="highschool"
              value={highschool}
              onChange={(e) => setHighschool(e.target.value)}
              className="p-4 pl-8 w-full rounded-xl border border-gray-300 focus-visible:outline-gray-400 "
            />
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold ">
              Liceu
            </span>
          </div>

          <div className="w-[95%] md:w-full relative mx-auto">
            <input
              type="text"
              id="userClass"
              value={userClass}
              onChange={(e) => setUserClass(e.target.value)}
              className="p-4 pl-8 w-full rounded-xl border border-gray-300 focus-visible:outline-gray-400 "
            />
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold ">
              Clasa
            </span>
          </div>

          <div className="w-[95%] md:w-full relative mx-auto">
            <Listbox value={selectedCounty} onChange={setSelectedCounty}>
              <ListboxButton className="p-4 pl-8 w-full rounded-xl border bg-white border-gray-300 focus-visible:outline-gray-400 text-left relative flex justify-between">
                <p>{selectedCounty.nume}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mt-[1.5px] ml-1 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </ListboxButton>
              <ListboxOptions className="bg-white w-full mt-[3.7rem] rounded-xl shadow-lg border border-gray-300 absolute z-10 h-[200px] lg:h-[350px] overflow-y-auto  ">
                {judete.map((judet, index) => (
                  <ListboxOption
                    key={index}
                    value={judet}
                    className="data-[focus]:bg-blue-100 px-4 py-2"
                  >
                    {judet.nume}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold">
              Județ
            </span>
          </div>

          <div className="w-[95%] md:w-full relative mx-auto">
            <Listbox value={faculty} onChange={setFaculty}>
              <ListboxButton className="p-4 pl-8 w-full rounded-xl border bg-white border-gray-300 focus-visible:outline-gray-400 text-left truncate flex justify-between ">
                <p className="truncate w-[90%] ">{faculty.name}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 mt-[1.5px] ml-1 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </ListboxButton>
              <ListboxOptions className="bg-white w-full mt-[3.7rem] rounded-xl shadow-lg border border-gray-300 absolute z-10 h-[200px] lg:h-[350px] overflow-y-auto  ">
                {facultati.map((facultate) => (
                  <ListboxOption
                    key={facultate.id}
                    value={facultate}
                    className="data-[focus]:bg-blue-100 px-4 py-2"
                  >
                    {facultate.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
            <span className="absolute left-[5%] -top-[17.5%] bg-white px-2 text-[14px] text-gray-400 font-bold ">
              Facultatea de interes
            </span>
          </div>
        </div>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}
        <div className="flex justify-end mt-8 w-full">
          <button
            type="submit"
            className="px-8 py-4 text-white font-bold rounded-xl bg-[#0172f0]"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
