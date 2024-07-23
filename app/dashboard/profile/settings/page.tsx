"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const supabase = createClient();

const judeteRomania = [
  "Alba",
  "Arad",
  "Argeș",
  "Bacău",
  "Bihor",
  "Bistrița-Năsăud",
  "Botoșani",
  "Brăila",
  "Brașov",
  "București",
  "Buzău",
  "Caraș-Severin",
  "Călărași",
  "Cluj",
  "Constanța",
  "Covasna",
  "Dâmbovița",
  "Dolj",
  "Galați",
  "Giurgiu",
  "Gorj",
  "Harghita",
  "Hunedoara",
  "Ialomița",
  "Iași",
  "Ilfov",
  "Maramureș",
  "Mehedinți",
  "Mureș",
  "Neamț",
  "Olt",
  "Prahova",
  "Sălaj",
  "Satu Mare",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timiș",
  "Tulcea",
  "Vaslui",
  "Vâlcea",
  "Vrancea"
];

const clase = [
  "9",
  "10",
  "11",
  "12"
];

const facultyOptions = [
  "Automatică și Calculatoare",
  "Inginerie Electrică",
  "Electronică, Telecomunicații și Tehnologia Informației",
  "Energetică",
  "Inginerie Mecanică și Mecatronică",
  "Inginerie și Managementul Sistemelor Tehnologice",
  "Inginerie Industrială și Robotică",
  "Știința și Ingineria Materialelor",
  "Inginerie a Sistemelor Biotehnice",
  "Inginerie Chimică și Biotehnologii",
  "Chimie Aplicată și Știința Materialelor",
  "Inginerie în Limbi Străine",
  "Inginerie Aerospațială",
  "Inginerie a Transporturilor",
  "Științe Aplicate",
  "Antreprenoriat, Ingineria și Managementul Afacerilor"
];

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
    <div className="p-6 bg-white rounded-2xl my-8 mx-4 shadow-xl flex-col items-center justify-center md:p-8 lg:p-8 lg:mx-auto lg:w-[50%] lg:h-[50%]">
      <div className="flex justify-center my-4">
        <h1 className="text-4xl font-bold mb-4">Profile Settings</h1>
      </div>
      <form onSubmit={handleUpdateProfile}>
        <div className="flex flex-col mt-2">
          <div className="flex justify-center mb-4">
          <div className="relative">
            <img className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] rounded-full mb-4 border-4 border-white" src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png" />
            <div className="absolute bottom-0 -right-2 mb-2 mr-2">
              <div className="relative inline-block">
                <input type="file" id="file-input" className="hidden" />
                <label htmlFor="file-input" className="px-3 py-1 rounded-full bg-blue-500 text-white cursor-pointer flex items-center justify-center">
                  <span className="text-white text-lg">+</span>
                </label>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold mr-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="flex-1 outline-blue-500 w-[200px] h-[35px] bg-stone-100 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold mr-2" htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              className="flex-1 outline-blue-500 w-[150px] h-[35px] bg-stone-100 rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold mr-2" htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              className="flex-1 outline-blue-500 w-[150px] h-[35px] bg-stone-100 rounded-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold mr-2" htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              className="flex-1 outline-blue-500 w-[200px] h-[35px] bg-stone-100 rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold mr-2">County:</label>
            <select className="flex bg-stone-100 rounded-lg outline-blue-500 h-[35px] w-[150px]">
                {judeteRomania.map((judet,idx) => (
                  <option>{judet}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold mr-2" htmlFor="userClass">Class:</label>
            <select className="flex bg-stone-100 rounded-lg outline-blue-500 h-[35px] w-[40px]" id="userClass" value={userClass} onChange={(e) => setUserClass(e.target.value)}>
                {clase.map((clasa,idx) => (
                  <option>{clasa}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-row items-center mb-2">
            <label className="font-bold md:mr-2 lg:mr-2" htmlFor="faculty">Faculty of Interest:</label>
            <select className="flex-1 bg-stone-100 rounded-lg outline-blue-500 h-[35px] w-[125px] lg:w-[150px]" id="faculty" value={faculty} onChange={(e) => setFaculty(e.target.value)}>
                {facultyOptions.map((facultate,idx) => (
                  <option>{facultate}</option>
                ))}
            </select>
          </div>
        </div>
        {errorMessage && <p className="p-3 bg-red-300 rounded-lg flex" style={{ color: "red" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          {errorMessage}</p>}
        {successMessage && <p className="p-3 bg-lime-300 rounded-lg flex" style={{ color: "green" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {successMessage}</p>}
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-lg">Update Profile</button>
      </form>
    </div>

  );
}
