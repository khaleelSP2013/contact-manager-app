// by default it is server component
import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shodow-md">
      <h1 className="text-2xl font-bold md-6"> Log in</h1>
      <LoginForm />
      <p className="mt-4 text-center">Don't have an account ? </p>
      <Link href="/register" className="text-blue-600 hover:underline">
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
