import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import Navbar from '@/components/global/navbar'
import { clients, } from '@/lib/constant'
import { CheckIcon, X } from 'lucide-react'

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col justify-center items-center  antialiased">
        <div className="absolute inset-0 brightness-125 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/q-44e26a19-nlMzAVjZSjIUO4LdInxgn4TRs4vHTw.png"
          alt="Glowing hero image"
          className="opacity-80 blur-md hidden md:flex  max-w-full max-h-[65rem] animate-pulse  top-0 w-full sticky  0 h-full  brightness-[0.8] z-0"
        />
        <main className="z-20 inline md:absolute mb-36 ">
          <div className="text-center ">
            <div className="inline-block bg-gradient-to-b  from-[#0a061c89]  via-[#0a061c7e] to-[#24257d74] border border-[#7798c7]  bg-opacity-50 rounded-full px-4 py-1 text-sm mb-4">
              ✨ New: Our AI integration just landed
            </div>
            <h1 className="text-4xl md:text-5xl bg-gradient-to-b from-white via-white to-[#acacae] text-transparent bg-clip-text  lg:text-6xl font-semibold   leading-tight">
              Manage Your Productivity
            </h1>
            <h1 className="text-4xl md:text-5xl bg-gradient-to-b from-white via-white to-[#acacae] text-transparent bg-clip-text mb-4 lg:text-6xl font-semibold   leading-tight">
              With ClariQ
            </h1>
            <p className="text-lg text-balance text-gray-300 max-w-2xl mx-auto">
              A Task Managagement platform that helps you automate your Tasks and increase productivity.
            </p>
          </div>


        </main>
        <div className=' items-center z-20 mb-20 justify-center flex  gap-4 '>
          <img
            src="/temp-banner.png"
            alt="bannerImage"
            className="object-contain scale-125 border-4  opacity-90 w-full h-96 rounded-2xl"
          />
        </div>
      </section >
      <InfiniteMovingCards
        className=" bg-transparent mt-64"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section className="mt-20 pb-10 ">
        <div className="items-center justify-center flex flex-col">
          <div className="inline-block bg-gradient-to-b    from-[#0a061c89]  via-[#0a061c7e] to-[#24257d74] border border-[#7798c784]  bg-opacity-50 rounded-full px-4 py-1 text-sm mb-2">
            Integrations
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl bg-transparent  bg-gradient-to-b from-white via-white to-[#ccccce] text-transparent bg-clip-text font-semibold  text-center">
              Integrations
            </h2>
            <p className="text-md text-gray-400 brightness-125 blur-[0.1px] max-w-md justify-center items-center text-center mx-auto">
              Our platform seamlessly integrates with your favorite tools to streamline your workflow.
            </p>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 border-l-[1px]  backdrop-blur-sm  border-l-white/30 border-r-white/30  border-r-[1px] px-5 py-3  max-w-5xl relative">
              <div className="bg-transparent   bg-gradient-to-br from-transparent via-white/5 to-white/15 z-10 px-6 py-14 justify-center  flex flex-col items-center text-center">
                <img className='h-10 w-10' src="https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ" />

                <h2 className="text-xl font-semibold mb-2">Google Drive</h2>
                <p className="text-gray-400 text-sm">Easily store and share your files with Google Drive integration.</p>
              </div>
              <div className="bg-transparent  bg-gradient-to-bl from-transparent via-white/5 to-white/5  z-10 px-6 py-14 justify-center  flex flex-col items-center text-center">
                <img className='h-10 object-contain w-10' src="/slack.png" />
                <h2 className="text-xl font-semibold mb-2">Slack</h2>
                <p className="text-gray-400 text-sm">Stay connected with your team through Slack integration.</p>
              </div>
              <div className="bg-transparent   z-10 px-6 py-14 bg-gradient-to-tr from-transparent via-white/5 to-white/5 justify-center rounded-lg flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M31.49414,5.15039l-25.56641,1.85156c-0.00782,0.00056 -0.01563,0.00121 -0.02344,0.00195c-0.01306,0.0017 -0.02608,0.00365 -0.03906,0.00586c-0.02422,0.00302 -0.04833,0.00693 -0.07227,0.01172c-0.0098,0.00246 -0.01957,0.00506 -0.0293,0.00781c-0.01111,0.00242 -0.02218,0.00502 -0.0332,0.00781c-0.02438,0.00689 -0.04848,0.01471 -0.07227,0.02344c-0.01579,0.00611 -0.03142,0.01263 -0.04687,0.01953c-0.00917,0.00377 -0.01829,0.00768 -0.02734,0.01172c-0.05252,0.02424 -0.10284,0.053 -0.15039,0.08594c-0.00854,0.00508 -0.01701,0.01029 -0.02539,0.01563c-0.02081,0.01548 -0.04101,0.03177 -0.06055,0.04883c-0.00394,0.00387 -0.00784,0.00778 -0.01172,0.01172c-0.01677,0.01443 -0.03305,0.02941 -0.04883,0.04492c-0.01001,0.01085 -0.01978,0.02192 -0.0293,0.0332c-0.01488,0.01645 -0.02921,0.03338 -0.04297,0.05078c-0.00529,0.00645 -0.0105,0.01296 -0.01562,0.01953c-0.01511,0.02028 -0.02944,0.04113 -0.04297,0.0625c-0.00398,0.00647 -0.00789,0.01298 -0.01172,0.01953c-0.01316,0.02102 -0.02554,0.04252 -0.03711,0.06445c-0.0047,0.00904 -0.00925,0.01816 -0.01367,0.02734c-0.0107,0.0237 -0.02047,0.04781 -0.0293,0.07227c-0.00131,0.0026 -0.00262,0.0052 -0.00391,0.00781c-0.02016,0.05648 -0.03519,0.11466 -0.04492,0.17383c-0.00212,0.01038 -0.00407,0.0208 -0.00586,0.03125c-0.00368,0.02658 -0.00628,0.05329 -0.00781,0.08008c0,0.0013 0,0.0026 0,0.00391c-0.00115,0.01821 -0.0018,0.03644 -0.00195,0.05469v25.73828c0,1.02563 0.31515,2.02858 0.9043,2.86914c0.0154,0.02213 0.03169,0.04364 0.04883,0.06445l6.17383,7.42969c0.05957,0.10721 0.13836,0.20254 0.23242,0.28125l0.39063,0.46875c0.04959,0.05972 0.10596,0.11347 0.16797,0.16016c0.58711,0.56967 1.3992,0.90584 2.27539,0.84961l27,-1.74219c1.56907,-0.10142 2.80664,-1.42211 2.80664,-2.99414v-25.99219c0,-0.92346 -0.43448,-1.74214 -1.0957,-2.29297c-0.0468,-0.05359 -0.09918,-0.10205 -0.15625,-0.14453l-0.48437,-0.35742c-0.06058,-0.0577 -0.12817,-0.10757 -0.20117,-0.14844l-8.23828,-6.07617c-0.95915,-0.70779 -2.14151,-1.04913 -3.33008,-0.96289zM31.63867,7.14453c0.71344,-0.05176 1.42319,0.15392 1.99805,0.57813l6.13086,4.52344l-25.02539,1.63867c-0.86162,0.05624 -1.7045,-0.26257 -2.31641,-0.87305h-0.00195l-4.16992,-4.17188zM7,10.41406l4.01172,4.01172l0.98828,0.98828v25.4043l-4.46094,-5.36914c-0.34913,-0.50173 -0.53906,-1.09795 -0.53906,-1.71094zM41.93555,14.13477c0.5912,-0.03794 1.06445,0.40639 1.06445,0.99805v25.99219c0,0.53597 -0.40062,0.96347 -0.93555,0.99805l-27,1.74219c-0.2936,0.01884 -0.5581,-0.08175 -0.75,-0.25977c-0.00065,-0.00065 -0.0013,-0.0013 -0.00195,-0.00195l-0.00195,-0.00195c-0.00408,-0.00383 -0.00575,-0.00977 -0.00977,-0.01367c-0.00386,-0.00525 -0.00776,-0.01045 -0.01172,-0.01562c-0.17682,-0.17883 -0.28906,-0.42283 -0.28906,-0.70508v-25.99219c0,-0.53746 0.39999,-0.96343 0.93555,-0.99805zM38.49609,19l-5.07422,0.28125c-0.774,0.08 -1.67578,0.65675 -1.67578,1.59375l2.25,0.1875v10.69141l-7.78125,-12.00195l-5.83203,0.32813c-1.091,0.08 -1.38867,0.89088 -1.38867,1.92188h2.25v15.56445c0,0 -1.0523,0.284 -1.4043,0.375c-0.748,0.193 -0.8457,0.8435 -0.8457,1.3125c0,0 3.75252,-0.18836 5.47852,-0.31836c1.959,-0.15 2.02344,-1.46289 2.02344,-1.46289l-2.25,-0.46875v-11.5332c0,0 5.71975,9.18963 7.46875,11.89063c0.823,1.269 1.43753,1.51758 2.51953,1.51758c0.888,0 1.72777,-0.26231 2.75977,-0.82031v-17.36133c0,0 0.19006,-0.01012 0.78906,-0.20312c0.683,-0.221 0.71289,-0.83814 0.71289,-1.49414z"></path></g></g>
                </svg>
                <h2 className="text-xl font-semibold mb-2">Notion</h2>
                <p className="text-gray-400 text-sm">Organize your notes and projects efficiently with Notion integration.</p>
              </div>
              <div className="bg-transparent   z-10 px-6 py-14 justify-center bg-gradient-to-tl  from-transparent via-white/5 to-white/15 rounded-lg flex flex-col items-center text-center">
                <img className='h-10 w-10 object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/516px-Google_Gemini_logo.svg.png" />

                <h2 className="text-xl font-semibold mb-2">Gemini</h2>
                <p className="text-gray-400 text-sm">Enhance your productivity with Gemini's AI-powered insights.</p>
              </div>
              <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-purple-700 h-14 w-14 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="flex justify-center flex-col items-center gap-2 w-full">
        <h1 className='text-2xl md:text-4xl lg:text-5xl bg-transparent  bg-gradient-to-b from-white via-white to-[#ccccce] text-transparent bg-clip-text font-semibold  text-center'>Pricing</h1>
        <p className="text-md text-gray-400 brightness-125 blur-[0.1px] max-w-md justify-center items-center text-center mx-auto">
          Choose the plan that best suits your needs. </p>
        <div className="flex flex-wrap items-center justify-center mt-10 flex-col md:flex-row gap-8 ">
          <CardContainer className="inter-var  relative flex   ">

            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">

              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Basic
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Perfect for small businesses just starting out and want to try the platform.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <X />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-neutral-600 dark:text-white "
              >
                Pro
                <h2 className="text-6xl bg-gradient-to-tl from-purple-500  to-white via-purple-300 text-transparent bg-clip-text ">$19</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Ideal for growing businesses needing more advanced features.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />20 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Designed for large organizations requiring comprehensive HR solutions
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Unlimited Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Unlimited tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      <section className='w-screen mt-20'>
        <footer className="w-full bg-neutral-900 text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">ClariQ</h2>
              <p className="text-sm text-gray-400">© 2025 ClariQ. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
          </div>
        </footer>
      </section>
    </main >
  )
}
