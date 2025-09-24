import purple from '../../assets/purple2.svg'
import JC from '../../assets/JoinAndCommunity.svg'
import JoinLogo from '../../assets/JoinLogo.svg'
const JoinAndCommunity = () => {
  return (
    <section className='relative bg-purple-300 max-w-[1280px] md:h-[585px] rounded-[32px] sm:rounded-[64px] md:mx-auto max-sm:grid grid-cols-1 my-10 sm:my-15 sm:px-0 flex justify-between'>
      <div className='order-2 sm:order-1'>
        <img
          src={purple}
          className='w-[120px] h-[120px] sm:w-[149px] sm:h-[148px] opacity-30 absolute bottom-[27%] md:bottom-[284px] left-[2px]'
          alt=''
          aria-hidden='true'
        />
        <img
          src={JC}
          className='relative sm:absolute sm:bottom-0 z-10'
          alt='JoinAndCommunity'
          aria-hidden='true'
        />
      </div>

      <div className='order-1 sm:order-2 flex flex-col justify-center sm:max-w-[453px] sm:mr-28 p-3'>
        <h5 className='font-semibold h5 text-background flex justify-center items-center flex-wrap py-3 gap-1 sm:block sm:py-0 sm:gap-0'>
          Join our
          <div className='flex justify-center sm:justify-start gap-2 items-center'>
            <img
              src={JoinLogo}
              className='w-[25px] h-[23px] sm:w-[70px] sm:h-[68px] lg:w-[91px] lg:h-[89px]'
              alt='JoinLogo'
              aria-hidden='true'
            />
            <span className='h6 font-normal text-yellow-200'>WonderKids</span>
          </div>
          community now
        </h5>

        <form className='flex flex-col gap-4 mt-6'>
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
          <button className='rounded-[40px] w-full sm:max-w-[196px] bg-yellow-300 my-6 py-4 body5 font-semibold cursor-pointer hover:opacity-90 hover:bg-yellow-200'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinAndCommunity
