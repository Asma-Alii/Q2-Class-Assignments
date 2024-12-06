import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function about() {
  return (
    <>
      <main
        className="w-[90vw] m-auto
        lg:w-[83vw] lg:m-auto"
      >
        <section
          className="w-[90vw] m-auto mt-28
            lg:flex 
            xl:w-[81.23vw] xl:mt-36 xl:flex xl:gap-28"
        >
          <div className="lg:w-[50%] xl:w-[45%]">
            <h1
              className={` ${dmSans.className} text-[6vw] font-medium tracking-tighter
                        lg:text-[4vw] lg:font-bold
                        xl:leading-none xl:font-medium xl-text-[3.7]`}
            >
              Hi I’m Mehmet Akif <br />
              Karasu, 3D artist & sculptor.
            </h1>

            <p
              className={`${dmSans.className} text-[3vw] text-[#414040] font-medium
                        lg:text-[2.3vw]
                        xl:text-[1.8vw] xl:mt-5 xl:leading-tight`}
            >
              My work is mainly focused on third-dimension modeling, texturing
              and rendering. I like exploring the creatures with a touch of dark
              surrealism for characters and production <br />
              <br />
              Now I’m an interactive media design student in Istanbul ⏤
              currently freelancing and seeking internship opportunities.
            </p>
          </div>

          <div
            className="flex justify-center m-auto mt-9 w-[60vw]
                  lg:w-[40%] lg:m-0
                  xl:w-[35%] xl:m-0"
          >
            <Image
              src={"/images/Profile Photo.jpg"}
              alt="profile-photo"
              layout="responsive"
              height={100}
              width={100}
            />
          </div>
        </section>

        <section className=" md:mt-20  xl:mt-28">
          <div
            className="flex gap-10 mt-12 md:text-[2vw] md:gap-20
                lg:text-[1.7vw]
                xl:text-[1.317vw] "
          >
            <p className="underline ">Main Software </p>
            <p className="w-[60vw] lg:w-[40vw] xl:w-[30vw]">
              Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold
              Renderer, Blender, Forger <br />
              <br /> Adobe CC, Figma, Ableton
            </p>
          </div>

          <div
            className="flex gap-14 mt-12 mb-10 md:text-[2vw] md:gap-24 md:mt-20
                lg:text-[1.7vw]
                xl:text-[1.317vw] "
          >
            <p className="underline">Main Skills</p>
            <p className="w-[60vw] lg:w-[40vw] xl:w-[30vw]">
              Organic and Polygonal Modeling, UV Layout, Texturing, Retopology,
              Ilustration, Sound Design
            </p>
          </div>
        </section>

        <section
          className={`mt-16 font-semibold leading-10 text-[2.7vw]  border-t-2 border-[#181717]
            md:mt-24 md:mb-20
            lg:text-[2vw] lg:flex gap-80
            xl:font-medium ${dmSans.className} `}
        >
          <div className="mt-10 lg:w-[30%]">
            <p className="">
              {" "}
              I am thrilled to answer to your next project &#x2192;{" "}
            </p>
          </div>

          <div className="lg:w-[30%] lg:mt-10">
            <p>makifkarasu@outlook.com</p>
          </div>
        </section>
      </main>
    </>
  );
}
