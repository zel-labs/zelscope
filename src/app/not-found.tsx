import FooterComponent from "./Component/footer";
import HeaderComponent from "./Component/header";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
    <HeaderComponent/>
    <div className="grid max-w-[1450px] m-auto justify-center h-[calc(100vh-230px)] bg-[#333] rounded-lg mt-10 mb-20 content-center">
      <div className="text-center">
        <div className="text-[28px]">Zelscope Explorer </div>
        <div className="text-[24px]">
          Page Not Found<br/>
          <Link href="/" className="text-[14px] underline">Go back to Home</Link> 
        </div>
      </div>
    </div>
    <FooterComponent/>
    </>
  )
}