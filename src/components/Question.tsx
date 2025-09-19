const Question = ({ question }: { question?: string }) => {
  return (
    <div className='flex justify-center items-center gap-5 w-full cursor-pointer'>
      <div className='border rounded-[40px] sm:rounded-[80px] flex justify-between items-center w-full body1 font-medium px-6 py-4 sm:px-8 sm:py-6'>
        <div className='max-w-[508px]'>{question}</div>
        <div className='bg-purple-300 opacity-10 rounded-full aspect-square w-10 sm:w-14 min-w-[40px] min-h-[40px]'></div>
      </div>
      <div className='text-purple-300 w-4 h-4'>+</div>
    </div>
  )
}

export default Question
