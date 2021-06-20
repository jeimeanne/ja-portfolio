import React from "react";
import image from "../bnw_bg.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="code"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8S">
        <h1 className="text-6xl text-red-100 font-bold leading-none lg:leading-snug home-name cursive">
          Hey there, I'm Jeime.
        </h1>
      </section>
    </main>
  );
}
