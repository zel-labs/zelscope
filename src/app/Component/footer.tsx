import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function FooterComponent() {
  return (
    <div className='bg-[#171717] p-4 min-h-[200px] '>
        <div className='m-auto max-w-[1450px]'>
            <div className='w-full pl-10 border-b-[1px] border-[#666666] float-left pb-3'>
                <Link href="https://x.com/ZelonisNetwork"><Image src="/img/x.png" height={20} width={20} alt='@ZelonisNetwork' className='float-left mr-3' /></Link>
                <Link href="https://t.me/zelonisofficial"><Image src="/img/telegram.png" height={20} width={20} alt='@ZelonisOfficial' className='float-left mt-0.5' /></Link>
                <span className='float-right text-[12px] mt-2'><Link href="/terms" className='underline underline-offset-2'>Terms and Conditions</Link> © Zelscope 2025 | Built by Zel-labs</span>
            </div>
            <div className='mt-3 w-full float-left text-2xl' >
                <Image src="/img/zel-round.png" alt="Zelonis Blockchain" height={47} width={47} className='float-left mr-4'/>
                <span className='pt-2 float-left'>Powered by Zelonis Blockchain</span>
            </div>
            <div className='mt-1 w-full float-left text-[14px]' >
                <span className='pt-2 float-left'>Zelscope is the leading Block Explorer and Search, API & Analytics <br />Platform for Zelonis Blockchain.</span>
            </div>
        </div>
    </div>
  )
}
