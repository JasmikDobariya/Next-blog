import Navbar from "@/Components/Navbar";
import Image from "next/image";

const index = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center pt-5">
        <Image src="/blog-post-ideas.jpeg" height={400} width={900}></Image>
      </div>
    </div>
  );
};

export default index;
