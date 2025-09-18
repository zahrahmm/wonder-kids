import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Layout/navBar'
import Footer from './Layout/Footer'

export default function Layout() {
  return (
    <body className='flex flex-col min-h-screen'>
      <header>
        <nav className='m-auto flex h-34 max-w-[1440px] items-center justify-between'>
          <div className='flex items-center justify-center gap-2'>
            <img
              className=''
              src='./public/logo.svg'
              alt='logomark'
              width={32}
              height={32}
            />
            <h4 className='font-quicksand text-[28px] font-semibold'>
              WonderKids
            </h4>
          </div>
          <Navbar />
          <div>
            <NavLink to='/'>Sign In</NavLink>
          </div>
        </nav>
      </header>
      <main className='flex-grow'>
        <div className='max-w-4xl mx-auto p-4'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </body>
  )
}
