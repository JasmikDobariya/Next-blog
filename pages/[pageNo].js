import Navbar from "@/Components/Navbar";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts"
  );
  const data = await res.json();

  const paths = data.blogs.map((el) => {
    return {
      params: {
        pageNo: el.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blogsPage = ({ data }) => {
  const { blog } = data;
  return (
    <>
      <Navbar />
      <div className="container m-10">
        <h1 className="text-center text-3xl font-bold">
          Welcom To Blogs {blog.id}
        </h1>
        <div className="grid justify-center pt-5 ">
          <div className=" grid m-5 bg-black gap-5   p-14 rounded-xl">
            <h3 className="font-semibold text-lg bg-white w-7 text-center rounded-[100%] text-black ">
              {blog.id}
            </h3>

            <h2 className="font-bold text-xl text-white">{blog.title}</h2>
            <p className="text-white capitalize">{blog.category}</p>
            <p className="text-white text-base ">{blog.content_text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogsPage;
