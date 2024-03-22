"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';




export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);
      toast.success('Signup successful')
      setTimeout(() => {
        router.push("/admin");
      }, 2000)

    } catch (error: any) {
      toast.error("Signup failed", error.message)
      // console.log("Signup failed", error.message);
      // toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }



  return (
    <div className=" h-full">



      <div className="flex items-center justify-center  min-h-screen bg-black">
        <div className="max-w-md mx-auto p-6 bg-gray-300 border border-red-500 shadow-md rounded-2xl text-blue-950 text-center">
          <h1 className="text-3xl font-semibold mb-4">{loading ? "Processing" : "Signup"}</h1>
          <hr className="border-gray-300 mb-4" />

          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500 text-green-400"
          />

          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500 text-green-400"
          />

          <button onClick={onSignup} className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-4 ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}>
            {buttonDisabled ? "No signup" : "Signup"}
          </button>



          <Link href="/login" className="block text-center text-blue-500 hover:underline">Visit login page</Link>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </div>

  )

}