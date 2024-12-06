
import {DM_Sans} from "next/font/google"

const dmSans = DM_Sans({
    subsets:["latin"]
});

export default function Footer (){
    return(
        <>
        <footer className={`${dmSans.className} font-medium w-[90vw]  m-auto flex flex-col items-center pt-7 pb-7 text-[3vw]
        lg:text-[2vw] lg:flex lg:flex-row lg:justify-between lg:w-[83vw] lg:pt-20
        xl:text-[1.5vw] xl:pt-9 xl:pb-16`}>
            <div>
                <p className="text-[#2429AF]">Mehmet Akif Karasu ⏤ 2020</p>
            </div>
            <div>
                <ul className="flex gap-6">
                    <li>Artstation</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </footer>



        </>
    )
}