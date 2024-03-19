"use client";

import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import WeatherInfo from "./Weather.jsx";
import Seoulfestivalcom from "./Seoulfestivalcom.jsx";
import "../sass/kkylogin.scss";

function kkylogin(props) {
  const { data: session, status } = useSession();

  async function loginl() {
    const result = await signIn("github", {
      redirect: true,

      callbackUrl: "/login",
    });
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
          깃허소셜로그인
        </button>
      )}
    </div>
  );
}

export default kkylogin;
