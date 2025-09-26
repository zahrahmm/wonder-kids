import purple from '../../assets/purple2.svg'
import JC from '../../assets/JoinAndCommunity.svg'
import JoinLogo from '../../assets/JoinLogo.svg'
const JoinAndCommunity = () => {
  return (
    <section className='relative bg-purple-300 max-w-[1280px]  md:h-[585px] rounded-[32px] sm:rounded-[64px] md:mx-auto flex flex-col md:grid md:grid-cols-2 lg:flex-row my-10 sm:my-15 sm:px-0 justify-between '>
      <h5 className='font-semibold h5 text-background justify-center items-center flex-wrap gap-1 hidden md:flex lg:hidden md:col-span-2 '>
        Join our
        <div className='flex justify-center md:justify-start gap-2 items-center md:col-span-1'>
          <img
            src={JoinLogo}
            className='w-[70px] h-[68px] '
            alt='JoinLogo'
            aria-hidden='true'
          />
          <span className='h6 font-normal text-yellow-200'>WonderKids</span>
        </div>
        community now
      </h5>
      <div className='order-2 md:order-1'>
        <img
          src={purple}
          className='w-[100px] h-[100px] md:w-[149px] md:h-[148px] opacity-30 absolute bottom-[27%] md:bottom-[284px] left-[2px]'
          alt=''
          aria-hidden='true'
        />
        <img
          src={JC}
          className='relative md:absolute md:bottom-0 max-md:mx-auto z-10 w-[80%] md:w-[49.2vw] object-contain'
          alt='JoinAndCommunity'
          aria-hidden='true'
        />
      </div>

      <div className='order-1 md:order-2 grid md:max-w-[480px] p-3 md:col-span-1 md:px-8 lg:ml-[5vw] my-auto gap-5'>
        <h5 className='font-semibold h5 text-background flex justify-center items-center flex-wrap gap-1 md:hidden lg:block '>
          Join our
          <div className='flex justify-center md:justify-start gap-2 items-center'>
            <img
              src={JoinLogo}
              className='w-[25px] h-[23px] sm:w-[70px] sm:h-[68px] lg:w-[91px] lg:h-[89px]'
              alt='JoinLogo'
            />
            <span className='h6 font-normal text-yellow-200'>WonderKids</span>
          </div>
          community now
        </h5>

        <form className='flex flex-col gap-4 justify-center md:items-start items-center mx-auto w-full '>
          <input
            type='text'
            placeholder='Name'
            className='rounded-[64px] w-full bg-background py-4 px-6 body5 font-medium'
          />
          <input
            type='text'
            placeholder='Email or Phone'
            className='rounded-[64px] w-full bg-background py-4 px-6 body5 font-medium'
          />
          <button className='w-full md:max-w-[196px] btn-secondry'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinAndCommunity
