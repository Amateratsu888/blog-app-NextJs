import Link from 'next/link'
import React from 'react'

export default function Navbar({children}) {
  return (
    <>
        <nav className="bg-gray-800 flex items-center justify-center ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href="/">
                  <a
                    
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  </Link>

                  <Link href="/blocs">
                  <a
                    
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Bloc
                  </a>
                  </Link>

                  <Link href="/listes">
                  <a
                    
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    List
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}
