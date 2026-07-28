"use client";
import React from "react";
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/router";

const LogoutButton = () => {
  // const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutAction();
      //router.push("/login");
    } catch (error) {
      console.log("Logout Failed", error);
    }
  };
  return (
    <button
      className="px-5 py-2 bg-red-600 text-white font-medium rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
      onClick={handleLogout}
    >
      LogOut
    </button>
  );
};

export default LogoutButton;
