import HeaderComponent from '../../Component/header'
import SearchComponent from '../../Component/search'

import Link from 'next/link';
import FooterComponent from "../../Component/footer";

export default async function AccountPage({ params }) {
    
    const slug = params.slug;
    //get account balance
    const res = await fetch('http://localhost:4000/api/tx/'+slug, { cache: 'no-store' });
    let data = await res.json();
    const tx = data.data
    
    return (
        <>
        
        <HeaderComponent/>
        <div className='m-auto max-w-[1450px] mb-20'>
            <div className='grid grid-cols-2 mt-3'>
                <div>
                    <div className='text-[18px] font-semibold'>Transaction</div>
                    <div className='font-medium text-[#999] mt-2 text-[14px]'>{slug}</div>
                </div>
                
                <SearchComponent/>
            </div>
            <div className='w-full p-4 bg-[#282828] rounded-lg mt-4 grid grid-cols-4 text-[13px] gap-y-5'>
                <div className='col-span-4 font-semibold'>Overview</div>
                <div className='text-[#999]'>Signature</div>
                <div className='col-span-3 overflow-ellipsis overflow-hidden '>{tx.sighash}</div>
                <div className='text-[#999]'>Block & Timestamp</div>
                <div className='col-span-3  '><Link href={"/blockById/"+tx.blockheight} className='text-[#1c96e4]'>{formatPlainNumber(tx.blockheight)}</Link> | <span className='text-[#ccc] text-[12px] pl-3'>{dateToString(tx.timstamp)}</span></div>
                <div className='text-[#999]'>Result</div>
                
                <div className='col-span-3 '>{filterResult(tx.status)}</div>
                <div className='col-span-4 border-b-[1px] border-b-[#545454]'></div>
                <div className='text-[#999]'>Signer</div>
                <div className='col-span-3  '><Link href={"/account/"+tx.inpoint.sender} className='text-[#1c96e4]'>{tx.inpoint.sender}</Link></div>
                <div className='text-[#999]'>Fee</div>
                <div className='col-span-3  '>{(tx.fee)}</div>
                <div className='col-span-4 border-b-[1px] border-b-[#545454]'></div>
                <div className='text-[#999]'>Transaction Type</div>
                <div className='col-span-3  '>{filterAction(tx.txtype)}</div>
                <div className='text-[#999]'>Transacitons Intructions</div>
                <div className='col-span-3 t text-[12px]'>
                    <div className='bg-[#111] rounded-lg float-left p-4'>
                        <div>
                            <span className='bg-[#333] rounded-lg pl-3 pr-3 pt-1.5 pb-1.5 mr-3 float-left'><Link href={"/account/"+tx.inpoint.sender} className='hover:text-[#1c96e4]'>{tx.inpoint.sender}</Link> </span>
                            <span className='float-left pt-1.5'>→</span> 
                            <span className='bg-[#333] rounded-lg pl-3 pr-3 pt-1.5 pb-1.5 ml-3 float-left'><Link href={"/account/"+tx.outpoint?.[0].receiver} className='hover:text-[#1c96e4]'>{tx.outpoint?.[0].receiver}</Link></span>
                        </div>
                        <span className='mt-3 float-left'>Transfered {formatNumber(tx.inpoint.amount)} Zel</span>
                    </div>
                </div>
                <div className='text-[#999]'>Previous Blockhash</div>
                <div className='col-span-3'><Link href={"/block/"+tx.inpoint.concensushash} className='text-[#1c96e4]'>{(tx.inpoint.concensushash)}</Link></div>
                
                
            </div>
            
            
        </div>
        <FooterComponent />
        </>
    )
}

function dateToString(unixMilli){
    const date = new Date(unixMilli);
    return date.toString()
}

function isSentOrRecived(tx,slug){
    if (tx.inpoint.sender == slug){
        return (
            <div className='text-red-500'>- {formatNumber(tx.inpoint.amount)}</div>
        )
    }else{
        return (
            <div className='text-green-700'>+ {formatNumber(tx.inpoint.amount)}</div>
        )
    }
}

function filterAction(value){
    
    if (value == 0 ||value == 1){
        return "Transfer"
    }else if (value==20 ){
        return "Staking"
    }else if (value==21 ){
        return "Staking Release"
    }else if (value==30 ){
        return "Reward"
    }else if (value==20 ){
        return "Reward Release"
    }


}

function filterResult(val){
    if (val == 1){
        return (
            <span className='p-4 pt-1 pb-1 border-[1px] border-[#1ee03e] text-[#1ee03e] rounded-lg'>Success</span>
        )
    }else{
        return (
            <span className='p-4 pt-1 pb-1 border-[1px] border-[#e0391e] text-[#e0391e] rounded-lg'>Failed</span>
        )
    }
}

function formatNumber(value) {
  const num = Number(value);
  if (isNaN(num)) return '0.00';

  return num
    .toFixed(2) // ensures two decimals
    .replace(/\B(?=(\d{3})+(?!\d))/g, ", "); // adds commas
}

function formatPlainNumber(value) {
  const num = Number(value);
  if (isNaN(num)) return '0.00';

  return num
    .toFixed(0) // ensures two decimals
    .replace(/\B(?=(\d{3})+(?!\d))/g, ", "); // adds commas
}