'use client'
import hero8 from '../../assets/hero8.png'
import hero7 from '../../assets/hero7.png'
import Image from 'next/image';



export default function Temp() {

    return (
        <main>
            <div className="hidden md:flex items-center left-0 ">
                <Image src={hero7} alt="" className="rounded-md justify-start flex object-cover h-56"/>
            </div>
            <div className="flex md:hidden items-center left-0 w-full ">
                <Image src={hero8} alt="" className="rounded-md justify-start flex-1"/>
            </div>

        </main>
    )
}
