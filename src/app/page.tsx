'use client'
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function Home() {
  const isLogin = useAuth();
  return (
    <div>
      <h1>{isLogin? "Home" : "Please Login.."}</h1>
    </div>
  );
}
