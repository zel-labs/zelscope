import React from 'react'
import Image from "next/image";
export default function SearchComponent() {
  return (
    <div className="w-[500px] text-2xl font-medium pr-4 justify-self-end">
        <div className="bg-[#333] w-full rounded-lg pl-4 h-[40px] box-border relative mt-2">
            <input type="text" placeholder="Search transactions, blocks and wallets" className="text-[14px] w-[90%] outline-0 text-white" />
            <Image src="/img/search.png" alt="Search" height={34} width={33} className="absolute right-2 top-[3px]"/>
        </div>
        <div className="w-full text-[14px] mt-3">
            Sponsored: Reach Zelscope team to advertise on this space
        </div>
    
    </div>
  )
}
