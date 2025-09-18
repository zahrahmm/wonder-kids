import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className='flex items-center space-x-1'>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `body6 flex h-8 cursor-pointer items-center rounded-[40px] border px-6 py-1 transition-all duration-300 ${
              isActive
                ? 'border-gray-800 bg-gray-800 text-white'
                : 'border-gray-300 hover:border-gray-500 hover:bg-gray-100'
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}
