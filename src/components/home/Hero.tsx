export default function Hero() {
  return (
    <div className='relative flex flex-col justify-between items-center gap-12 h-120 sm:h-140 lg:h-[80vh] max-w-[1440px] text-center mx-auto py-15 px-5 overflow-x-clip'>
      <h1 className='h1 font-semibold max-w-[937px] mx-auto'>
        The best place to <br />
        <span className='relative h2 font-normal font-courgette text-purple-300'>
          learn
          <img
            className='absolute -z-10 -bottom-2 right-6 sm:-bottom-4 sm:right-7'
            src='/Line element 1.svg'
          ></img>
        </span>{' '}
        and
        <span className='relative h2 font-normal font-courgette text-yellow-300'>
          play
          <img
            className='absolute -z-10 -bottom-2 left-4 sm:-bottom-5 sm:left-15'
            src='/Line element 2.svg'
          ></img>
        </span>{' '}
        <br /> for kids
      </h1>
      <p className='max-sm:hidden body4 text-gray dark:text-gray-400'>
        Discover thousands of fun and interactive learning activities <br /> to
        support your child's growth and learning process.
      </p>
      <p className='sm:hidden body4 text-gray dark:text-gray-400 max-w-100'>
        Discover thousands of fun and interactive learning activities to support
        your child's growth and learning process.
      </p>
      <button className='btn body4 w-[207px]'>
        Get Started
        <img className='' src='/Group 427319395.svg'></img>
      </button>
      <img
        className='absolute -z-10 -top-[20px] left-[0px] lg:top-[42px] lg:left-[77px] max-sm:size-20'
        src='/Element 6.svg'
      ></img>
      <img
        className='absolute -z-10 top-[70px] left-[10px] lg:top-[228px] lg:left-[142px] max-sm:size-14'
        src='/Element 7.svg'
      ></img>
      <img
        className='absolute -z-10 bottom-[0px] -left-[40px] lg:bottom-[127px] lg:left-[226px]'
        src='/Element 8.svg'
      ></img>
      <img
        className='absolute -z-10 bottom-[230px] -right-[50px] lg:bottom-[104px] lg:right-[190px] max-sm:size-40'
        src='/Element 4.svg'
        alt=''
      ></img>
      <img
        className='absolute -z-10 -top-[40px] -right-[10px] lg:top-[92px] lg:right-[40px] max-sm:size-30'
        src='/Group 427319413.svg'
      ></img>
      <img
        className='absolute -z-10 bottom-[150px] right-[20px] lg:top-[315px] lg:right-[155px]'
        src='/Element 5.svg'
      ></img>
    </div>
  )
}
