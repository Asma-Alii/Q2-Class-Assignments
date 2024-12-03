import Link from "next/link"
import Image from "next/image"

export default function Header (){
    return(
        <div className=" bg-customBlue text-white flex items-center justify-evenly h-20">

            <div className="mt-16 mr-8">
            
            <Image className="h-280" src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="logo"
             width={100} height={200}  />
            
            </div>

           <div className="font-black text-xl text-indigo-200">
            <h1>Tuition Free Education Program on Latest Technologies</h1>
            </div>
           
          <div className="ml-24" >
           <ul className="flex space-x-10">
            <Link href={"/"}><li>Home</li></Link>
           <Link href={"/apply"}><li>Apply</li></Link> 
           <Link href={"/jobs"}> <li>Jobs</li></Link>
            <Link href={"/result"}><li>Result</li></Link>
            <Link href={"/courses"}><li>Courses</li></Link>
           </ul>
          </div>
        
        </div>
    )

       
       
    
};