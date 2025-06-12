'use client'
import Image from "next/image";
import './styles/style.css';

import { useEffect,useState } from 'react'
import { format } from 'timeago.js';
import Link from 'next/link';
import FooterComponent from "./Component/footer";
import SearchComponent from "./Component/search";
import { CSSProperties } from "react";

export default function Home() {
     const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    console.log('Input value:', inputValue);
  };
  const [supply, setSupply] = useState<any>(null);
  const [csupply, setCSupply] = useState<any>(null);
  const [nonsupply, setNonSupply] = useState<any>(null);
  const [totalTx, setTotalTx] = useState<any>(null);
  const [lastestBlockHeight, setLastestBlockHeight] = useState<any>(null);
  const [epoch, setEpoch] = useState<any>(null);
  

 const [blocks, setBlocks] = useState(null);
 const [txs, setTxs] = useState(null);
   
  useEffect(() => {
     function loadStatus(){
      setTimeout(()=>{fetch('/api/currentstatus/') 
        .then(res =>res.json())
        .then(json => {
          
          setSupply(json.data.totalSupply);
          setCSupply(json.data.totalCirculating);
          setNonSupply(json.data.totalStaked	);
          setTotalTx(json.data.totalTransactions);
          setLastestBlockHeight(json.data.lastestBlockHeight);
          setEpoch(json.data.epoch);
        
          //alert(json.totalSupply)
          
        }).then(
          
          loadStatus
        )
      },1000)
       
      
     }
     function loadBlocks(){
      setTimeout(()=>{
        fetch('/api/latestblocks').then(res=>res.json())
        .then(json => {
          
          setBlocks(json.data)
          
        }).then(loadBlocks)
      },1000)
     }

     function loadTransactions(){
      setTimeout(()=>{
        fetch('/api/latesttxs').then(res=>res.json())
        .then(json =>{
          
          setTxs(json.data)
        }).then(loadTransactions)
      },1000)
     }
     /* 
      
     },1000)*/
     loadStatus()
     loadBlocks()
     loadTransactions()
  }, [])
  return (
    <>
    <div className="bg-[#1a1a1a] h-full pb-20">
      <div className="bg-linear-to-r from-[#1ec7f6] to-[#4570c5] w-full h-[236px] pt-3 text-white">
        <div className="m-auto max-w-[1450px] grid grid-cols-2">
          <div className="w-full ">
            <Link href="/"><Image src="/img/logo.png" width={165} height={45} alt="Zelscope" className="float-left" /></Link>
            <div className="float-left bg-[rgba(255,255,255,0.3)] rounded-lg ml-5 h-[35px] pt-0.5 pl-2 mt-3 w-[250px]">
              <Image src="/img/zel-white.png" width={26} height={26} alt="Zelonis Blockchain" className="float-left mr-2 mt-0.5" />
              
            </div>
            
          </div>
          <div className=" mt-1">
              <ul>
                
                <li className="float-left pr-5 pl-5 mt-2">
                  Leaderboard  <span className="float-right text-[10px] bg-amber-600 pt-1 pb-1 pl-2 pr-2 border-amber-900 rounded-lg ml-2">Coming Soon</span>      
                </li>
                <li className="float-left pr-5 pl-5 mt-2">
                  Blockchain          
                </li>
                <li className="float-left pr-5 pl-5 mt-2">
                  Resources <span className="float-right text-[10px] bg-amber-600 pt-1 pb-1 pl-2 pr-2 border-amber-900 rounded-lg ml-2">Coming Soon</span>
                </li>
                <li className="float-left pr-5 pl-5">
                  <Image src="/img/zel-black.png" width={34} height={37} alt="Zelonis Blockchain" />
                </li>
                
              </ul>
          </div>
          <div className="w-full text-2xl font-medium col-end-2 mt-10">
            <div className="w-full">
              Explore Zelonis Blockchain
            </div>
            <SearchComponent></SearchComponent>
            
            
            
          </div>
          
        </div>
      </div>
      <div className="m-auto max-w-[1450px] grid grid-cols-4 ">
        <div className="bg-[#282828] h-[40px] col-span-4 rounded-lg mt-3"></div>
        <div className="bg-[#282828] h-[260px] rounded-lg mt-3 mr-2 p-4 ">
            <div className="text-[14px] mb-2">
              Zel Supply
            </div>
            <div className="text-[16px] font-medium">
              {Number(supply).toFixed(2)}
            </div>
            <div className="bg-[#1a1a1a] rounded-lg w-full h-[150px] mt-3 box-border p-4 pt-4">
              <div className="text-[14px] text-[#999999]">
                Circulating Supply
              </div>
              <div className="text-[14px] text-[#fff]">
                {Number(csupply).toFixed(2)} ({calculatePercent(csupply,supply).toFixed(2)}%)
              </div>
              <div className="border-t-2 border-t-[#666] mt-4 mb-4"></div>
              <div className="text-[14px] text-[#999999]">
                Non-circulating Supply
              </div>
              <div className="text-[14px] text-[#fff]">
                {Number(nonsupply).toFixed(2)} ({calculatePercent(nonsupply,supply).toFixed(2)}%)
              </div>
            </div>
        </div>
        <div className="bg-[#282828] h-[260px] rounded-lg mt-3 mr-2 ml-2 p-4 ">
            <div className="text-[14px] mb-2">
              Current Epoch 
              <div className="float-right w-[100px] bg-[#555555] h-[8px] mt-2">
                <span className=" bg-[#1c96e4] h-full float-left" style={{ width: `${Number(lastestBlockHeight*100/epoch?.epoch_end).toFixed(2)}%` }}></span>
              </div>
            </div>
            <div className="text-[16px] font-medium">
              {Number(epoch?.epoch_number).toLocaleString()} <span className="text-[#1c96e4] float-right">{Number(lastestBlockHeight*100/epoch?.epoch_end).toFixed(2)}%</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg w-full h-[150px] mt-3 box-border p-4 pt-4">
              <div className="text-[14px] text-[#999999]">
                Slot Range
              </div>
              <div className="text-[14px] text-[#fff]">
                {epoch?.epoch_start} - {epoch?.epoch_end}
              </div>
              <div className="border-t-2 border-t-[#666] mt-4 mb-4"></div>
              <div className="text-[14px] text-[#999999]">
                Time Remaining
              </div>
              <div className="text-[14px] text-[#fff]">
                {format((epoch?.time_remaining))}
              </div>
            </div>
        </div>
        <div className="bg-[#282828] h-[260px] rounded-lg mt-3 mr-2 ml-2 p-4 ">
            <div className="text-[14px] mb-2">
              Network (Transaction) 
            </div>
            <div className="text-[16px] font-medium">
              {Number(totalTx).toLocaleString()}
            </div>
            <div className="bg-[#1a1a1a] rounded-lg w-full h-[150px] mt-3 box-border p-4 pt-4 grid grid-cols-2">
              
              <div>
                <div className="text-[14px] text-[#999999]">
                  Block Height
                </div>
                <div className="text-[14px] text-[#fff]">
                  {lastestBlockHeight}
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-[14px] text-[#999999]">
                  Slot Height
                </div>
                <div className="text-[14px] text-[#fff]">
                  {epoch?.epoch_number}
                </div>
              </div>


              <div className="border-t-2 border-t-[#666] mt-4 mb-4 col-span-2"></div>
              <div className="col-span-1">
                <div className="text-[14px] text-[#2c7fd5]">
                  TPS
                </div>
                <div className="text-[14px] text-[#fff]">
                  0
                </div>
              </div>
              <div className="col-span-1">
                <div className="text-[14px] text-[#2c7fd5]">
                  True TPS
                </div>
                <div className="text-[14px] text-[#fff]">
                  0
                </div>
              </div>
            </div>
        </div>
        <div className="bg-[#282828] h-[260px] rounded-lg mt-3 ml-2 p-4 ">
          <div className="text-[14px] mb-2">
              Total Stake (Zel) 
          </div>
          <div className="text-[16px] font-medium">
              {Number(nonsupply).toLocaleString()}
          </div>
          <div className="bg-[#1a1a1a] rounded-lg w-full h-[150px] mt-3 box-border p-4 pt-4">
              <div className="text-[14px] text-[#999999]">
                Current Stake
              </div>
              <div className="text-[14px] text-[#fff]">
                {Number(nonsupply).toFixed(2)} ZEL (0%)
              </div>
              <div className="border-t-2 border-t-[#666] mt-4 mb-4"></div>
              <div className="text-[14px] text-[#999999]">
                Delinquent Stake
              </div>
              <div className="text-[14px] text-[#fff]">
                0 ZEL (0%)
              </div>
            </div>
        </div>
        <div className="bg-[#282828] col-span-2 min-h-90 mt-3 rounded-lg mr-2 pt-4 text-[12px] pb-10">
          <div className="text-[14px] pl-3 mb-3">
            Latest Blocks
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-2 ml-3">Block Hash</div>
            <div>Slot</div>
            <div>Time</div>
            <div>Leader</div>
          </div>
          <div className="border-t-1 border-t-[#666] mt-4 "></div>
          {blocks?.blocks?.map((val, index) => (
            
            <div className="grid grid-cols-5 border-b-1 border-b-[#666] pt-4 pb-4" key={index}>
              <div className="text-[#1e8ee0] col-span-2 overflow-ellipsis overflow-hidden ml-3 mr-15"><Link href={"block/"+val.Header.Blockhash}>{val.Header.Blockhash}</Link></div>
              <div className="text-[#1e8ee0]"><Link href={"/blockById/"+val.Header.Blockheight}>{val.Header.Blockheight}</Link></div>
              <div>{format(val.Header.Blocktime)}</div>
              <div className="text-[#1e8ee0] overflow-ellipsis overflow-hidden mr-3"><Link href={"/account/"+val.ValidatorInfo.Addr}>{val.ValidatorInfo.Addr}</Link></div>
            </div>
            
          ))}
          
          
        </div>
        <div className="bg-[#282828] col-span-2 min-h-90 mt-3 rounded-lg  pt-4 text-[12px] ml-2 pb-10">
          <div className="text-[14px] pl-3 mb-3">
            Latest Transaction
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-2 ml-3">Signature</div>
            <div>Time</div>
            <div>Block</div>
            <div>Instructions</div>
          </div>
          <div className="border-t-1 border-t-[#666] mt-4 "></div>
          {txs?.tx_list?.map((val,id)=>(
            <div className="grid grid-cols-5 border-b-1 border-b-[#666] pt-4 pb-4" key={id}>
                <div className="text-[#1e8ee0] col-span-2 overflow-ellipsis overflow-hidden ml-3 mr-15"><Link href={"/tx/"+val.txhash}>{val.sighash}</Link></div>
                <div>{format(val.timstamp)}</div>
                <div className="text-[#1e8ee0]"><Link href={"/blockById/"+val.blockheight}>{val.blockheight}</Link></div>
                <div className="text-[#1e8ee0]"><span className="rounded-lg p-3 pt-1 pb-1 border-[#1e8ee0] border-[1px]">{filterAction(val.txtype)}</span></div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
    <FooterComponent />
    </>
  );
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

function calculatePercent(cVal,tVal)
{
    let p = (cVal*100)/tVal
    return p
}