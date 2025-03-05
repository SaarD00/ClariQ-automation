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
        {/* eslint-disable-next-line react/no-unescaped-entities */}

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

          <div className="mt-8 flex justify-center"></div>
        </main>
        <div className=' items-center z-20 mb-20 justify-center flex  gap-4 '>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
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
                {/* eslint-disable-next-line react/no-unescaped-entities */}
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
                <img className='h-14 w-14' src="/notion.png" />
                <h2 className="text-xl font-semibold mb-2">Notion</h2>
                <p className="text-gray-400 text-sm">Organize your notes and projects efficiently with Notion integration.</p>
              </div>
              <div className="bg-transparent   z-10 px-6 py-14 justify-center bg-gradient-to-tl  from-transparent via-white/5 to-white/15 rounded-lg flex flex-col items-center text-center">
                <img className='h-14 w-14 object-contain' src="/discord.png" />

                <h2 className="text-xl font-semibold mb-2">Discord</h2>
                <p className="text-gray-400 text-sm">Stay connected with your community through Discord integration.</p>
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
