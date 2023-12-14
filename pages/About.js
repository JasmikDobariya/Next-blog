import Navbar from "@/Components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>about page</title>
      </Head>
      <Navbar />

      <div className="container m-10">
        <h1 className="text-center font-bold text-4xl">About Page</h1>

        <div className="flex justify-center m-5">
          <Image src="/1.jpg" height={819} width={546}></Image>
        </div>
      </div>
    </>
  );
};

export default About;
