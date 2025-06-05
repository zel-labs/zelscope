import HeaderComponent from '../../Component/header'
import SearchComponent from '../../Component/search'
import { format } from 'timeago.js';
import Link from 'next/link';
import FooterComponent from "../../Component/footer";
export default async function AccountPage({ params }) {
    
    const slug = params.slug;
    //get account balance
    const res = await fetch('http://127.0.0.1:8545/blockById/'+slug, { cache: 'no-store' });
    const block = await res.json();
    let EpochNumber = 0
    let Reward = 0
    if (block.Header.Blockheight < 259200) {
		 EpochNumber = 1
		
	} else {
		epochSize = uint64(math.Ceil(float64(ch) / (259200 * 3)))
		EpochNumber = epochSize + 1
		
	}
    
    for (const tx of block.Transactions) {
       Reward = Reward+ tx.fee
    }
    return (
        <>
        
        <HeaderComponent/>
        <div className='m-auto max-w-[1450px]'>
            <div className='grid grid-cols-2 mt-3'>
                <div>
                    <div className='text-[18px] font-semibold'>Block</div>
                    <div className='font-medium text-[#999] mt-2 text-[14px]'>{slug}</div>
                </div>
                
                <SearchComponent/>
            </div>
            <div className='w-full p-4 bg-[#282828] rounded-lg mt-4 grid grid-cols-4 text-[13px] gap-y-5'>
                <div className='col-span-4 font-semibold'>Overview</div>
                <div className='text-[#999]'>Block</div>
                <div className='col-span-3  '><Link href={"/blockById/"+(block.Header.Blockheight)} className="text-[#1e8de0]">{formatPlainNumber(block.Header.Blockheight)}</Link></div>
                <div className='text-[#999]'>Timestamp</div>
                <div className='col-span-3  '>{format(block.Header.Blocktime)} | <span className='text-[#ccc] text-[12px] pl-3'>{dateToString(block.Header.Blocktime)}</span></div>
                <div className='text-[#999]'>Block Hash</div>
                <div className='col-span-3 '><Link href={"/block/"+(block.Header.Blockhash)} className="text-[#1e8de0]">{(block.Header.Blockhash)}</Link></div>
                <div className='text-[#999]'>Epoch</div>
                <div className='col-span-3  '>{EpochNumber}</div>
                <div className='text-[#999]'>Leader</div>
                <div className='col-span-3  '><Link href={"/account/"+block.ValidatorInfo.Addr} className="text-[#1e8de0]">{(block.ValidatorInfo.Addr)}</Link></div>
                <div className='text-[#999]'>Reward</div>
                <div className='col-span-3  '>{formatNumber(Reward)}</div>
                <div className='text-[#999]'>Transacitons</div>
                <div className='col-span-3 t'>{(block.Transactions.length)}</div>
                <div className='text-[#999]'>Previous Blockhash</div>
                <div className='col-span-3'><Link href={"/block/"+(block.Header.ParentHash)} className="text-[#1e8de0]">{(block.Header.ParentHash)}</Link></div>
                <div className='text-[#999]'>Version</div>
                <div className='col-span-3  '>{(block.Header.Version)}</div>
                
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
                {block.Transactions?.map((tx,i)=>(
                    <div className='grid grid-cols-8 text-[12px] border-b-[1px] border-b-[#666] pb-3 pt-3' key={i}>
                        <div className='col-span-2 text-ellipsis overflow-hidden pr-20'><Link href={"/tx/"+tx.txhash} className="text-[#1e8de0]">{tx.sighash}</Link></div>
                        <div>{format(block.Header.Blocktime)}</div>
                        <div><span className='p-1 pr-3 pl-3 rounded-lg border-[1px] border-[#1e8de0] text-[#1e8de0] '>{filterAction(tx.txtype)}</span></div>
                        <div className='text-ellipsis overflow-hidden pr-20 text-[#1e8de0]'><Link href={"/account/"+tx.inpoint.sender}>{tx.inpoint.sender}</Link></div>
                        <div className='text-ellipsis overflow-hidden pr-20 text-[#1e8de0]'><Link href={"/account/"+tx?.outpoint?.[0]?.receiver}>{tx?.outpoint?.[0]?.receiver}</Link></div>
                        {isSentOrRecived(tx,slug)}
                        <div>{formatNumber(tx.fee)}</div>
                    </div>
                ))}
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

function formatNumber(value) {
  const num = Number(value);
  if (isNaN(num)) return '0.00';

  return num
    .toFixed(6) // ensures two decimals
    .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // adds commas
}

function formatPlainNumber(value) {
  const num = Number(value);
  if (isNaN(num)) return '0.00';

  return num
    .toFixed(0) // ensures two decimals
    .replace(/\B(?=(\d{3})+(?!\d))/g, ", "); // adds commas
}