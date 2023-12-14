import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center pt-2">*JasMin*</h1>
      <main className="m-5 flex justify-center ">
        <ul className="flex justify-around w-1/2 gap-5 font-bold text-lg bg-black text-white p-2 rounded-full ">
          <li >
            <Link href="/">Home</Link>
          </li>
          <li >
            <Link href="/blogs">Blogs</Link>
          </li>
          <li >
            <Link href="/contact_us">Contact us</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Navbar;
