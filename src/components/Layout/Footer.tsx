export default function Footer() {
  return (
    <footer className='w-full p-12'>
      <div className='mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 md:grid-cols-12 md:gap-6'>
        <div className='md:col-span-4 flex flex-col gap-8'>
          <div className='flex items-center gap-3'>
            <img src='/Logo.svg' width={32} height={32} alt='WonderKids logo' />
            <span className='text-[28px] font-semibold'>WonderKids</span>
          </div>
          <div className='flex items-center gap-4'>
            <img src='/Vector.svg' alt='' width={42} height={42} />
            <img src='/Group 427319405.svg' alt='' width={48} height={48} />
            <img src='/Vector-1.svg' alt='' width={70} height={70} />
          </div>
        </div>

        <div className='md:col-span-2 flex flex-col gap-4'>
          <h6 className='body2 text-color-black'>Home</h6>
          <ul className='space-y-4 text-color-gray body3'>
            <li>App</li>
            <li>About</li>
            <li>People</li>
          </ul>
        </div>

        <div className='md:col-span-2 flex flex-col gap-4'>
          <h6 className='body2 text-color-black'>For school</h6>
          <ul className='space-y-4 text-color-gray body3'>
            <li>Brain training</li>
            <li>E-learning</li>
            <li>Online modules</li>
          </ul>
        </div>

        <div className='md:col-span-2 flex flex-col gap-5'>
          <h6 className='body2 text-color-black'>Media</h6>
          <ul className='space-y-4 text-color-gray body3'>
            <li>Support Us</li>
            <li>Contact</li>
            <li>Places</li>
          </ul>
        </div>

        <div className='md:col-span-2 flex items-start justify-end gap-4'>
          <img src='/Group 427319388.svg' alt='Instagram' width={48} height={48} />
          <img src='/Group 427319389.svg' alt='Facebook' width={48} height={48} />
          <img src='/Group 427319390.svg' alt='Twitter' width={48} height={48} />
        </div>
      </div>
    </footer>
  )
}
