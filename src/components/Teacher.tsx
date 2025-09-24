import yellow2 from '../assets/yellow2.svg'
interface TeacherProps {
  image: string
  name: string
  title: string
  showYellow2?: boolean
}
const Teacher = (props: TeacherProps) => {
  return (
    <div className='text-background flex flex-col justify-center items-center gap-4 md:gap-7'>
      <div className='relative'>
        <img src={props.image}></img>
        {props.showYellow2 && (
          <img
            className='absolute -left-[15px] top-[36px] max-sm:size-10'
            src={yellow2}
            alt=''
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
