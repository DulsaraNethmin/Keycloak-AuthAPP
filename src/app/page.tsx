'use client';
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function Home() {
  const { isLogin, login, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isLogin ? (
        <button
          onClick={login}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to the App!
          </h1>
          <button
            onClick={logout}
            className="px-6 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

