

export default function Footer(){
    return(
 <footer className="bg-[#201A31] h-auto text-white  ">

    <div className="flex justify-evenly pt-7" >
    <ul className="space-y-5">
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
    </ul>
 
 <ul className="space-y-5">
    <li>Facebook</li>
    <li>Instagram</li>
    <li>Twitter</li>
 </ul>
 </div>

<div className="flex justify-center pt-20 pb-3 ">
 <p>&copy; 2024 Your Website. All rights reserved.</p>
</div>

</footer>

       
    )
}