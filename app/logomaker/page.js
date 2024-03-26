
import { A } from '../server'

function page() {



  return (

    <>

      <div>
        <div className="h-[400px] bg-orange-200 flex ">
          <div className="h-full w-1/2 flex justify-center gap-5 flex-col">
            <div className="ml-56 flex justify-center gap-5 flex-col">
              <h1 className="text-[40px] font-serif">Tailor Brands Logo Maker</h1>
              <div>
                <p>The easy way to a unique logo design. Our logo creator uses AI to</p>
                <p>create custom logos in just a few clicks. <b>Try it for free!</b></p>
              </div>
              <div>
                <form action={A}>
                  <input className="h-[50px] w-[300px] p-4 placeholder:p-5 border border-black focus:outline-blue-500" type="text" name='name' id='name' placeholder='Enter a logo name'></input>
                  <div className="mt-5">
                    <button className="px-10 py-5 border-2 rounded-[100px] bg-blue-500 text-white text-[20px]">Create a  logo</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2 flex justify-center items-center">
            <div className="h-[300px] w-[300px] flex overflow-auto flex-row scroll">
              <img className="w-[300px]" src="https://www.tailorbrands.com/wp-content/uploads/elementor/thumbs/Group-37-1-qlcb52nytl9yzzwkuli0vpimsh5kur2eftwa7hb8xg.png" alt='logo'></img>
              <img className="w-[300px]" src="https://www.tailorbrands.com/wp-content/uploads/elementor/thumbs/Group-15-1-1-qlcb52nytl9yzzwkuli0vpimsh5kur2eftwa7hb8xg.png" alt='logo'></img>
            </div>
          </div>
        </div>
        <div className="h-[300px] bg-orange-200 grid grid-cols-[repeat(5,minmax(100px,200px))] gap-3 justify-center items-center w-full">

          <div className="">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-65-1.png" alt='logo'></img>
          </div>
          <div className="">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-64.png" alt='logo'></img>
          </div>
          <div className="">
            <img src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-63.png' alt='logo'></img>
          </div>
          <div className="">
            <img src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-61-1.png' alt='logo'></img>
          </div>
          <div>
            <img src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-60.png' alt='logo'></img>
          </div>

        </div>
        <div className="h-[800px] bg-lime-100 flex flex-col  items-center">

          <h1 className="text-[40px] font-serif mt-16">Easily create a logo for your brand</h1>


          <p className="mt-3">Use Tailor Brands’ logo generator to create beautiful custom logo</p>
          <p>designs in just a few minutes. Head over afterwards to our <a className="text-blue-500" href='/'>LLC formation</a> </p>
          <p>page to officialize your business.</p>


          <div className="grid grid-cols-[repeat(2,minmax(500px,600px))] gap-y-5 gap-x-5 mt-10">
            <div className="h-[150px] flex flex-col justify-center border-2 bg-slate-50 rounded-[10px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:scale-80">
              <h1 className="text-[19px] font-serif font-extrabold ml-20"><span className="text-[25px] ">1. </span>Provide business details</h1>
              <p className='ml-20'>Enter your company name and type of business, then tell us a</p>
              <p className='ml-20'>little about what your business does.</p>
            </div>
            <div className=" h-[150px] flex flex-col justify-center border-2 bg-slate-50 rounded-[10px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
              <h1 className="text-[19px] font-serif font-extrabold ml-20"><span className="text-[25px]">2. </span> Choose your logo style</h1>
              <p className='ml-20'>Select the type of logo that best suits your business; you can</p>
              <p className='ml-20'>choose from a wordmark (logotype), monogram, or icon logo.</p>
            </div>
            <div className=" h-[150px] flex flex-col justify-center border-2 bg-slate-50 rounded-[10px]">
              <span className="text-[19px] font-semibold ml-20">3. <span className="text-[19px] font-serif font-extrabold ">Select your favorite fonts</span></span>
              <p className='ml-20'>Choose your favorite font styles to help our logo creator</p>
              <p className='ml-20'>understand your brand personality better.</p>
            </div>
            <div className=" h-[150px] flex flex-col justify-center border-2 bg-slate-50 rounded-[10px]">
              <h1 className="text-[19px] font-serif font-extrabold ml-20"><span className="text-[20px]">4. </span>Sit back and wait</h1>
              <p className='ml-20'>Our logo generator will go to work and create a selection of</p>
              <p className='ml-20'>unique logos. It takes less than 1 minute.</p>
            </div>
            <div className=" h-[150px] flex flex-col justify-center border-2 bg-slate-50 rounded-[10px]">
              <h1 className="text-[19px] font-serif font-extrabold ml-20"><span className="text-[20px]">5. </span>Customize your logo design</h1>
              <p className='ml-20'>Pick your favorite logo and then customize it. You can change the</p>
              <p className='ml-20'>fonts, icons, and colors.</p>
            </div>
            <div className=" h-[150px] flex flex-col justify-center border-2 bg-slate-50 rounded-[10px]">
              <h1 className="text-[19px] font-serif font-extrabold ml-20"><span className="text-[20px] font-serif">6. </span>Download your logo</h1>
              <p className='ml-20'>Download a high-resolution file of your design – we provide</p>
              <p className='ml-20'>Vector EPS, SVG, and PNG logo files.</p>
            </div>
          </div>
        </div>

        <div className="h-[700px] bg-slate-100 flex flex-col justify-center items-center">
          <p className="text-[40px] font-serif font-extrabold">Designs created with our logo maker</p>
          <div className='grid grid-cols-[repeat(5,minmax(200px,200px))] gap-5 justify-center mt-10'>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-6-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-8-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-12-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-13-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-26-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-18-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-15-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-17-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-25-1-300x300.jpeg' alt='logo'></img>
            </div>
            <div className=''>
              <img className='w-[200px]' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Group-7-1-300x300.jpeg' alt='logo'></img>
            </div>
          </div>
        </div>

        <div className='h-[800px] bg-red-100 flex flex-col items-center gap-10'>
          <h1 className='text-[30px] font-serif font-extrabold mt-9'>Your in-house logo designer</h1>
          <div className='text-center'>
            <p>Once you create a logo with our logo creator you get access to a full</p>
            <p>design studio. Here you will find a host of logo resources. It’s like having</p>
            <p>your  own professional designer.</p>
          </div>
          <b>Here is what you will find inside:</b>
          <div className='grid grid-cols-[repeat(3,minmax(300px,350px))] gap-5 '>
            <div className=' flex justify-center flex-col h-[200px] gap-2 bg-slate-100 rounded-xl'>
              <b className='ml-8'>100's of design varations</b>
              <div>
                <p className='text-[14px] ml-8'>100s of different logos for you to choose</p>
                <p className='text-[14px] ml-8'>from. With our logo maker you can</p>
                <p className='text-[14px] ml-8'>customize and tweak all of the designs to</p>
                <p className='text-[14px] ml-8'>get them just right for your brand. </p>
              </div>
            </div>
            <div className=''>
              <div className='border-2 flex justify-center flex-col h-[200px] gap-2 bg-slate-100 rounded-xl'>
                <b className='ml-8'>High-resolution logo files</b>
                <div>
                  <p className='text-[14px] ml-8'>Vector EPS, SVG with a transparent</p>
                  <p className='text-[14px] ml-8'> background.  With these files, you can use</p>
                  <p className='text-[14px] ml-8'> your logo anywhere – your website,</p>
                  <p className='text-[14px] ml-8'> billboards, vehicle signage, and more.</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className=' flex justify-center flex-col h-[200px] gap-2 bg-slate-100 rounded-xl'>
                <b className='ml-8'>Social media formats</b>
                <div>
                  <p className='text-[14px] ml-8'>We provide you with 21 resized versions of</p>
                  <p className='text-[14px] ml-8'>your logo that you can use across all the</p>
                  <p className='text-[14px] ml-8'> major social media platforms. No need for a</p>
                  <p className='text-[14px] ml-8'>resize tool.</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className=' flex justify-center flex-col h-[220px] gap-2 bg-slate-100 rounded-xl'>
                <b className='ml-8'>Branded assets</b>
                <div>
                  <p className='text-[14px] ml-8'>When you design a logo, we also create a</p>
                  <p className='text-[14px] ml-8'>suite of branded assets (for free). You get a</p>
                  <p className='text-[14px] ml-8'>brand book, branded letterheads, seasonal</p>
                  <p className='text-[14px] ml-8'>logos, business cards, and more, to make</p>
                  <p className='text-[14px] ml-8'>your business look professional.</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className=' flex justify-center flex-col h-[220px] gap-2 bg-slate-100 rounded-xl'>
                <b className='ml-8'>Customer support</b>
                <div>
                  <p className='text-[14px] ml-8'>If you have any questions about your</p>
                  <p className='text-[14px] ml-8'>account or need some technical help, our</p>
                  <p className='text-[14px] ml-8'>friendly and super knowledgeable customer</p>
                  <p className='text-[14px] ml-8'>service agents are ready and on hand to</p>
                  <p className='text-[14px] ml-8'>assist you.</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className=' flex justify-center flex-col h-[220px] gap-2 bg-slate-100 rounded-xl'>
                <b className='ml-8'>Additional business tools</b>
                <div>
                  <p className='text-[14px] ml-8'>After you design a logo, you can build a</p>
                  <p className='text-[14px] ml-8'>beautiful website, create digital business</p>
                  <p className='text-[14px] ml-8'>cards, print branded merchandise, and even</p>
                  <p className='text-[14px] ml-8'>form an LLC all from your Tailor Brands</p>
                  <p className='text-[14px] ml-8'>studio.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>

      <div className='h-[600px] bg-sky-100 flex flex-col items-center gap-5'>
        <b className='text-[40px] mt-14'>Why choose Tailor Brands' Logo Maker</b>
       <div className='text-center text-[17px]'>
       <p>At Tailor Brands, we love nothing more than seeing people bring their logo idea to </p>
          <p> life. And in the last five years, this passion has helped us become the leading </p>
          <p> automated logo design tool for side-hustlers, individuals, and small business owners.</p>
       </div>
        <b>Here’s why people love making logos with us:</b>
        <div className='grid grid-cols-[repeat(4,minmax(200px,270px))] gap-5'>
             <div className='border bg-white h-[200px] w-[270px] justify-center flex flex-col gap-2'>
              <b className='ml-8 text-[20px]'>Unique designs</b>
              <div className='text-[14px] ml-8 opacity-60'>
             <p>We don't use pre-made logo</p>
             <p>templates. Our logos are</p>
             <p>uniquely designed by our AI</p>
             <p>algorithm to match your</p>
             <p>business and brand identity</p>
             <p>perfectly.</p>
             </div>
             </div>
             <div className='border bg-white h-[200px] w-[270px] flex flex-col justify-center gap-2'>
              <b className='ml-8 text-[20px]'>Easy and intuitive</b>
              <div className='text-[14px] ml-8 opacity-60'>
              <p>Our products are user friendly,</p>
              <p>you don't need any design skills</p>
              <p>to create your own logo. Just</p>
              <p>follow 6 steps to bring your</p>
              <p>brand to life with an awesome</p>
              <p>logo.</p>
              </div>
             </div>
             <div className='border bg-white  h-[200px] w-[270px] flex flex-col justify-center gap-2 '>
              <b className='ml-8 text-[20px]'>Fully customizable</b>
              <div className='text-[14px] ml-8 opacity-60'>
              <p>You have complete control</p>
              <p>when it comes to customizing</p>
              <p>your logo design. In the logo</p>
              <p>editor you can change all of</p>
              <p>the elements such as colors,</p>
              <p>fonts, and icons.</p>
              </div>
             </div>
             <div className='border bg-white h-[200px] w-[270px] flex flex-col justify-center gap-2'>
              <b className='ml-8 text-[20px]'>Loved by businesses</b>
              <div className='text-[14px] ml-8 opacity-60'>
                <p>We are the go-to logo</p>
                <p>generator for millions of</p>
                <p>businesses. Our algorithm</p>
                <p>matches fonts and colors and</p>
                <p>analyzes current design trends</p>
                <p>to create beautiful logos.</p>
              </div>
             </div>
        </div>
      </div>

      <div className='h-[500px] bg-white flex flex-col items-center gap-10 justify-center'>
         <b className='text-[30px]'>Logo ideas for different types of businesses</b>
         <div className='grid grid-cols-[repeat(3,minmax(300px,300px))] items-center gap-5'>
          <div className='flex flex-col items-center gap-5'>
            <a className='text-blue-600' href='#'>Photography Logos</a>
            <a className='text-blue-600'  href='#'>Cleaning Logos</a>
            <a className='text-blue-600'  href='#'>Spa Logos</a>
          </div>
          <div className='flex flex-col items-center gap-5'>
            <a className='text-blue-600' href='#'>Fitness Logos</a>
            <a className='text-blue-600'  href='#'>Construction Logos</a>
            <a className='text-blue-600'  href='#'>Restaurant Logos</a>
          </div>
          <div className='flex flex-col items-center gap-5'>
          <a className='text-blue-600' href='#'>Real E-state Logos</a>
            <a className='text-blue-600'  href='#'>Lawn Care Logos</a>
            <a className='text-blue-600'  href='#'>Jewelry Logos</a>
          </div>
         </div>
         <button className='h-[50px] w-[170px] bg-blue-500 text-white rounded-full'><a className='text-[20px]' href='#'>See more</a></button>
      </div>
     
      <div className='h-[900px] bg-amber-100 flex flex-col items-center justify-center'>
          <div className='grid grid-cols-[repeat(2,minmax(500px,500px))] gap-5'>
            <div className='text-[30px]'>
              <b>What our customers</b>
              <p><b>say</b></p>
            </div>
            <div className='border bg-white rounded-xl'>
              <div className='flex items-center gap-5'>
              <img className='rounded-full w-[100px] h-[100px] ml-10 object-cover' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/6-2.jpg' alt='logo'></img>
              <div>
              <b>Brent Martin</b>
              <div>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              </div>
              <p><b>makemoneywithbrent</b></p>
              </div>
              </div>
              <div className='ml-10'>
              <p>An exceptional, easy to use logo creator, that can build</p>
              <p>you the perfect logo in a matter of seconds.</p>
              </div>
            </div>
            <div className='border bg-white rounded-xl'>
              <div className='flex gap-5 ml-10 items-center'>
                  <img className='w-[100px] rounded-full h-[100px] object-cover ' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/2.jpeg' alt='logo'></img>
                  <div>
                  <b>Michael Berner</b>
                  <p className='mt-5'>Tycoonist.co</p>
                  </div>
                  </div>
                  <div className='ml-10'>
                  <p>As someone who agonized endlessly over logos for</p>
                  <p>my brands, just do yourself a favor and take 5 minutes</p>
                 <p>to use Tailor Brands.</p>
                 </div>
            </div>
            <div className='bg-white rounded-xl'>
              <div className='flex items-center gap-5 ml-10'>
              <img className='h-[100px] w-[100px] rounded-full object-cover' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/4-1.jpg' alt='logo'></img>
              <div>
              <b>Paul Mendes</b>
              <p className='mt-5'>Profitable Freelancer</p>
              </div>
              </div>
              <div className='ml-10'>
              <p>The Tailor Brands logo maker is easy to use and makes</p>
              <p>the entire process fun! It helped me bring my business</p>
              <p>idea to life.</p>
              </div>
            </div>
            <div className='bg-white rounded-xl'>
              <div className='flex gap-5 items-center ml-10'>
                  <img className='h-[100px] w-[100px] rounded-full object-cover' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/5-e1647508800304.jpg' alt='logo'></img>
                  <div>
                    <b>Temera Stallworth</b>
                    <p className='mt-5'>616 Mink Studios</p>
                  </div>
                  </div>
                  <div className='ml-10'>
                    <p>I needed a new logo and Tailor Brands' logo tool was</p>
                    <p>amazing. It's really easy, so I really do love it. I used</p>
                    <p>their logo maker to edit and see what other logos I can</p>
                    <p>create.</p>
                  </div>
            </div>
            <div className='bg-white rounded-xl '>
                    <div className='flex gap-5 items-center ml-10'>
                      <img className='h-[100px] w-[100px] rounded-full object-cover' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/3.jpeg' alt='logo'></img>
                      <div>
                        <b>La’Stephanie Brandon</b>
                        <p className='mt-5'>@creaLAtive</p>
                      </div>
                    </div>
                    <div className='ml-10'>
                      <p>Tailorbrands is an intuitive artificial intelligence</p>
                      <p>software that understands what you are looking for in a</p>
                      <p>logo/brand. And it has all the necessary business tools</p>
                      <p>you need to succeed.</p>
                    </div>
            </div>
            <div className='bg-white rounded-xl'>
                <div className='flex gap-5 items-center ml-10'>
                  <img className='h-[100px] w-[100px] rounded-full object-cover' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/1-2.png' alt='logo'></img>
                  <div>
                    <b>Daniela Schrittenlocher</b>
                    <p className='mt-5'>ELAS Marketing Services LLC</p>
                  </div>
                </div>
                <div className='ml-10'>
                  <p>Tailor Brands is such an easy-to-use tool, anyone can</p>
                  <p>create their own logo and branding with it. Best part, it</p>
                  <p>incorporates current trends in their designs and gives</p>
                  <p>great inspiration. It took me less than 15 minutes to find</p>
                  <p>what I like.</p>
                </div>
            </div>
            <div className='bg-white rounded-xl'>
              <div className='flex gap-5 items-center ml-10'>
                <img className='h-[100px] w-[100px] rounded-full object-cover' src='https://www.tailorbrands.com/wp-content/uploads/2022/03/Tiara.jpg' alt='logo'></img>
                <div>
                  <b>Tiara Skiner</b>
                  <p className='mt-5'>Barre Level Fitness</p>
                </div>
              </div>
              <div className='ml-10'>
              <p>I created my brand with Tailor Brands and I am</p>
              <p>very satisfied with everything that they’ve done</p>
              <p>for me - creating my logo, as well as creating my</p>
              <p>website, and I recommend them to anyone and</p>
              <p>everyone.</p>
            </div>

            </div>
           
          </div>
      </div>

      <div className='h-[800px] bg-white flex justify-center items-center'>
        <div className='grid grid-cols-[repeat(2,minmax(500px,500px))] gap-x-20 gap-y-10'>
          <div className=''>
            <b className='text-[40px] font-serif'>FAQs</b>
          </div>
          <div></div>
          <div className=''>
            <b className='text-[25px] font-serif'>Can I trademark my logo?</b>
            <p className='mt-5'>Yes. If you want to trademark your logo, Tailor Brands provides</p>
            <p>this service for all of our customers. Please note that this is an</p>
            <p>additional cost.</p>
          </div>
          <div className=''>
          <b className='text-[25px] font-serif'>Can I edit my logo after downloading?</b>
            <p className='mt-5'>Yes, once you have Tailor Brands account, you will have access</p>
            <p>your editing studio. Your logo designs are stored here, and you</p>
            <p>can edit and change them at any time.</p>
          </div>
          <div className=''>
          <b className='text-[25px] font-serif'>Can I customize my design?</b>
            <p className='mt-5'>Yes, you can customize your logo. After it’s created, you will get</p>
            <p>access to the editor studio, where you can easily change all</p>
            <p>elements just like a professional designer. </p>
          </div>
          <div className=''>
          <b className='text-[25px] font-serif'>Do I own the rights to my logo?</b>
            <p className='mt-5'>Yes, you have full commercial rights. Once you make a logo (and</p>
            <p>purchase) it’s 100% yours to do as you please.</p>
          </div>
          <div className=''>
          <b className='text-[25px] font-serif'>When can I start using my logo?</b>
            <p className='mt-5'>Straightaway! Once you design your logo it’s available for</p>
            <p>immediate use. Simply go to your design studio dashboard in</p>
            <p>your Tailor Brands account and download. </p>
          </div>
          <div className=''>
          <b className='text-[25px] font-serif'>Is this a free logo maker?</b>
            <p className='mt-5'>You can make a logo for free and download a low-resolution</p>
            <p>version. However, if you want a high-res Vector file, you will</p>
            <p>need to pay. But, only if you are 100% happy! </p>
          </div>
        </div>
      </div>

         <div className='h-[1000px] bg-emerald-100 flex  flex-col items-center justify-center '>
          <div className='flex flex-col items-center  '>
          <b className='text-[30px] font-serif'>How to Make a Logo</b>
          <div className='flex flex-col items-center'>
            <p>The beauty of an automated logo generator is that you don’t need any skills to</p>
            <p>design a logo. However, understanding some logo design basics will enable you to</p>
            <p>customize and tweak your logo if you choose to do so.</p>
            </div>
          </div>
          <div className='grid grid-cols-[repeat(2,minmax(500px,500px))] mt-10  justify-center gap-x-20 gap-y-10 '>
            <div className=''>
              <b className='text-[25px] font-serif'><b className='text-[35px] '>1.</b> Know Your Brand Personality</b>
              <p>You should have a clear idea of the brand personality you want</p>
              <p>to convey before you start designing a company logo. Your</p>
              <p>personality will inform every element of your logo design.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif'> <b className='text-[35px]'>2.</b> Analyze Your Competition</b>
              <p>Look to your competitors and other businesses that target the</p>
              <p>same audience as you. See if you can spot patterns in colors,</p>
              <p>font types, icons, etc.; the aim is not to copy but to gain</p>
              <p>inspiration and insights.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif flex items-center gap-2'> <b className='text-[25px] mb-2'>3.</b> Choose a Design Style</b>
              <p>There are different logo styles: classic or vintage, fun and quirky,</p>
              <p>modern and minimal, or handcrafted. No one style is right or</p>
              <p>wrong. It depends on the brand personality your want to</p>
              <p>convey.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif flex items-center gap-2'> <b className='text-[25px] mb-2'>4.</b> Decide on a Type of Logo</b>
              <p>Logo designs usually fall under two categories – icon-based</p>
              <p>logos and wordmark logos. Many people prefer a simple</p>
              <p>wordmark logo consisting of words only, while others add an</p>
              <p>icon plus words.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif flex items-center gap-2'> <b className='text-[25px] mb-2 font-serif'>5.</b> Pick Your Fonts Carefully</b>
              <p>There are different logo styles: classic or vintage, fun and quirky,</p>
              <p>modern and minimal, or handcrafted. No one style is right or</p>
              <p>wrong. It depends on the brand personality your want to</p>
              <p className='mb-5'>convey.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif'> <b className='text-[25px]'>6.</b> Choose Your Colors Wisely</b>
              <p>Color plays a significant role in conveying your brand</p>
              <p>personality – they have meaning. For example, red conveys</p>
              <p>energy, warmth, romance, passion, excitement. So, like fonts,</p>
              <p>choose colors that match your brand image.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif flex items-center gap-2'> <b className='text-[25px] mb-2'>7.</b> Keep it Simple</b>
              <p>When it comes to creating a professional logo, less is more.</p>
              <p>Keep the design simple. Don’t use too many colors or fonts, and</p>
              <p>make sure the elements that you use complement each other.</p>
            </div>
            <div className=''>
            <b className='text-[25px] font-serif'> <b className='text-[25px]'>8.</b> Ask for Feedback</b>
              <p>You should always create multiple iterations of your logo design</p>
              <p>and ask your friends, family, and audience (if possible) for</p>
              <p>feedback. This will help determine which of your final designs is</p>
              <p>the winner.</p>
            </div>
          </div>
         </div>
               <div className='h-[800px] bg-white flex flex-col items-center justify-center'>
                    <b className='text-[35px] font-serif mb-10'>Logo design resources & tips</b>
                    <div className='grid grid-cols-[repeat(3,minmax(300px,300px))] gap-x-10 gap-y-10 '>
                      <div className=''>
                       <a className='text-[25px] text-sky-400 font-serif' href='#'>What is Logo?</a>
                       <p>When it comes to creating a</p>
                       <p>professional logo, less is more. Keep</p>
                       <p>the design simple. Don’t use too many</p>
                       <p>colors or fonts, and make sure the</p>
                       <p>elements that you use complement</p>
                       <p>each other.</p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>Why is a logo important?</a>
                      <p>Legitimate question! Learn how your</p>
                       <p>logo design can have a positive (or</p>
                       <p>negative) impact on your business,</p>
                       <p>and what you should look out for in</p>
                       <p>the logo creation process. </p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>What makes a good logo</a>
                      <p>This quick read will give you the 5</p>
                      <p>main attributes that make up a strong</p>
                      <p>logo, so you can learn how to create a</p>
                      <p>logo that uses best practices. </p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>Colors in logo design</a>
                      <p>The colors you choose can make or</p>
                      <p>break the success of your company</p>
                      <p>logo. Read about color psychology so</p>
                      <p>you make informed decisions before</p>
                      <p>you start designing. </p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>Different types of logos</a>
                      <p>There are different types of logos – </p>
                      <p>word mark logos, initial-based logos or</p>
                      <p>icon-based logo. Here’s a breakdown </p>
                      <p> of what that means and how to make </p>
                      <p> the best choice for you. </p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>How to trademark a logo</a>
                      <p>Protect your logo design from</p>
                      <p>copycats! Here’s how to trademark</p>
                      <p>your design and start your business on</p>
                      <p>the right foot. </p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>Logo mistakes to avoid</a>
                      <p>Learn about the main logo design </p>
                      <p> mistakes people when designing a</p>
                      <p>logo and how to avoid them.</p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>Logo Color Combinations</a>
                      <p>Inspiration alert! Check out over 50</p>
                      <p>logo color combinations that will help </p>
                      <p> you get an idea of what your own logo </p>
                      <p>could look like.</p>
                      </div>
                      <div className=''>
                      <a className='text-[25px] text-sky-400 font-serif' href='#'>How to make a logo</a>
                      <p>Use this step-by-step walkthrough to </p>
                      <p>help you feel confident about </p>
                      <p> designing your logo when you’re  </p>
                      <p>ready.</p>
                      </div>
                     
                    </div>
               </div>

               <div className='h-[1200px] bg-amber-50 flex flex-col items-center justify-center'>
                <b className='text-[40px] font-serif mb-10'>Read more logo posts on our blog</b>
                <div className='grid grid-cols-[repeat(3,minmax(300px,300px))] gap-x-10 gap-y-10 '>
                  <div className='bg-white h-[300px] rounded-xl hover:shadow-2xl'>
                    <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2023/01/Header-80s-logotypes-1-300x172.jpg' alt='logo'></img>
                    <div className='ml-5'>
                    <b>Famous Logos to Take You Back</b>
                    <b>to The 1980s</b>
                    </div>
                  </div>
                  <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                 <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2022/12/Header-Evolution-of-Disney-logo-1-300x172.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>The History and Evolution of the</b>
                 <b>Disney Logo </b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2022/11/HeaderStar-Logo-Inspiration-1-1-300x172.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>Star Logo Inspiration</b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2019/07/Header-Business-Industries-300x172.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>How to Create a Business Logo</b>
                 <b>According to Your Industry</b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2021/07/Header-mobile-app-300x172.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>Essential Steps When Designing</b>
                 <b>a Mobile App Logo</b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2021/06/Header-Personal-logo-300x172.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>How to Design a Personal Logo</b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2021/06/Blog_logo_Header-300x172.jpeg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>How to Design a Blog Logo in 5</b>
                 <b>Easy Steps</b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2021/04/Header-modern-logo-design-1-300x172.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>How to Create a Modern Logo</b>
                 <b>Design</b>
                 </div>
                </div>
                <div className='h-[300px] bg-white rounded-xl hover:shadow-2xl'>
                <img className="rounded-t-xl" src='https://www.tailorbrands.com/wp-content/uploads/2019/07/thumbnail-21-300x171.jpg' alt='logo'></img>
                 <div className='ml-5'>
                 <b>How to Use Tailor Brands Logo</b>
                 <b>Maker Editor to Customize Your</b>
                 <b>Logo Like a Pro</b>
                 </div>
                </div>
                </div>
               
               </div>

               <div className='h-[400px] bg-red-200 flex flex-col items-center justify-center gap-5'>
                      <div className='flex flex-col text-[40px] items-center font-sans'>
                       <b>Join millions of businesses</b>
                       <b>that use our logo maker</b>
                       </div>
                       <form action={A} className='flex flex-col gap-8 items-center'>
                        <div>
                          <input className='bg-white p-4 outline-none border border-gray-400 w-[400px]  focus:border-blue-600' type='text' name='name' id='name' placeholder='Enter a logo name'></input>
                        </div>
                        <div>
                        <button className='px-10 py-4 bg-blue-700 text-white rounded-full text-[25px]'>Design</button>
                        </div>
                       </form>

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
  

