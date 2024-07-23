'use client'
import Input from '@/components/Input'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const supabase = createClient()

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null)
  const [email, setEmail] = useState<any>('')
  const [firstName, setFirstName] = useState<any>('')
  const [lastName, setLastName] = useState<any>('')
  const [phone, setPhone] = useState<any>('')
  const [userClass, setUserClass] = useState<any>('')
  const [faculty, setFaculty] = useState<any>('')
  const [errorMessage, setErrorMessage] = useState<any>('')
  const [successMessage, setSuccessMessage] = useState<any>('')

  // Function to fetch user information
  const fetchUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    if (error) {
      console.error('Error fetching user:', error)
    } else {
      console.log('Fetched user:', user)
      setUser(user)
      setEmail(user?.email)
      setFirstName(user?.user_metadata?.firstName || '')
      setLastName(user?.user_metadata?.lastName || '')
      setPhone(user?.user_metadata?.phone || '')
      setUserClass(user?.user_metadata?.userClass || '')
      setFaculty(user?.user_metadata?.faculty || '')
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    const updates = {
      email: email,
      data: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userClass: userClass,
        faculty: faculty,
      },
    }

    console.log('Updating user with data:', updates)

    const { data, error } = await supabase.auth.updateUser({
      email: updates.email,
      data: updates.data,
    })

    if (error) {
      console.error('Error updating user:', error)
      setErrorMessage(error.message)
    } else {
      console.log('User updated successfully:', data.user)
      setSuccessMessage('Profile updated successfully!')
      setUser(data.user)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <section className="mb-20">
      <h1 className="mb-5 text-xl font-semibold">Profile Settings</h1>
      <form
        onSubmit={handleUpdateProfile}
        className="flex flex-col gap-3 lg:flex-row"
      >
        <div className="relative w-40 self-center rounded-lg p-1 lg:w-full">
          <img
            alt="Profile picture"
            className="rounded-full"
            src="https://i.pinimg.com/736x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg"
          />
          <button className="absolute bottom-0 right-0 rounded-full bg-neon-blue p-2 shadow-lg hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>
        <div className="flex w-full flex-col gap-3">
          <Input
            label="Email"
            type="email"
            id="email"
            value={email}
            required
            disabled
          />

          <Input
            label="First Name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            label="Last Name"
            type="text"
            id="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            label="Phone"
            type="tel"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Input
            label="Class"
            type="text"
            id="userClass"
            value={userClass}
            onChange={e => setUserClass(e.target.value)}
          />
          <Input
            label="Faculty"
            type="text"
            id="faculty"
            value={faculty}
            onChange={e => setFaculty(e.target.value)}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button
            className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-neon-blue px-4 py-2 font-bold text-white transition-colors ease-out hover:bg-blue-800 focus-visible:ring focus-visible:ring-inset focus-visible:ring-white active:scale-95 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
      {/* <p>Email: {user.email}</p>
      <p>First Name: {user.user_metadata?.firstName}</p>
      <p>Last Name: {user.user_metadata?.lastName}</p>
      <p>Phone: {user.user_metadata?.phone}</p>
      <p>Class: {user.user_metadata?.userClass}</p>
      <p>Faculty of Interest: {user.user_metadata?.faculty}</p> */}
    </section>
  )
}
