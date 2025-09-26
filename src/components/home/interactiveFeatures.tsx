export default function InteractiveFeatures() {
  return (
    <section className='px-5 sm:px-20 py-15'>
      <div className='px-4 flex justify-between items-center mb-17.5 '>
        <h4 className='h4 font-semibold min-w-[180px] sm:min-w-[307px]'>
          Our{' '}
          <span className='h3 font-normal text-purple-300'>interactive</span>{' '}
          <br />
          features
        </h4>
        <div>
          <img src='./src/assets/Group 427319415.svg' alt='' />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-between'>
        <div className='relative h-[300px] sm:h-[448px] px-10 bg-purple-100 rounded-[64px] flex flex-col justify-end overflow-clip transform transition duration-300 hover:scale-105'>
          <div className='space-y-5 pb-12'>
            <h3 className='h7 font-semibold'>
              Fun <br />{' '}
              <span className='font-normal font-courgette'>Quiz</span>
            </h3>
            <p className='body4'>
              Test your understanding with a short but fun quizzes!
            </p>
          </div>
          <img
            className='absolute top-10 size-20 sm:size-auto'
            src='./src/assets/firstdiv-output.svg'
            alt=''
          />
          <img
            className='absolute size-40 sm:size-auto top-0 -right-10 sm:right-0'
            src='./src/assets/Group (1).svg'
            alt=''
          />
        </div>
        <div className='relative h-[300px] sm:h-[448px] px-10 bg-purple-300 rounded-[64px] flex flex-col justify-end overflow-clip transform transition duration-300 hover:scale-105'>
          <div className='space-y-5 pb-12 text-background dark:text-foreground'>
            <h3 className='h7 font-semibold'>
              Creative <br />{' '}
              <span className='font-normal font-courgette'>Activities</span>
            </h3>
            <p className='body4'>
              Discover enjoyable activities such as coloring, crafting, and
              science.
            </p>
          </div>
          <img
            className='absolute top-10 size-20 sm:size-auto'
            src='./src/assets/middiv-output.svg'
            alt=''
          />
          <img
            className='absolute size-40 sm:size-auto top-0 -right-10 sm:right-0'
            src='./src/assets/Vector (3).svg'
            alt=''
          />
        </div>
        <div className='relative h-[300px] sm:h-[448px] px-10 bg-yellow-100 rounded-[64px] flex flex-col justify-end overflow-clip transform transition duration-300 hover:scale-105'>
          <div className='space-y-5 pb-12'>
            <h3 className='h7 font-semibold'>
              Learn with <br />{' '}
              <span className='font-normal font-courgette'>Games</span>
            </h3>
            <p className='body4'>
              Learn something new while your kids playing games!
            </p>
          </div>
          <img
            className='absolute top-10 size-20 sm:size-auto'
            src='./src/assets/Group 427319397.svg'
            alt=''
          />
          <img
            className='absolute size-40 sm:size-auto top-5 -right-10 sm:right-0'
            src='./src/assets/Group (2).svg'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}
