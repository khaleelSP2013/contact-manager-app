// by default it is server component

import LoginForm from "@/app/_components/LoginForm";
import NextDocForm from "@/app/_components/NextDocForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-10">
        <h1 className="text-2xl font-bold md-6"> Next js Docmentation</h1>
        {/* <LoginForm /> */}
        <Link href="/login"></Link>
        <NextDocForm />
      </div>
    </div>
  );
};

export default LoginPage;
