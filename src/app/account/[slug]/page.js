
import HeaderComponent from '../../Component/header'
import SearchComponent from '../../Component/search'
import { format } from 'timeago.js';
import FooterComponent from "../../Component/footer";
import Link from 'next/link';
import Custom404 from '@/app/not-found';

export default async function AccountPage({ params }) {
    
    const slug = params.slug;
    //get account balance
    const res = await fetch('http://localhost:4000/api/account/'+slug, { cache: 'no-store' });
    if (!res.ok) {
        return <Custom404/>
    }
    let data = await res.json();
    const account = await data.data
    const txRes = await fetch('http://localhost:4000/api/accountTxList/'+slug, { cache: 'no-store' });
    
    data = await txRes.json();
    const accountTx = await data.data

    return (
        <>
        
        <HeaderComponent/>
        <div className='m-auto max-w-[1450px]'>
            <div className='grid grid-cols-2 mt-3'>
                <div>
                    <div className='text-[18px] font-semibold'>Account</div>
                    <div className='font-medium text-[#999] mt-2 text-[14px]'>{slug}</div>
                </div>
                
                <SearchComponent className='bg-[#131313]'/>
            </div>
            <div className='grid grid-cols-3 mt-4'>
                <div className='bg-[#282828] h-[222px] rounded-lg mr-2 p-4'>
                    <div className='font-semibold'>Overview</div>
                    <div className='grid grid-cols-2 mt-3 gap-y-4 font-light tracking-widest text-[14px]'>
                        <div className=' col-start-1 col-end-1 text-[#999]'>Zel Balance</div>
                        <div >{formatNumber(account.balance,3)}</div>
                        <div className='font-light col-start-1 col-end-1 text-[#999]'>Stake</div>
                        <div >{formatNumber(account.stake,3)}</div>
                        <div className='font-light col-start-1 col-end-1 text-[#999]'>Reward</div>
                        <div >{formatNumber(account.reward,3)}</div>
                    </div>
                    
                </div>
                <div className='bg-[#282828] h-[222px] rounded-lg ml-1 mr-1 p-4'>
                    <div className='font-semibold'>Validator Info</div>
                    <div className='grid grid-cols-2 mt-3 gap-y-4 font-light tracking-widest text-[14px]'>
                        <div className=' col-start-1 col-end-1 text-[#999]'>Activating</div>
                        <div >{formatNumber(account.activating_stake,3)}</div>
                        <div className='font-light col-start-1 col-end-1 text-[#999]'>Deactivating</div>
                        <div >{formatNumber(account.deactivating_stake,3)}</div>
                        <div className='font-light col-start-1 col-end-1 text-[#999]'>Pending Active</div>
                        <div >{formatNumber(account.pending_activation,3)}</div>
                        <div className='font-light col-start-1 col-end-1 text-[#999]'>Pending Deactive</div>
                        <div >{formatNumber(account.pending_activation,3)}</div>
                    </div>
                </div>
                <div className='bg-[#282828] h-[222px] rounded-lg ml-2 p-4'>
                    <div className='font-semibold'>Stake Info</div>
                    <div className='grid grid-cols-3 mt-3 gap-y-4 font-light tracking-widest text-[14px]'>
                        <div className=' col-start-1 col-end-1 text-[#999]'>Warmup</div>
                        <div className='col-span-2'>{formatNumber(account.activating_stake,3)}</div>
                        <div className='font-light col-start-1 col-end-1 text-[#999]'>Cooldown</div>
                        <div className='col-span-2'>{formatNumber(account.deactivating_stake,3)}</div>
                        
                    </div>
                </div>
            </div>
            <div className='w-full p-4 bg-[#282828] rounded-lg mt-4 mb-20'>
                <div className='font-semibold '>Transactions</div>
                <div className='grid grid-cols-8 text-[12px] border-b-[1px] border-b-[#666] pb-3 pt-3'>
                    <div className='col-span-2'>Signature</div>
                    <div>Time</div>
                    <div>Action</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Value</div>
                    <div>Fee</div>
                </div>
                {accountTx.tx_list?.map((tx,i)=>(
                    <div className='grid grid-cols-8 text-[12px] border-b-[1px] border-b-[#666] pb-3 pt-3' key={i}>
                        <div className='col-span-2 text-ellipsis overflow-hidden pr-20'><Link href={"/tx/"+tx.txhash} className="text-[#1e8de0]">{tx.sighash}</Link></div>
                        <div>{format(tx.timstamp)}</div>
                        <div><span className='p-1 pr-3 pl-3 rounded-lg border-[1px] border-[#1e8de0] text-[#1e8de0] '>{filterAction(tx.txtype)}</span></div>
                        <div className='text-ellipsis overflow-hidden pr-20'><Link className="text-[#1e8de0]" href={"/account/"+tx.inpoint.sender}>{tx.inpoint.sender}</Link></div>
                        <div className='text-ellipsis overflow-hidden pr-20'><Link className="text-[#1e8de0]" href={"/account/"+tx?.outpoint?.[0]?.receiver}>{tx?.outpoint?.[0]?.receiver}</Link></div>
                        {isSentOrRecived(tx,slug)}
                        <div>{formatNumber(tx.fee,7)}</div>
                    </div>
                ))}
            </div>
        </div>
        <FooterComponent />
        </>
    )
}

function isSentOrRecived(tx,slug){
    if (tx.inpoint.sender == slug){
        return (
            <div className='text-red-500'>- {formatNumber(tx.inpoint.amount,3)}</div>
        )
    }else{
        return (
            <div className='text-green-700'>+ {formatNumber(tx.inpoint.amount,3)}</div>
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



function formatNumber(number,digits) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(number);
}