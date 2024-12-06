import { DM_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Work() {
  return (
    <>
      <main className=" m-auto h-auto w-[90vw] mt-28 flex flex-col gap-y-5 mb-10 lg:m-auto lg:w-[83vw] xl:mb-36">
        <section className="lg:mt-16 xl:m-auto xl:w-[81.23vw] xl:mt-44">
          <div className="lg:flex xl:flex">
            <div className=" lg:w-[50%] xl:w-[43%]">
              <h1
                className={`text-5xl md:text-6xl xl:text-[4vw] font-medium   ${dmSans.className}`}
              >
                Hello, I’m <br /> Mehmet Akif.
              </h1>
            </div>

            <div className="lg:w-[50%]  lg:mt-[4.5vw] xl:w-[50%] xl:mt-[4vw] ">
              <p
                className={`font-normal text-2xl md:text-3xl lg:text-[2.2vw]  xl:text-[2vw]
        2xl:leading-snug text-[#686767] ${dmSans.className} `}
              >
                A senior-year design student who trying <br />
                to specialize in 3D modeling & texturing.
              </p>
            </div>
          </div>

          <div className="w-7 pt-7 lg:pt-14 lg:w-8">
            <Image
              src="/images/arrow-png.png"
              alt="arrow"
              height={5}
              width={5}
              layout="responsive"
            />
          </div>
        </section>

        {/*section 1*/}

        <section className="mt-16 border-b-2 border-[#181717] h-auto xl:mt-24 xl:pb-20 2xl:mt-56">
          <div className="lg:flex lg: gap-8 lg: flex-row-reverse xl:gap-36">
            <div className="w-[75vw] md:w-[70vw] lg:w-[80vw] xl:w-[60vw]  bg-slate-500">
              <Image
                src={"/images/Thumbnail.png"}
                alt="thumbnail"
                height={100}
                width={400}
                layout="responsive"
              />
            </div>

            <div
              className={`flex flex-col gap-y-4 w-[75vw] h-auto
        xl:w-[40vw] ${inter.className}`}
            >
              <h4
                className="font-medium text-xl pt-6 text-[#181717]
        md:text-[2.5vw]
        lg:text-[2vw]
        xl:text-[1.38vw] xl:pt-0  "
              >
                01 / PROJECT NAME
              </h4>

              <p
                className="font-normal text-lg text-[#181717]
        md: text-[2vw]
        lg:text-[1.7vw]
        xl:text-[1.30vw] xl:font-normal xl:leading-6 
        2xl:leading-normal"
              >
                Goblin concept digital sculpture with human-like skin. Learned a
                lot of quick tips and look development.
              </p>

              <p
                className="text-[#606060]
        md: text-[1.7vw]
        lg:text-[1.5vw]
        xl:font-normal xl:text-[1.1vw] xl:leading-5
        2xl:leading-normal"
              >
                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured
                in Mari, Rendered using Arnold.
              </p>
            </div>
          </div>

          <div className="pb-10 pt-8  xl:pb-0 xl:pt-0 ">
            <Link
              href={""}
              className="text-[#181717] font-medium text-lg underline decoration-black decoration-0
        md: text-[2vw]
        lg:text-[1.5vw]
        xl:text-[1.3vw]"
            >
              More shots from this project ↗
            </Link>
          </div>
        </section>

        {/*section 2*/}

        <section className="mt-16 border-b-2 border-[#181717] h-auto xl:mt-24 xl:pb-20 2xl:mt-56">
          <div className="lg:flex lg: gap-8 lg: flex-row-reverse xl:gap-36">
            <div className="w-[75vw] md:w-[70vw] lg:w-[80vw] xl:w-[60vw]  bg-slate-500">
              <Image
                src={"/images/Thumbnail.png"}
                alt="thumbnail"
                height={100}
                width={400}
                layout="responsive"
              />
            </div>

            <div
              className={`flex flex-col gap-y-4 w-[75vw] h-auto
  xl:w-[40vw] ${inter.className}`}
            >
              <h4
                className="font-medium text-xl pt-6 text-[#181717]
  md:text-[2.5vw]
  lg:text-[2vw]
  xl:text-[1.38vw] xl:pt-0  "
              >
                02 / PROJECT NAME
              </h4>

              <p
                className="font-normal text-lg text-[#181717]
  md: text-[2vw]
  lg:text-[1.7vw]
  xl:text-[1.30vw] xl:font-normal xl:leading-6 
  2xl:leading-normal"
              >
                Subsurface weight, specular roughness, diffuse maps generated
                with the procedure and manual techniques.
              </p>

              <p
                className="text-[#606060]
  md: text-[1.7vw]
  lg:text-[1.5vw]
  xl:font-normal xl:text-[1.1vw] xl:leading-5
  2xl:leading-normal"
              >
                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured
                in Mari, Rendered using Arnold.
              </p>
            </div>
          </div>

          <div className=" pb-10 pt-8 xl:pb-0 xl:pt-0 ">
            <Link
              href={""}
              className="text-[#181717] font-medium text-lg underline decoration-black decoration-2
  md: text-[2vw]
  lg:text-[1.5vw]
  xl:text-[1.3vw]"
            >
              See case study →
            </Link>
          </div>
        </section>

        {/*section 3*/}

        <section className="mt-16 border-b-2 border-[#181717] h-auto xl:mt-24 xl:pb-20 2xl:mt-56">
          <div className="lg:flex lg: gap-8 lg: flex-row-reverse xl:gap-36">
            <div className="w-[75vw] md:w-[70vw] lg:w-[80vw] xl:w-[60vw]  bg-slate-500">
              <Image
                src={"/images/Thumbnail.png"}
                alt="thumbnail"
                height={100}
                width={400}
                layout="responsive"
              />
            </div>

            <div
              className={`flex flex-col gap-y-4 w-[75vw] h-auto
  xl:w-[40vw] ${inter.className}`}
            >
              <h4
                className="font-medium text-xl pt-6 text-[#181717]
  md:text-[2.5vw]
  lg:text-[2vw]
  xl:text-[1.38vw] xl:pt-0  "
              >
                03 / PROJECT NAME
              </h4>

              <p
                className="font-normal text-lg text-[#181717]
  md: text-[2vw]
  lg:text-[1.7vw]
  xl:text-[1.30vw] xl:font-normal xl:leading-6 
  2xl:leading-normal"
              >
                Experimental creature modeling for school projects.
              </p>

              <p
                className="text-[#606060]
  md: text-[1.7vw]
  lg:text-[1.5vw]
  xl:font-normal xl:text-[1.1vw] xl:leading-5
  2xl:leading-normal"
              >
                Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured
                in Mari, Rendered using Arnold.
              </p>
            </div>
          </div>

          <div className="pb-10 pt-8 xl:pb-0 xl:pt-0 ">
            <Link
              href={""}
              className="text-[#181717] font-medium text-lg underline decoration-black decoration-2
  md: text-[2vw]
  lg:text-[1.5vw]
  xl:text-[1.3vw]"
            >
              Project WIP
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
