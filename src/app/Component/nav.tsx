import React from 'react'
import Image from "next/image";
export default function NavComponent() {
  return (
    <div className="mt-1 justify-self-end">
        <ul>
        
        <li className="float-left pr-5 pl-5 mt-2">
            <a href="/leaderboard">Leaderboard</a>     
        </li>
        <li className="float-left pr-5 pl-5 mt-2 group relative cursor-default">
            Blockchain
            <ul className='hidden group-hover:block absolute bg-[#333] rounded-lg text-[13px] overflow-hidden w-[250px] '>
                <li className='p-3 hover:bg-[#131313]'>Blocks <span className="float-right text-[10px] bg-amber-600 pt-1 pb-1 pl-2 pr-2 border-amber-900 rounded-lg ml-2">Coming Soon</span></li>
                <li className='p-3 hover:bg-[#131313]'>Transactions <span className="float-right text-[10px] bg-amber-600 pt-1 pb-1 pl-2 pr-2 border-amber-900 rounded-lg ml-2">Coming Soon</span></li>
            </ul>      
        </li>
        <li className="float-left pr-5 pl-5 mt-2">
            Resources <span className="float-right text-[10px] bg-amber-600 pt-1 pb-1 pl-2 pr-2 border-amber-900 rounded-lg ml-2">Coming Soon</span>
        </li>
        <li className="float-left pr-5 pl-5">
            <Image src="/img/zel-black.png" width={34} height={37} alt="Zelonis Blockchain" />
        </li>
        
        </ul>
    </div>
  )
}
