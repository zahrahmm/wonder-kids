import { Show } from './Icons'

interface BlogProps {
  image: string
  title: string
  description: string
}
const Blog = (props: BlogProps) => {
  return (
    <div className='bg-gray-100 dark:bg-purple-100 flex flex-col justify-center items-start gap-6 rounded-[48px] flex-1 h-full transform transition duration-300 hover:scale-105'>
      <img
        src={props.image}
        alt={props.title}
        className='w-full rounded-t-[48px] h-full object-cover'
      />
      <div className='flex flex-col justify-center items-start gap-4 px-8'>
        <h2 className='body2 dark:text-background font-semibold'>
          {props.title}
        </h2>
        <p className='body5 font-medium text-gray'>{props.description}</p>
      </div>
      <button className='btn-ghost group ml-3 mb-2'>
        <p className='body5  font-semibold'>Learn more</p>
        <Show className='w-8 h-8' />
      </button>
    </div>
  )
}

export default Blog
