import Link from "next/link"
 
 export default function Form(){
    return(
        <div className="flex justify-center items-center min-h-96">
            <div className="w-96 h-96 bg-[#201A31] flex justify-center items-center rounded-3xl border-2 border-[#0DF5E3] ">
               <form className="space-y-4">

               
                <label className="text-white ml-4" htmlFor="email">
                    Email:
                </label>
                 <br />
                <input className="w-80 h-9 rounded-full pl-4 focus:outline-none" type="email" placeholder="Email" />
                <br/>
                <br />
                <label className="text-white ml-4 mt-6 " htmlFor="password">
                    Password:
                </label>
                <br />
                 <input className="w-80 h-9 rounded-full pl-4 focus:outline-none  " type="password" placeholder="Password" />

              <div className="pt-8 pl-20">
             <Link href={"/"}><button type="submit" className="flex flex-col items-center text-center px-4 py-2  
             font-bold bg-[#0DF5E3] h-11 w-40 rounded-full">Submit</button></Link>
               </div>
               </form>
            </div>
        </div>
    )
}