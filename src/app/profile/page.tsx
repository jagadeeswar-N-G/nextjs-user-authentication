"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button
      onClick={handleLogout}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
