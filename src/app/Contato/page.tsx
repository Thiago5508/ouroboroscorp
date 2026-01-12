import Form from "@/components/Form";
import Maps from "@/components/Maps";
import Social from "@/components/Social";
import Link from "next/link";

export default function Contato() {
 return (
   <main className= "mx-auto text-black w-full h-max flex flex-col gap-8 row-start-2 items-center sm:items-start text-xl">
    <div className="max-w-7xl mt-5 mx-auto px-2 text-black w-full h-max flex flex-col sm:flex-row gap-8 row-start-2 items-center sm:items-start mb-36 ">
      <div className="w-full ">
        <Form/>
        </div>

        <div className=" flex flex-col items-center justify-center">
        <Maps/>
        <div className="flex flex-col items-center justify-center">
          <span>Nosso endereço no gps</span>
          <Link
          target="blank"
          href='https://maps.app.goo.gl/RP9NkmUxtQayJGhF7'
          rel="noopener noreferrer"
          className="font-semibold text-lg bg-green-500 text-white rounded-md px-2 py-1">Google Maps</Link>
          </div>
        
        </div>
    </div>
    <Social/>
   </main>
  );
}