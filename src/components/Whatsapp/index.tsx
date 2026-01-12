'use client'

import Image from 'next/image';
import Link from 'next/link';
import appImage from '@/assets/layout/hero7.png'



export default function Whatsapp() {

    return (
    <Link className="w-full md:block hidden" href='https://api.whatsapp.com/send?phone=5579998431776'>
          <Image src={appImage} alt='Whatsapp image'/>
    </Link>
    )
}
