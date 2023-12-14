import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <main className="m-5 ">
      <ul className="flex justify-center gap-5 font-semibold  ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
