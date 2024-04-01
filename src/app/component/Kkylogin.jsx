"use client";

import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import WeatherInfo from "./Weather.jsx";
import Seoulfestivalcom from "./Seoulfestivalcom.jsx";
import "../sass/kkylogin.scss";
import Image from "next/image";

import github from "../../../public/kakaolog/evagithub.png";

import { useRouter } from "next/navigation.js";

function kkylogin(props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  async function loginl() {
    const result = await signIn("github", {
      redirect: true,

      callbackUrl: "/login",
    });
  }

  if (status === "authenticated") {
    router.push("/login");
    router.reload();
  }

  return (
    <div>
      {status === "authenticated" ? (
        <>
          <WeatherInfo />
          <Seoulfestivalcom />
        </>
      ) : (
        <button
          className="login"
          onClick={() => {
            loginl();
          }}
        >
          <Image src={github} alt="" />
          <span>깃허소셜로그인</span>
        </button>
      )}
    </div>
  );
}

export default kkylogin;
