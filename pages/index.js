import Navbar from "@/Components/Navbar";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <Navbar />
        </div>
        <div className="flex justify-center pt-2">
          <Image
            src="/blog-post-ideas.jpeg"
            height={400}
            width={900}
            alt="BlogImage"
            priority={true}
            style={{ width: "63%", height: "50%" }}
          />
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-2 mt-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-sm">
              &copy; 2023 Your Website JasMin. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/blogs" className="hover:text-gray-400">
            Blogs
            </a>
            <a href="/contact_us" className="hover:text-gray-400">
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
