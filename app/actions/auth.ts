"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const login = async (formData: FormData) => {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString().trim();

  try {
    const response = await axios.get<UserType[]>(`${API_URL}/users`, {
      params: {
        email,
        password,
      },
    });

    const user = response.data[0];

    if (!user) {
      redirect("/login");
    }

    // TODO: Set authentication cookie/session here
    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
    });
    redirect("/contact");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
