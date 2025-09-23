import { NavLink, Outlet } from 'react-router-dom'
import { Menu, User } from 'lucide-react'
import Navbar from './Layout/navBar'
import Footer from './Layout/Footer'
import { useEffect, useState } from 'react'

export default function Layout() {
  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='sticky top-0 z-50'>
        <nav
          className={`transition-all duration-1000 flex items-center justify-between max-w-[1440px] mx-auto  ${
            shrink
              ? 'w-1/2 rounded-[40px] shadow-2xl bg-background/70 backdrop-blur-md h-16 mt-10 px-4'
              : 'w-full h-34 px-[5vw]'
          }`}
        >
          <div className='max-lg:order-2 flex items-center justify-center gap-2'>
            <img
              className=''
              src='./public/logo.svg'
              alt='logomark'
              width={32}
              height={32}
            />
            {!shrink && (
              <h4 className='text-[28px] font-semibold'>WonderKids</h4>
            )}
          </div>
          <div className='max-lg:hidden'>
            <Navbar />
          </div>
          <div className='max-lg:order-1 lg:hidden'>
            <Menu />
          </div>
          <div className='max-lg:order-3 flex h-full justify-center items-center gap-4'>
            <NavLink className='body5 font-semibold' to='/'>
              <span className='sm:hidden'>
                <User />
              </span>
              <span className='max-sm:hidden'>Sign In</span>
            </NavLink>
            {!shrink && (
              <button className='btn-outline body4 max-sm:hidden!'>
                Contact Us
                <img src='/Group 427319385.svg' alt='' className='h-10 w-10' />
              </button>
            )}
          </div>
        </nav>
      </header>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
