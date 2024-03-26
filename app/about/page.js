import Link from "next/link"

const about = () => {
  return (

    <>
    <div className="h-[600px] bg-orange-50 flex w-full">
      <div className="h-full w-1/2 flex flex-col items-end justify-center gap-5">
        <div className="flex flex-col text-[40px] leading-10">
        <b>We built a platform</b>
        <b>that builds businesses</b>
        </div>
        <div className="opacity-65">
          <p>From launching and managing to growing your business,</p>
          <p>Tailor Brands is the all-in-one solution that empowers you.</p>
          <p> Our "Guidance Engine" assesses each new business </p>
          <p>introduced to our platform and devises a tailored plan that</p>
          <p>allows you to manage all your business needs from a single</p>
          <p> dashboard.</p>
        </div>
      </div>
      <div className="h-full w-1/2 flex justify-start items-center ml-20">
        <img className="w-[400px] object-cover" src="https://www.tailorbrands.com/wp-content/uploads/2024/01/mobile-Desk.png" alt="logo"></img>
      </div>
    </div>

    <div className="h-[90px] bg-white rounded-xl shadow-2xl flex justify-center items-center">
           <img src="https://www.tailorbrands.com/wp-content/uploads/2023/10/trust-dt4.png" alt="logo"></img>
    </div>

    <div className="h-[300px] bg-slate-600 flex flex-col justify-center items-center text-[30px] font-serif font-extrabold leading-10 text-white">
         <p>From website hosting to legal compliance and ​</p>
         <p>financial tools - Millions of people choose Tailor</p>
         <p> Brands to access over 20 different business</p>
         <p>services with a single subscription.</p>
    </div>

    <div className="bg-white h-[600px] w-full flex">
       <div className="h-full w-1/2 flex flex-col items-end justify-center gap-5">
        <b className="text-[30px] mr-[242px]">Our mission</b>
        <div className="flex flex-col">
          <b>Is to help anyone shape their life by building a </b>
          <b>business and creating a simple path to</b>
          <b>independence.</b>
          <p>There are vertical point solutions for every bump in the </p>
          <p>road, tools for each challenge you might face on your </p>
          <p>path. But we’re more than a toolbox, we’re your guide.</p>
          <p>We don’t wait for obstacles to trip you up; we hand you </p>
          <p>the compass to chart a smoother course, empowering </p>
          <p>you to transform your journey from complicated to</p>
          <p>clear, from daunting to doable.</p>
       </div>
       </div>
       <div className="h-full w-1/2 flex justify-start items-center ml-10">
        <img className="w-[480px]" src="https://www.tailorbrands.com/wp-content/uploads/2024/01/Group-1949.png" alt="logo"></img>
       </div>
    </div>
    <div className="bg-white h-[500px] flex">
      <div className="h-full w-1/2 flex items-center justify-end mr-36">
        <img className="w-[400px]" src="https://www.tailorbrands.com/wp-content/uploads/2024/01/Group-1657.png" alt="logo"></img>
      </div>
      <div className="h-full w-1/2 flex flex-col items-start justify-center gap-5">
        <div className="flex flex-col text-[30px] leading-8">
          <b>Building a business</b>
          <b>is tough</b>
        </div>
        <div className="opacity-60">
          <p>In fact, while 61% of Americans have a plan to </p>
          <p>start a business, only a third will actually take the.</p>
          <p>steps to make it happen</p>
        </div>
      </div>
    </div>

    <div className="h-[600px] w-full flex bg-white">
      <div className="h-full w-1/2 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col text-[40px] leading-9 ml-40">
          <b>The powerhouse for</b>
          <b> business owners</b>
        </div>
        <div className="opacity-60 ml-32 text-[14px]">
          <p>We empower people to embrace their inner </p>
          <p>entrepreneur. We arm them with the tools, guidance, </p>
          <p>and resources they need to get past the obstacles that </p>
          <p>lie in their journey and become independent to live life </p>
          <p>as they desire.</p>
        </div>
      </div>
      <div className="h-full w-1/2 flex flex-col gap-5 justify-center items-start">
        <img className="w-[400px] ml-16" src="https://www.tailorbrands.com/wp-content/uploads/2024/01/Group-1659.png" alt="logo"></img>
      </div>
    </div>
       
       <div className="bg-slate-600 h-[300px] flex flex-col items-center justify-center gap-5">
        <div className="text-white text-[40px] flex items-center flex-col leading-10">
           <p>We believe the present favors independence</p>
           <p> but the future will require it.</p>
           </div>
           <div>
           <button className="bg-blue-600 text-white text-[20px] px-10 py-4 rounded-full"><Link href="/">Get Started</Link></button>
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
               
             <ul className="mb-7">
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Customer Support</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Brand Guidelines</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Careers</li></a>
                        <a className="hover:underline hover:text-blue-600" href="/"><li>Contact Us</li></a>
                    </ul>
             </div>
          </div>
             
    </>


  )
}

export default about
