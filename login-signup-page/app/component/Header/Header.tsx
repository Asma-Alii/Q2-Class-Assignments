import Link from "next/link";

export default function Header() {
    return (
      <div className="bg-[#201A31] h-20 flex items-center justify-around">
      
        <ul className="flex space-x-32 text-white">
            <li>Home</li>
            <Link href={"/about"}><li>About</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
            <Link href={"/services"}><li>Services</li></Link>
        </ul>

        <div className="flex space-x-10 ">
          <Link href={"/signup"}>
            <button className="bg-[#0DF5E3] h-10 w-24 rounded-full">Sign Up</button>
          </Link>
          <Link href={"/login"}>
            <button className="bg-[#0DF5E3] h-10 w-24 rounded-full" >Log In</button>
           </Link>
        </div>
     

      </div>
    );
  }
  