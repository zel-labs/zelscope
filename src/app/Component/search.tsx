"use client"
import React from 'react'
import Image from "next/image";
import { useState } from 'react';
type Props = {
  className?: string
}

export default function SearchComponent({ className }: Props) {
  const [value, setValue] = useState('');
  
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
      // or handle value with a function here
    }
  };
  const handleSubmit = ()=>{
    
    fetch("/api/blockByHash/"+value).then(res => {
      if (res.status === 200){
        window.location.href = '/block/'+value;
      }
    })
    fetch("/api/tx/"+value).then(res => {
      if (res.status === 200){
        window.location.href = '/tx/'+value;
      }
    })
    fetch("/api/account/"+value).then(res=> {
      if (res.status === 200){
        window.location.href='/account/'+value;
      }
    })
  }
  return (
    <div className={`text-2xl font-medium pr-4 justify-self-end w-full `+className}>
        <div className="bg-[#333] w-full rounded-lg pl-4 h-[40px] box-border relative mt-2">
            <input type="text" placeholder="Search transactions, blocks and wallets" className="text-[14px] w-[90%] outline-0 text-white" 
            value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
            <Image src="/img/search.png" alt="Search" height={34} width={33} className="absolute right-2 top-[3px]" onClick={handleSubmit}/>
        </div>
        <div className="w-full text-[14px] mt-3">
            Sponsored: Reach Zelscope team to advertise on this space
        </div>
    
    </div>
  )
}
