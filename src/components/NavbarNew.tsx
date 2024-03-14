"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut ,useSession} from 'next-auth/react'
const NavbarNew = () => {
  const session=useSession();
  return (
    <nav className="bg-white border-gray-200 sticky top-0">
            <div className="flex justify-between">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-start space-x-5 p-4 m-0">
                <a href="" className="flex  space-x-3 rtl:space-x-reverse">
                  <img src="/logo.png" className="h-8" alt="Logo" />
                </a>
                <div
                  className="justify-start items-start w-full md:flex md:w-auto md:order-1"
                  id="navbar-user"
                >
                  <ul className="flex flex-col font-normal p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 hover:border-b-2 border-b-2 border-gray-400 hover:border-gray-800   text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"
                        aria-current="page"
                      >
                        My collections
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 hover:border-b-2 border-b-2 border-gray-400 hover:border-gray-800   text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"
                      >
                        Learners
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 hover:border-b-2 border-b-2 border-gray-400 hover:border-gray-800   text-black rounded md:bg-transparent md:text-gray md:p-0 md:dark:text-black"
                      >
                        Custom Domains
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-5">
                {session.data?.user?.id && <Button className='bg-[#1D4ED8] hover:bg-[#172554]' onClick={async()=>{
                  await signOut()
                }}>Logout</Button>}
              </div>
            </div>
          </nav>
  )
}

export default NavbarNew
