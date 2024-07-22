"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

import InputForm from "@/components/Forms/InputForm";
import { SelectForm } from "@/components/Forms/SelectForm";

const supabase = createClient();
const classes = ["9th", "10th", "11th", "12th"];

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState<any>("");
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [userClass, setUserClass] = useState<any>("");
  const [faculty, setFaculty] = useState<any>("");
  const [county, setCounty] = useState<any>("");
  const [city, setCity] = useState<any>("");
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

    // const { data, error } = await supabase.auth.updateUser({
    //   email: updates.email,
    //   data: updates.data,
    // });

    // if (error) {
    //   console.error("Error updating user:", error);
    //   setErrorMessage(error.message);
    // } else {
    //   console.log("User updated successfully:", data.user);
    //   setSuccessMessage("Profile updated successfully!");
    //   setUser(data.user);
    // }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <section className="w-full flex items-center justify-center">
        <div className=" flex items-center justify-center bg-slate-200 shadow-lg rounded-lg p-2 px-8">
          <h1 className="text-xl font-bold">Profile Settings</h1>
        </div>
      </section>

      <form
        onSubmit={handleUpdateProfile}
        className="w-full items-center justify-center flex flex-col mt-2"
      >
        <div className="grid grid-cols-1 gap-2  lg:grid-cols-2 lg:gap-5 mt-5 w-full p-4 rounded-lg  shadow-md bg-slate-200">
          <InputForm
            type="email"
            id="email"
            value={email}
            setValue={setEmail}
            label="Email"
          />
          <InputForm
            type="text"
            id="firstName"
            value={firstName}
            setValue={setFirstName}
            label="First Name"
          />
          <InputForm
            type="text"
            id="lastName"
            value={lastName}
            setValue={setLastName}
            label="Last Name"
          />
          <InputForm
            type="tel"
            id="phone"
            value={phone}
            setValue={setPhone}
            label="Phone"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-5 mt-5 w-full p-4 rounded-lg  shadow-md bg-slate-200">
          <SelectForm
            label="County"
            value={county}
            setValue={setCounty}
            id="county"
            objects={counties}
          />

          <InputForm
            type="text"
            id="city"
            value={city}
            setValue={setCity}
            label="City"
          />
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-5 mt-5 w-full p-4 rounded-lg  shadow-md bg-slate-200">
          <SelectForm
            label="Class"
            value={userClass}
            setValue={setUserClass}
            id="class"
            objects={classes}
          />
          <SelectForm
            label="Faculty of interest"
            value={faculty}
            setValue={setFaculty}
            id="facuty"
            objects={faculties}
          />
        </div>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button
          type="submit"
          className="bg-blue-500 p-3 text-white m-5 rounded-lg hover:bg-blue-600 shadow-md"
        >
          Update Profile
        </button>
      </form>

      {/* <p>Email: {user.email}</p>
      <p>First Name: {user.user_metadata?.firstName}</p>
      <p>Last Name: {user.user_metadata?.lastName}</p>
      <p>Phone: {user.user_metadata?.phone}</p>
      <p>Class: {user.user_metadata?.userClass}</p>
      <p>Faculty of Interest: {user.user_metadata?.faculty}</p> */}
    </div>
  );
}
const faculties = [
  "Choose a faculty",
  "Automatica",
  "ETTI",
  "Energetica",
  "Inginerie Mecanica si Mecatronica",
  "Faima",
  "Transporturi",
  "Fils",
  "Electrica",
  "etc",
];

const counties = [
  "Choose a County",
  "Alba",
  "Arad",
  "Argeș",
  "Bacău",
  "Bihor",
  "Bistrița-Năsăud",
  "Botoșani",
  "Brașov",
  "Brăila",
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
  "Maramureș",
  "Mehedinți",
  "Mureș",
  "Neamț",
  "Olt",
  "Prahova",
  "Satu Mare",
  "Sălaj",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timiș",
  "Tulcea",
  "Vaslui",
  "Vâlcea",
  "Vrancea",
];
