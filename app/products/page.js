import { A } from "../server"

const page = () => {
  return (
    <>
    <div className="h-[500px] bg-orange-100 w-full flex">
      <div className="h-full w-1/2 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col text-[40px] leading-10 font-poppins  justify-center">
          <b>Everything your</b>
          <b>business needs in</b>
          <b>one place</b>
      </div>

     
        <form action={A}>
        <div className="flex flex-col gap-5 items-start mt-5 ml-10">
          <input className="w-[400px] p-4 outline-none border focus:border-blue-500 hover:shadow-2xl rounded-lg" type="text" name="name" id="name" placeholder="Choose Your state"></input>
          <div>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-[20px]">Get started</button>
          </div>
        
      </div>
      </form>
      </div>


      <div className="h-full w-1/2 flex justify-start items-center">
          <img src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Products-page.png" alt="logo"></img>
      </div>
    </div>

          <div className="bg-white h-[3000px] flex flex-col justify-center">
            <div className="grid grid-cols-[repeat(3,minmax(320px,320px))] gap-x-5 justify-center">
              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center">
                <div>
                <img className="w-[150px] ml-5 mt-16" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-4.png" alt="logo"></img>
                </div>
                <div className="ml-6 flex flex-col">
                  <div>
                <b>LLC formation</b>
                <p>Apply for an LLC in minutes,</p>
                <p>and enjoy the huge benefits it has</p>
                <p>to offer, by answering a few</p>
                <p>short questions.</p>
                </div>
                <div className="mt-10">
                <a className="text-blue-500 underline" href="#">Start an LLC</a>
                </div>
                </div>
                
              </div>
              

              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-2">
                <img className="w-[150px] ml-5 mt-20" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-10.png" alt="logo"></img>
                <div className="ml-6 mb-6 flex flex-col">
                  <div>
                <b>Trademark</b>
                <p>Protect your business’s name</p>
                <p>and reputation across the US</p>
                <p>with a trademark.</p>
                </div>
                <div className="mt-16">
                <a className="text-blue-500 underline" href="#">File a Trademark</a>
                </div>
                </div>
              </div>


              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-2">
                <img className="w-[150px] ml-5 mt-14" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-6.png" alt="logo"></img>
                <div className="ml-6 flex flex-col">
                  <div className="">
                <b>EIN</b>
                <p>Let us get your Employee</p>
                <p> Identification Number, so you can </p>
                <p> apply for necessary licenses and</p>
                <p>open your business bank account.</p>
                </div>
               
                <div className="mt-10">
                <a className="text-blue-500 underline" href="#">Get an EIN</a>
                </div>
                </div>
              </div>
              </div>



              <div className="grid grid-cols-[repeat(3,minmax(320px,320px))] gap-x-5 justify-center mt-40 ">
              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-10">
                <div>
                <img className="w-[130px] ml-5 mt-16" src="https://www.tailorbrands.com/wp-content/uploads/2023/06/Sales-tax-registration.png" alt="logo"></img>
                </div>
                <div className="ml-6 flex flex-col">
                  <div>
                <b>Sales tax permits</b>
                <p>Having a sales tax permit</p>
                <p>is essential for operating legally -</p>
                <p>check if your business needs it.</p>
                </div>
                <div className="mt-10">
                <a className="text-blue-500 underline" href="#">Get a Sales Tax Permit</a>
                </div>
                </div>
                
              </div>
              

              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-2">
                <img className="w-[130px] ml-5 mt-16" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-9.png" alt="logo"></img>
                <div className="ml-6 mb-6 flex flex-col">
                  <div className="mb-12">
                <b> Business licenses</b>
               <p><b>and permits</b></p>
                <p>Find out which business licenses and</p>
                <p>permits your business is legally</p>
                <p>required to have, and let us do all of</p>
                <p>the paperwork for you correctly.</p>
                </div>
                <div className="">
                <a className="text-blue-500 underline" href="#">Get Business Licenses & Permits</a>
                </div>
                </div>
              </div>


              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-2">
                <img className="w-[150px] ml-5" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-8.png" alt="logo"></img>
                <div className="ml-6 flex flex-col">
                  <div className="mb-6">
                <b>Taxes and bookkeeping</b>
                <p>Use the world’s leading</p>
                <p> small-business tax experts to</p>
                <p> maximize your deductions and</p>
                <p>make sure you file correctly.</p>
                </div>
               
               
                </div>
              </div>
              </div>
              

              <div className="grid grid-cols-[repeat(3,minmax(320px,320px))] gap-x-5 justify-center mt-40 ">
              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-5">
                <div>
                <img className="w-[130px] ml-5" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-11.png" alt="logo"></img>
                </div>
                <div className="ml-6 flex flex-col">
                  <div className = "mb-8">
                <b>Business insurance</b>
                <p>Avoid risks and make sure</p>
                <p>your business is covered,</p>
                <p>with insurance tailored to</p>
                <p>your specific needs.</p>
                </div>
                </div>
              </div>
              

              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-2">
                <img className="w-[130px] ml-5 mt-16" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-7.png" alt="logo"></img>
                <div className="ml-6 mb-6 flex flex-col">
                  <div className="mb-16">
                <b>Business bank account</b>
                <p>Make it easy to separate your .</p>
                <p>business and personal finances, and</p>
                <p>look more professional to customers</p>
                <p>with a business bank account</p>
                </div>
                </div>
              </div>


              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-6">
                <img className="w-[110px] ml-5" src="https://www.tailorbrands.com/wp-content/uploads/2024/01/Megaphone.png" alt="logo"></img>
                <div className="ml-6 flex flex-col">
                  <div className="mb-6">
                <b>Business Notification</b>
                <p>Manage your business with peace of</p>
                <p> mind. Get regular email and text</p>
                <p> updates on important matters related</p>
                <p>to your business.</p>
                </div>
               
               
                </div>
              </div>
              </div>


              <div className="grid grid-cols-[repeat(3,minmax(320px,320px))] gap-x-5 justify-center mt-40 ">
              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-5">
                <div>
                <img className="w-[130px] ml-5 mt-14" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43.png" alt="logo"></img>
                </div>
                <div className="ml-6 flex flex-col">
                  <div className = "mb-8">
                <b>Logo</b>
                <p>Create a logo you love</p>
                <p>in minutes. Just type in your</p>
                <p>name and industry, and we’ll</p>
                <p>do the rest.</p>
                </div>
                <div className="mt-5">
                  <a className="text-blue-500 underline " href="#">Create a Logo</a>
                </div>
                </div>
              </div>
              

              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-6">
                <img className="w-[130px] ml-5 mt-16" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy.png" alt="logo"></img>
                <div className="ml-6 mb-6 flex flex-col">
                  <div className="mb-16">
                <b>Website</b>
                <p>Select our DIY templates</p>
                <p>or use our automatic</p>
                <p>website builder to create a</p>
                <p>beautiful site.</p>
                </div>
                </div>
              </div>


              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-12">
                <img className="w-[130px] ml-5 mt-14" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-2.png" alt="logo"></img>
                <div className="ml-6 flex flex-col">
                  <div className="mb-10">
                <b>Domain</b>
                <p>Let customers easily find you online</p>
                <p>with the perfect domain name for</p>
                <p>  your business</p>
                </div>
                  <div className="mt-2">
                  <a className="text-blue-500 underline " href="#">Learn More</a>
                  </div>
                </div>
              </div>
              </div>

              <div className="grid grid-cols-[repeat(3,minmax(320px,320px))] gap-x-5 justify-center mt-40 ">
              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-5">
                <div>
                <img className="w-[130px] ml-5 mt-14" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-5.png" alt="logo"></img>
                </div>
                <div className="ml-6 flex flex-col">
                  <div className = "mb-8">
                <b>Digital business card</b>
                <p>Use one link for all of your important</p>
                <p>contact information, so customers can</p>
                <p>easily connect with your business.</p>
                <p>do the rest.</p>
                </div>
                <div className="mt-5">
                  <a className="text-blue-500 underline " href="#">Learn More</a>
                </div>
                </div>
              </div>
              

              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-6">
                <img className="w-[130px] ml-5 mt-20" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-3.png" alt="logo"></img>
                <div className="ml-6 mb-4 flex flex-col gap-[74px]">
                  <div className="">
                <b>Business mailbox</b>
                <p>Instantly boost your credibility with a</p>
                <p>professional email address, powered</p>
                <p>by G Suite from Google Cloud.</p>
                </div>
                <div className="mb-3">
                  <a className="text-blue-500 underline " href="#">Learn More</a>
                </div>
                </div>
              </div>


              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-6">
                <img className="w-[130px] ml-5 mt-[120px]" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-13.png" alt="logo"></img>
                <div className="ml-6 flex flex-col gap-5">
                  <div className="mb-14">
                <b>Website experts</b>
                <p>Our in-house experts can design the</p>
                <p>business website you always wanted</p>
                <p>- exactly the way you envisioned it.</p>
                </div>
                <div className="mb-[70px]">
                  <a className="text-blue-500 underline " href="#">Learn More</a>
                  </div>
                </div>
              </div>
              </div>
              

              <div className="grid grid-cols-[repeat(3,minmax(320px,320px))] gap-x-5 justify-center mt-40 ">
              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-5">
                <div>
                <img className="w-[130px] ml-5 mt-14" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-12.png" alt="logo"></img>
                </div>
                <div className="ml-6 flex flex-col">
                  <div className = "mb-8">
                <b>Business cards</b>
                <p>Choose from dozens of templates,</p>
                <p>all branded with your logo</p>
                <p>and colors.</p>
                
                </div>
                
                </div>
              </div>
              

              <div className="border rounded-lg h-[320px] w-[320px] shadow-xl flex flex-col justify-center gap-5">
                <img className="w-[130px] ml-5 mt-14" src="https://www.tailorbrands.com/wp-content/uploads/2023/04/Artboard-43-copy-14.png" alt="logo"></img>
                <div className="ml-6">
                  <div className="mb-8">
                <b>Business mailbox</b>
                <p>Boost your visibility by showing off </p>
                <p>your logo on branded merchandise</p>
                <p>and swag.</p>
                </div>
               
                </div>
              </div>
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
  )
}

export default page
