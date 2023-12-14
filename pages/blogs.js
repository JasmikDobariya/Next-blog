import Navbar from "@/Components/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts"
    );
    const apiResponse = await res.json();

    return {
      props: {
        data: apiResponse.blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

const blogs = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog page</title>
      </Head>
      <Navbar />
      <div className="container m-10">
        <h1 className="text-center font-bold text-4xl ">Welcome To my Blogs</h1>
        <div className="grid justify-center pt-5 ">
          {data.length === 0 ? (
            <p>No data available</p>
          ) : (
            data.slice(0, 5).map((el) => (
              <div
                className="flex justify-start bg-black   m-5 gap-5   p-4 rounded-xl shadow-xl"
                key={el.id}
              >
                <h3 className="font-semibold text-lg text-black bg-white w-7  text-center rounded-[100%] ">
                  {el.id}
                </h3>
                <Link href={`/${el.id}`}>
                  <h2 className="font-bold text-xl text-white hover:text-red-400 cursor-pointer">
                    {el.title}
                  </h2>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default blogs;
