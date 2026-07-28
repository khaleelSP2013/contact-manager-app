// by default it is server component

import LoginForm from "@/app/_components/LoginForm";
import NextDocForm from "@/app/_components/NextDocForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-10">
        {/* <LoginForm /> */}
        <a
          href="/login"
          className="md-2-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-md shadow-md transition duration-200"
        >
          Log in
        </a>
        <NextDocForm />
      </div>
    </div>
  );
};

export default LoginPage;
