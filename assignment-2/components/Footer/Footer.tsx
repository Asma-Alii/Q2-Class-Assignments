import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-customGray h-96 flex justify-between items-center ">
      <div className=" space-y-4 pl-5 pb-28 ">
        <h1 className="font-bold text-xl  ">Core Courses</h1>
        <ul className="space-y-3">
          <li>Programming Fundamentals</li>
          <li>Web2 Using NextJS</li>
          <li>Earn as You Learn</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h1 className="font-bold text-xl ">Advanced Courses</h1>
        <ul className="space-y-3">
          <li>Web 3 and Metaverse</li>
          <li>Cloud-Native Computing</li>
          <li>Artificial Intelligence (AI)</li>
          <li>Ambient Computing and IoT</li>
          <li>Genomics and Bioinformatic</li>
          <li>Network Programmability and Automation</li>
        </ul>
      </div>

      <div className="space-y-7 pr-28 pb-36  ">
        <h1 className="font-bold text-xl pl-9 ">Social Links</h1>
        <div className="flex space-x-5">
          <a href="https://www.facebook.com/" target="_blank">
            <Image src="/images/fb-icon2.png" alt="" width={45} height={100} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <Image
              src="/images/youtube-icon1.png"
              alt=""
              width={40}
              height={100}
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Image
              src="/images/insta-icon.png"
              alt=""
              width={40}
              height={100}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
