import React from 'react'
import Image from "next/image";
import '../styles/style.css';
import Link from 'next/link';
import NavComponent from './nav';
export default function HeaderComponent() {
  return (
    <div className="bg-linear-to-r from-[#1ec7f6] to-[#4570c5] w-full min-h-[74px] pt-3 text-white pb-2">
        <div className="m-auto max-w-[1450px] grid grid-cols-1 sm:grid-cols-2">
            <div className="w-full ">
                <Link href="/"><Image src="/img/logo.png" width={165} height={45} alt="Zelscope" className="float-left" /></Link>
                <div className="float-left bg-[rgba(255,255,255,0.3)] rounded-lg ml-5 h-[35px] pt-0.5 pl-2 mt-3 w-[250px]">
                    <Image src="/img/zel-white.png" width={26} height={26} alt="Zelonis Blockchain" className="float-left mr-2 mt-0.5" />
                    
                </div>
            
            </div>
            <NavComponent/>
            
            
        </div>
    </div>
  )
}
