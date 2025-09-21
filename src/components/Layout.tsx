import { NavLink, Outlet } from 'react-router-dom'
import { Menu, User } from 'lucide-react'
import Navbar from './Layout/navBar'
import Footer from './Layout/Footer'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen m-auto'>
      <header>
        <nav className='flex h-34 items-center justify-between max-w-[1440px] m-auto px-[5vw]'>
          <div className='max-lg:order-2 flex items-center justify-center gap-2'>
            <img
              className=''
              src='./public/logo.svg'
              alt='logomark'
              width={32}
              height={32}
            />
            <h4 className='text-[28px] font-semibold'>WonderKids</h4>
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
            <button className='btn-outline body4 max-sm:hidden!'>
              Contact Us
              <img src='/Group 427319385.svg' alt='' className='h-10 w-10' />
            </button>
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
