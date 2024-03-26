"use client"
import Image from "next/image";
import Link from "next/link";
import { A } from "./server";
import { useRef } from "react";


export default function Home() {
    let ref = useRef()
  return (
     <>
         <div className="h-[600px] bg-sky-600 w-full flex">
             <div className="h-full w-1/2 flex flex-col gap-5 justify-center ml-36">
              <div className="text-[50px] font-extrabold">
                 <p>Simplifying your</p>
                 <p>business journey</p>
                 </div>
                 <div>
                  <p>Build your business with a platform that simplifies every</p>
                  <p>step of starting, managing, and growing a business</p>
                 </div>
                 <div>
                    <form action={A}>
                    <input className="focus:outline-none pl-4 h-[50px] w-[400px] border-2 border-black placeholder:p-5" type="text" name="name" id="name" placeholder="Enter your business name"></input>
                    <div className="mt-10">
                  <button className="px-12 py-4  rounded-[100px] bg-blue-600 text-white">Get Started</button>
                 </div>
                    </form>
                 </div>
                
                 <div>
                 Starts at $0 + state fee
                 </div>
             </div>
             <div className="h-full w-1/2 flex items-center justify-center">
                 <img className="w-[450px]" src="https://www.tailorbrands.com/wp-content/uploads/2023/10/hp-main-image2.png" alt="logo"></img>
             </div>
         </div>
         <div className="h-[100px] flex items-center justify-center border">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2023/10/trust-dt4.png" alt="logo"></img>
         </div>
         <div className="h-[30px] mt-5 w-full flex flex-row gap-40 items-center justify-center">
            <p className="h-0 border-2  border-black mt-5 w-[400px]"></p>
            <p className="mt-5 border-x-none "> AS  SEEN  ON </p>
            <p className="h-0 border-2 border-black mt-5 w-[400px]"></p>
         </div>

        <div className="h-[1000px] bg-rose-50 mt-10">
            <div className="h-[300px] flex items-center flex-col gap-5 justify-center">
                <h1 className="text-[40px] font-extrabold">We make your business official</h1>
                <div className="flex flex-col items-center">
                <p>Whether you’re already in business or just getting started, our revolutionary</p>
                <p>business-building platform connects all the tools needed to build a</p>
                <p>successful business and provides personalized guidance.</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="grid grid-cols-[repeat(3,minmax(100px,300px))] gap-5 ">
                   <div className=" flex items-center justify-center">
                    <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/llc-1.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/ein.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/licensess-2.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/tax.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/insurance.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/trademark.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/bank.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/logo.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/web.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/domain.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/digital-card.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/mail.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/experts.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/biz-cards.png" alt="logo"></img>
                   </div>
                   <div className="">
                   <img src="https://www.tailorbrands.com/wp-content/uploads/2023/12/merch.png" alt="logo"></img>
                   </div>
            </div>
            </div>

        </div>
        <div className="h-[600px] bg-white-50 flex w-full ">
            <div className="h-full w-1/2 flex flex-col justify-center">
                <h1 className="text-[40px] ml-52">Set up your business</h1>
                <span className="ml-52 mt-8"><a className="text-blue-600" href="/">Form your LLC</a> with an EIN and file for all the</span>
                <p className="ml-52">licenses and permits you need to legally operate</p>
                <p className="ml-52">and make sure your business is set up for success.</p>
            </div>
            <div className="h-full w-1/2 flex items-center justify-start">
                <img className="w-[400px]" src="https://www.tailorbrands.com/wp-content/uploads/2023/09/set-up.png" alt="logo"></img>
            </div>
        </div>
        <div className="h-[400px] w-full bg-cyan-50 flex ">
              <div className="h-full w-1/2 flex items-center justify-center">
                <img className="w-[400px]" src="https://www.tailorbrands.com/wp-content/uploads/2023/09/manage.png" alt="logo"></img>
              </div>
              <div className="h-full w-1/2 flex flex-col justify-center">
               <h1 className="text-[40px]">Manage your business</h1>
               <p className="mt-6">Get your business bank account, stay on top of your</p>
               <p>finances with our budget planner, and access pre-</p>
               <p>designed legal contracts and documents to streamline</p>
               <p>interactions with vendors.</p>
              </div>
        </div>
        <div className="h-[500px] w-full bg-emerald-50 flex">
           <div className="h-full w-1/2 flex flex-col  justify-center">
               <h1 className="text-[40px] ml-60">Grow your business</h1>
               <p className="mt-4 ml-60">Expand your reach and gain more attention with an</p>
               <p className="ml-60">e-commerce store, custom website, and a suite of</p>
               <p className="ml-60">marketing tools</p>
           </div>
           <div className="h-full w-1/2 flex items-center justify-start">
            <img className="w-[450px] mt-5" src="https://www.tailorbrands.com/wp-content/uploads/2023/10/grow.png" alt="logo"></img>
           </div>
        </div>
        <div className="h-[600px] bg-orange-300 w-full flex">
            <div className="h-full w-1/3 flex items-center justify-end">
                <img className="w-[400px]" src="https://www.tailorbrands.com/wp-content/uploads/2023/09/biz-owners-left-1.png" alt="logo"></img>
            </div>
            <div className="h-full w-1/3 flex items-center flex-col justify-center gap-5">
                <div>
                <h1 className="text-[40px]">We empower millions</h1>
                <h1 className="text-[40px]">of business owners</h1>
                </div>
                <div>
                <p>Providing the tools, guidance, and resources</p>
                <p>needed on their business journey</p>
                </div>
                <div>
                <p><a className="text-blue-600 underline underline-offset-4" href="/">Check the reviews</a></p>
                </div>
                <div>
                  <p><a className="text-blue-600 underline underline-offset-4" href="/">Read about us</a></p>
                </div>
            </div>
            <div className="h-full w-1/3 flex items-center justify-start">
                <img className="w-[400px]" src="https://www.tailorbrands.com/wp-content/uploads/2023/09/biz-owners-right-1.png" alt="logo"></img>
            </div>
        </div>
            <div className="h-[400px] bg-slate-600 flex flex-col items-center justify-center gap-6">
                <div>
                    <h1 className="font-poppins text-[40px] text-white">Simplifying your business journey</h1>
                </div>
                    <div>
                        <form action={A}>
                        <input className="focus:outline-none pl-4 h-[50px] w-[400px] border-2 border-black placeholder:p-5" type="text" name="name" id="name" placeholder="Enter your business name"></input>
                        </form>
                    </div>
                    <div>
                <button className="px-12 py-4 rounded-[100px] bg-blue-600 text-white">Get Started</button>
            </div>
            </div>
            <div className="h-[400px] bg-gray-300 flex">
              <div className="h-full w-1/2 flex flex-col justify-center">
                <div className="ml-36 flex flex-col gap-2 ">
                <img className="w-[150px] mb-8" src="https://www.tailorbrands.com/wp-content/uploads/2020/03/Tailor-brands-White-transparent.png" alt="logo"></img>
                <span className="flex gap-4 text-white"><a href="/">TOS</a><p>|</p><a href="/">Privacy</a></span>
                <span className="flex gap-4 text-white"><a href="/">Cookie Policy</a><p>|</p><a href="/">Do Not Sell My Personal Information</a></span>
                <span className="text-white">@2024 Copyright Tailor Brands</span>
                </div>
              </div>
              <div className="h-full w-1/2 flex gap-32 items-center">
                
                    <ul>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Logo Maker</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Logo ideas</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Start an LLC</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Affiliate Program</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Partner With Us</li></a>
                    </ul>
               
               
             <ul>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Logo Maker</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Logo ideas</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Start an LLC</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Affiliate Program</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Partner With Us</li></a>
                    </ul>
             </div>
          </div>
             
           
            
     </>
  );
}
