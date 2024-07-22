"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";

const supabase = createClient();

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState<any>("");
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [userClass, setUserClass] = useState<number>(-1);
  const [faculty, setFaculty] = useState<any>("");
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [successMessage, setSuccessMessage] = useState<any>("");
  const [isDisabled, setIsDisabled ] = useState<boolean>(true)

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


  const checkEmail = (html: HTMLInputElement, value: string): boolean => {
    setEmail(value);
    if (html.checkValidity() && user?.email !== value) {
      setIsDisabled(false);
      return true
    }
    else {
        setIsDisabled(true);
        return false
    }

  }

  const checkFirstName = (html: HTMLInputElement, value: string) => {
    setFirstName(value);
    if (html.checkValidity() && user?.user_metadata?.firstName !== value) {
      setIsDisabled(false);
    }
    else {
        setIsDisabled(true);
    }
  }

    const checkLastName = (html: HTMLInputElement, value: string) => {
        setLastName(value);
        if (html.checkValidity() && user?.user_metadata?.lastName !== value) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }

    const checkPhone = (html: HTMLInputElement, value: string) => {
        setPhone(value);
        if (html.checkValidity() && user?.user_metadata?.phone !== value) {
          setIsDisabled(false);
        }
        else {
          setIsDisabled(true);
        }
    }

    const checkUserClass = (value: number) => {
        setUserClass(value);
        if (user?.user_metadata?.userClass != value) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }

    }

    const checkFaculty = (value: string) => {
        setFaculty(value);
        if (user?.user_metadata?.faculty !== value) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }
  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating profile...");
    // check if form is valid
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      setErrorMessage("Invalid form");
    }
    else {


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
     // email: updates.email,
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
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const faculties = ["Facultatea de Automatică și Calculatoare",
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
      "Facultatea de Antreprenoriat, Ingineria și Managementul Afacerilor"];


  return (

      <>
        <h1 className={"w-full text-center rounded-lg bg-neon-blue/10 h-10 text-xl items-center flex justify-center my-6 font-bold"}>Profile Settings</h1>
  <form className="flex flex-col rounded-xl bg-white/5 divset-no-width"
            onSubmit={handleUpdateProfile}>
    <div className={"flex flex-col lg:flex-row w-full"}>
      <div className={"w-full lg:w-[49%] space-y-6 my-6 items-center content-center flex flex-col"}>

        <div
            className={"flex flex-col items-center justify-center rounded-full dark:border-gray-700 w-[90%] px-8 py-4 shadow hover:scale-110"}>
          <label className={"w-full text-center"} htmlFor="email">Email</label>
          <input
              className={"border-2 rounded-full m-2 p-4 w-[99%]"}
              type="email"
              id="email"
              placeholder={user?.user_metadata?.email || ""}
              onChange={(e) => (checkEmail(e.target, e.target.value))}
          />
        </div>
        <div
            className={"flex flex-col items-center justify-center rounded-full dark:border-gray-700 w-[90%] px-8 py-4 shadow hover:scale-110"}>
          <label className={"w-full text-center"} htmlFor="firstName">First Name</label>
          <input
              className={"border-2 rounded-full m-2 p-4 w-[99%]"}
              type="text"
              id="firstName"
              minLength={2}
              placeholder={user?.user_metadata?.firstName || ""}
              onChange={(e) => checkFirstName(e.target, e.target.value)}
          />
        </div>
        <div
            className={"flex flex-col items-center justify-center dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow hover:scale-110"}>
          <label className={"w-full text-center"} htmlFor="userClass">Class: </label>
          <div className={"w-full flex justify-evenly my-4"}>
            <div className={`flex size-16 rounded-full mx-2 justify-center items-center ${userClass==9 ? 'bg-neon-blue/50':'bg-neon-blue/10' }`} onClick={() => checkUserClass(9)}>9</div>
            <div className={`flex size-16 rounded-full mx-2 justify-center items-center ${userClass==10 ? 'bg-neon-blue/50':'bg-neon-blue/10'} `} onClick={() => checkUserClass(10)}>10</div>
            <div className={`flex size-16 rounded-full mx-2 justify-center items-center ${userClass==11 ? 'bg-neon-blue/50':'bg-neon-blue/10'}`} onClick={() => checkUserClass(11)}>11</div>
            <div className={`flex size-16 rounded-full mx-2 justify-center items-center ${userClass==12 ? 'bg-neon-blue/50':'bg-neon-blue/10'}`} onClick={() => checkUserClass(12)}>12</div>
          </div>

        </div>


      </div>
      <div className={"w-full lg:w-[49%] space-y-6 my-6 items-center content-center flex flex-col"}>
        <div
            className={"flex flex-col items-center justify-center rounded-full dark:border-gray-700 w-[90%] px-8 py-4 shadow hover:scale-110"}>
          <label className={"w-full text-center"} htmlFor="phone">Phone</label>
          <input
              className={"border-2 rounded-full m-2 p-4 w-[99%]" }
              type="tel"
              id="phone"
              placeholder={user?.user_metadata?.phone || ""}
              onChange={(e) => checkPhone(e.target, e.target.value)}
          />
        </div>
        <div
            className={"flex flex-col items-center justify-center dark:border-gray-700 rounded-full w-[90%] px-8 py-4 shadow hover:scale-110"}>
          <label className={"w-full text-center"} htmlFor="lastName">Last Name</label>
          <input
              className={"border-2 rounded-full m-2 p-4 w-[99%]"}
              type="text"
              id="lastName"
              minLength={2}
              placeholder={user?.user_metadata?.lastName || ""}
              onChange={(e) => checkLastName(e.target, e.target.value)}
          />
        </div>
      </div>

    </div>
    <div className={"w-full my-6 space-y-6 items-center content-center flex flex-col"}>
      <div
          className={"flex flex-col items-center justify-center dark:border-gray-700 rounded-full w-[90%] lg:w-full px-8 py-4 shadow-xl hover:scale-110"}>
        <label htmlFor="faculty">Faculty of Interest</label>
        <select id="faculty"
                value={faculty}
                className={"flex flex-col items-center justify-center border-2 dark:border-gray-700 rounded-full w-full px-8 py-4 shadow-xl"}
                onChange={(e) => checkFaculty(e.target.value)}>
          <option disabled selected={!faculty}>--- Choose a faculty ---</option>
          {faculties.map(value => (
              <option selected={faculty == value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
      {successMessage && <p style={{color: "green"}}>{successMessage}</p>}
      <button
          className={"bg-green-500 w-full text-white p-4 rounded-full shadow-lg dark:bg-green-600 disabled:bg-green-300 disabled:dark:bg-green-950 disabled:dark:text-gray-500"}
          disabled={isDisabled} type="submit">Update Profile
      </button>
    </div>

  </form>
      </>
  )
      ;
}
