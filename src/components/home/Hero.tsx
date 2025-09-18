export default function Hero() {
  return (
    <div className='relative flex flex-col items-center gap-12 h-[688px] text-center py-15'>
      <h1 className='h1 font-semibold max-w-[937px] mx-auto'>
        The best place to{' '}
        <span className='relative h2 font-normal font-courgette text-purple-300'>
          learn
          <img
            className='absolute -z-10 -bottom-4 right-7'
            src='/Line element 1.svg'
          ></img>
        </span>{' '}
        and{' '}
        <span className='relative h2 font-normal font-courgette text-yellow-300'>
          play
          <img
            className='absolute -z-10 -bottom-5 left-15'
            src='/Line element 2.svg'
          ></img>
        </span>{' '}
        <br /> for kids
      </h1>
      <p className='body4 text-gray'>
        Discover thousands of fun and interactive learning activities <br /> to
        support your child's growth and learning process.
      </p>
      <button className='text-[20px] flex justify-center items-center gap-4 font-semibold text-background dark:text-foreground rounded-[40px] bg-purple-300 h-18 w-[207px] hover:bg-purple-300/80 transition-all duration-300 cursor-pointer'>
        Get Started
        <img className='' src='/Group 427319395.svg'></img>
      </button>
      <img
        className='absolute -z-10 top-[42px] left-[77px]'
        src='/Element 6.svg'
      ></img>
      <img
        className='absolute -z-10 top-[228px] left-[142px]'
        src='/Element 7.svg'
      ></img>
      <img
        className='absolute -z-10 bottom-[127px] left-[226px]'
        src='/Element 8.svg'
      ></img>
      <img
        className='absolute -z-10 bottom-[104px] right-[190px]'
        src='/Element 4.svg'
      ></img>
      <img
        className='absolute -z-10 top-[92px] right-[40px]'
        src='/Group 427319413.svg'
      ></img>
      <img
        className='absolute -z-10 top-[315px] right-[155px]'
        src='/Element 5.svg'
      ></img>
    </div>
  )
}
