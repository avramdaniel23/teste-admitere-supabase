"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const supabase = createClient();
const facultati = [
  "Choose a Faculty",
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
  "Facultatea de Antreprenoriat, Ingineria și Managementul Afacerilor",
];

const judete = [
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

const clase = ["Choose a class", "a 9-a", "a 10-a", "a 11-a", "a 12-a"];

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState<any>("");
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [userClass, setUserClass] = useState<any>();
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

    //   if (error) {
    //     console.error("Error updating user:", error);
    //     setErrorMessage(error.message);
    //   } else {
    //     console.log("User updated successfully:", data.user);
    //     setSuccessMessage("Profile updated successfully!");
    //     setUser(data.user);
    //   }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-3 font-semibold flex items-center justify-center bg-blue-300 rounded ">
        Profile Settings
      </div>
      <section className=" flex items-center justify-center p-4 ">
        <div className="relative cursors-pointer">
          <img
            className="w-20 h-20 border-4 border-green-600 rounded-full object-scale-down  "
            src="https://i.pinimg.com/564x/c1/6f/c6/c16fc648ed45ed1e6617e0669316111b.jpg"
          ></img>
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-3 lg:gap-x-8 lg:py-2">
          <div className="py-2">
            <label htmlFor="email" className="font-semibold text-black ">
              Email:
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" block w-full rounded-lg border-b-2  bg-white/5 py-1.5 px-2 shadow-sm text-black outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="firstName" className="font-semibold text-black">
              First Name:
            </label>
            <div>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className=" block w-full rounded-lg border-b-2  bg-white/5 py-1.5 px-2 shadow-sm text-black outline-none focus:border-blue-400 "
              />
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="lastName" className="font-semibold text-black">
              Last Name:
            </label>
            <div>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className=" block w-full rounded-lg border-b-2  bg-white/5 py-1.5 px-2 shadow-sm text-black outline-none focus:border-blue-400 "
              />
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="phone" className="font-semibold text-black">
              Phone:
            </label>
            <div>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className=" block w-full rounded-lg border-b-2  bg-white/5 py-1.5 px-2 shadow-sm text-black outline-none focus:border-blue-400 "
              />
            </div>
          </div>

          <div className="py-2">
            <label htmlFor="userClass" className="font-semibold text-black">
              Class
            </label>
            <select
              id="class"
              onChange={(e) => setUserClass(e.target.value)}
              className=" focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border-b-2 p-2 shadow-sm text-black outline-none focus:border-blue-400 "
            >
              {clase.map((clasa) => (
                <option value={clasa}>{clasa}</option>
              ))}
            </select>
          </div>

          <div className="py-2">
            <label htmlFor="faculty" className="font-semibold text-black">
              Faculty of Interest:
            </label>
            <select
              id="faculty"
              onChange={(e) => setFaculty(e.target.value)}
              className=" focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border-b-2 p-2 shadow-sm text-black outline-none focus:border-blue-400"
            >
              {facultati.map((facultate, index) => (
                <option key={index} value={facultate}>
                  {facultate}
                </option>
              ))}
            </select>
          </div>

          <div className="py-2">
            <label htmlFor="adress" className="font-semibold text-black">
              City:
            </label>
            <div>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className=" block w-full rounded-lg border-b-2  bg-white/5 py-1.5 px-2 shadow-sm text-black outline-none focus:border-blue-400 "
              />
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="county" className="font-semibold text-black">
              Judet:
            </label>
            <select
              id="county"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className=" focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border-b-2 p-2 shadow-sm text-black outline-none focus:border-blue-400"
            >
              {judete.map((judet, index) => (
                <option key={index} value={judet}>
                  {judet}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="my-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

          <button
            type="submit"
            className="font-semibold text-black rounded-lg block border-b-2 shadow-sm bg-blue-300 py-1.5 px-2 outline-none focus:border-blue-500"
          >
            Update Profile
          </button>
        </div>
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
