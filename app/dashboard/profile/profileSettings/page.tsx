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
  const [county, setCounty] = useState<any>("");
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
      setCounty(user?.user_metadata?.county || "");
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
        county: county,
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
    // <div>
    //   <h1>Profile Settings</h1>
    //   <form onSubmit={handleUpdateProfile}>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         type="text"
    //         id="firstName"
    //         value={firstName}
    //         onChange={(e) => setFirstName(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         type="text"
    //         id="lastName"
    //         value={lastName}
    //         onChange={(e) => setLastName(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="phone">Phone:</label>
    //       <input
    //         type="tel"
    //         id="phone"
    //         value={phone}
    //         onChange={(e) => setPhone(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="userClass">Class:</label>
    //       <input
    //         type="text"
    //         id="userClass"
    //         value={userClass}
    //         onChange={(e) => setUserClass(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="faculty">Faculty of Interest:</label>
    //       <input
    //         type="text"
    //         id="faculty"
    //         value={faculty}
    //         onChange={(e) => setFaculty(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="county">County:</label>
    //       <input
    //         type="text"
    //         id="county"
    //         value={county}
    //         onChange={(e) => setCounty(e.target.value)}
    //       />
    //     </div>
    //     {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    //     {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    //     <button type="submit">Update Profile</button>
    //   </form>
    // </div>
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Informatii Personale
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Va recomandam utilizarea unei adrese de email pe care o verificati
        constant!
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nume
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none "
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Prenume
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none "
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Adresa de email
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none "
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="class"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Clasa
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <select
              id="class"
              name="class"
              autoComplete="class_number"
              className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none"
            >
              <option>a IX-a</option>
              <option>a X-a</option>
              <option>a XI-a</option>
              <option>a XII-a</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="county"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Judet
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <select
              id="county"
              name="county"
              autoComplete="county-name"
              className="block relative bottom-0 w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none "
            >
              <option>Bucuresti</option>
              <option>Alba</option>
              <option>Arad</option>
              <option>Arges</option>
              <option>Bacau</option>
              <option>Bihor</option>
              <option>Bistrita-Nasaud</option>
              <option>Botosani</option>
              <option>Brasov</option>
              <option>Braila</option>
              <option>Buzau</option>
              <option>Caras-Severin</option>
              <option>Calarasi</option>
              <option>Cluj</option>
              <option>Constanta</option>
              <option>Covasna</option>
              <option>Damboovita</option>
              <option>Dolj</option>
              <option>Galati</option>
              <option>Giurgiu</option>
              <option>Gorj</option>
              <option>Harghita</option>
              <option>Hunedoara</option>
              <option>Ialomita</option>
              <option>Iasi</option>
              <option>Ilfov</option>
              <option>Maramures</option>
              <option>Mehedinti</option>
              <option>Mures</option>
              <option>Neamt</option>
              <option>Olt</option>
              <option>Prahova</option>
              <option>Satu Mare</option>
              <option>Salaj</option>
              <option>Sibiu</option>
              <option>Suceava</option>
              <option>Teleorman</option>
              <option>Timis</option>
              <option>Tulcea</option>
              <option>Valcea</option>
              <option>Vaslui</option>
              <option>Vrancea</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3 ">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Oras
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none "
            />
          </div>
        </div>

        <div className="sm:col-span-3 sm:col-start-1">
          <label
            htmlFor="faculty"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Facultatea de interes
          </label>
          <div className="mt-2 shadow-md rounded-md">
            <select
              id="faculty"
              name="faculty"
              autoComplete="faculty_name"
              className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 leading-none "
            >
              <option>Facultatea de Inginerie Electrica</option>
              <option>Facultatea de Energetica</option>
              <option>Facultatea de Automatica si Calculatoare</option>
              <option>
                Facultatea de Electronica, Telecomunicatii si Tehnologia
                Informatiei
              </option>
              <option>Facultatea de Inginerie Mecanica si Mecatronica</option>
              <option>Facultatea de Inginerie Industriala si Robotica</option>
              <option>Facultatea de Ingineria Sistemelor Biotehnice</option>
              <option>Facultatea de Transporturi</option>
              <option>Facultatea de Inginerie Aerospatiala</option>
              <option>Facultatea de Stiinta si Ingineria Materialelor</option>
              <option>Facultatea de Inginerie Chimica si Biotehnologii</option>
              <option>Facultatea de Inginerie in Limbi Straine</option>
              <option>Facultatea de Stiinte Aplicate</option>
              <option>Facultatea de Inginerie Medicala</option>
              <option>
                Facultatea de Antreprenoriat, Ingineria si Managementul
                Afacerilor
              </option>
            </select>
          </div>
        </div>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <div className="flex justify-center p-3 mt-8">
        <button
          className="bg-neon-blue p-2 rounded-lg text-white"
          type="submit"
        >
          Finalizare
        </button>
      </div>
    </div>
  );
}
