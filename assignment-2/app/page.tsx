import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full">
      <div>
        <Image className="w-full bg-white opacity-25" src="https://arynews.tv/wp-content/uploads/2017/01/governor-news.jpg" alt="description" 
         width={100} 
         height={100}  />
      </div>

      <div className="w-10">
        <Image
          className="max-h-full absolute bottom-0 -right-40"
          src="/images/cover.governor.png"
          alt="" width={900} 
          height={500}
        />
      </div>

      <div className=" space-y-4 w-1/2 absolute bottom-40 left-9 text-5xl ">
        <h1 className="font-extrabold text-customBlue">Governor Sindh</h1>

        <p className="text-customBlue">Kamran Khan Tessori</p>

        <h1 className="font-extrabold text-sky-400">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h1>

        <h3 className="font-extrabold text-customBlue text-2xl   ">
          Earn up to $5,000 / month Now admissions are open in Hyderabad
        </h3>
      </div>
    </div>
  );
}
