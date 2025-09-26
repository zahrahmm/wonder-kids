import yellow2 from '../assets/yellow2.svg'
import purple2 from '../assets/purple2.svg'
interface TeacherProps {
  image: string
  name: string
  title: string
  showYellow2?: boolean
  showPurple2?: boolean
}
const Teacher = (props: TeacherProps) => {
  return (
    <div className='text-background flex flex-col justify-center items-center gap-4 md:gap-7'>
      <div className='relative'>
        <img src={props.image}></img>
        {props.showYellow2 && (
          <img
            className='absolute -left-[15px] top-[36px] max-lg:size-13 max-sm:size-10'
            src={yellow2}
            alt=''
            aria-hidden='true'
          />
        )}
        {props.showPurple2 && (
          <img
            className='absolute right-[6px] -top-[10px] max-lg:-right-[6px]  max-lg:size-13 max-sm:size-10'
            src={purple2}
            alt=''
            aria-hidden='true'
          />
        )}
      </div>
      <div>
        <h2 className='body2'>{props.name}</h2>
        <p className='body4'>{props.title}</p>
      </div>
    </div>
  )
}

export default Teacher
