import React from 'react'
import HeaderComponent from '../Component/header'
import Custom404 from '../not-found';
import SearchComponent from '../Component/search';
import FooterComponent from '../Component/footer';

export default async function page() {
    const res = await fetch('http://localhost:4000/api/richlist/', { cache: 'no-store' });
    if (!res.ok) {
        return <Custom404/>
    }
    let data = await res.json();
    console.log(data)
  return (
    <>
    <HeaderComponent/>
    <div className='m-auto max-w-[1450px] p-3'>
        <div className='grid grid-cols-2 mt-3'>
            <div>
                <div className='text-[18px] font-semibold'>Account Leaderboard</div>
                
            </div>
            
            <SearchComponent/>
        </div>
        <div className='bg-[#282828]  rounded-lg mr-2 mt-4'>

        
        <div className='grid-cols-12 grid gap-3 mb-3 text-[12px] pl-3 pt-3 '>
            <div className='col-span-1'>No</div>
            <div className='col-span-4'>Account</div>
            <div className='col-span-3'>Zel Native Holding</div>
            <div className='col-span-3'>Zel Stake Holding</div>
        </div>
        {data.data.map((tx,i)=>(
            <div className='grid-cols-12 grid gap-3 mt-1 font-light text-[12px] pt-4 pb-4 border-t-[1px] border-[#333333] hover:bg-[#1a1a1a]' key={i}>
                <div className='col-span-1 pl-3'>{i+1}</div>
                <div className='col-span-4 overflow-hidden overflow-ellipsis text-[#1e8de0]'><a href={"/account/"+tx.address}>{tx.address}</a></div>
                <div className='col-span-3 tracking-widest'>{formatNumber(tx.balance,3)}</div>
                <div className='col-span-3'>{formatNumber(tx.stake,3)}</div>
            </div>
            
        ))
        }
        </div>
    </div>
    <FooterComponent/>
    </>
  )
}

function formatNumber(number,digits) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(number);
}