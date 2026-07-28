// by default it is server component

import LoginForm from "@/app/_components/LoginForm";
import NextDocForm from "@/app/_components/NextDocForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-10">
        {/* <LoginForm /> */}
        <Link href="/login" className="hover:text-blue-600 mr-5">
          Log in
        </Link>

        <NextDocForm />
      </div>
    </div>
  );
};

export default LoginPage;
