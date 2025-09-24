import { useState, useEffect } from 'react'
import yellow from '../../assets/yellow.svg'
import purple from '../../assets/purple.svg'
import Teacher from '../Teacher'
import teacher1 from '../../assets/teacher1.svg'
import teacher2 from '../../assets/teacher2.svg'
import teacher3 from '../../assets/teacher3.svg'
import teacher4 from '../../assets/teacher4.svg'
import arrow from '../../assets/arrow.svg'

const JoyfulLearning = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 768 ? 2 : 4
  )
  const teachers = [
    { image: teacher1, name: 'Savannah Nguyen', title: 'Reading Teacher' },
    { image: teacher2, name: 'Jacob Jones', title: 'Math Teacher' },
    { image: teacher3, name: 'Jenny Wilson', title: 'Drawing Teacher' },
    { image: teacher4, name: 'Kristin Watson', title: 'Science Teacher' },
    { image: teacher1, name: 'Emily Davis', title: 'Music Teacher' },
    { image: teacher3, name: 'Michael Brown', title: 'Sports Teacher' },
  ]

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 4)
      setCurrentIndex(0)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const visibleTeachers = Array.from({ length: itemsPerPage }, (_, i) => {
    return teachers[(currentIndex + i) % teachers.length]
  })

  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length)
  }

  const prevTeacher = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length)
  }
  return (
    <section className='bg-purple-300 z-10 overflow-hidden py-15 md:py-30 flex justify-center items-center flex-col'>
      <div className='max-w-[994px] relative z-10'>
        <img
          src={yellow}
          className='
          absolute -z-10
          lg:top-[0px] lg:-left-[108px] 
          md:-top-[20px] md:left-[25px] md:w-30 md:block
          hidden
          '
          alt=''
          aria-hidden='true'
        ></img>
        <h4 className='font-semibold h4 text-center  mx-auto flex flex-col justify-center items-center text-background '>
          We aim to help children
          <span className='text-yellow-200 font-normal h3'>
            discover the joy of creative
          </span>
          learning and grow into well-rounded individuals.
        </h4>
        <img
          src={purple}
          className=' absolute -z-10
          lg:top-[190px] lg:-right-[133px] 
          md:top-[20px] md:-right-[15px] md:w-30 md:block
          hidden
        '
          alt=''
          aria-hidden='true'
        ></img>
      </div>
      <div className='z-10 flex justify-center items-center gap-6 md:gap-15  mt-20'>
        <img
          src={arrow}
          alt='next arrow'
          className='rotate-180 cursor-pointer w-8 lg:w-14'
          onClick={nextTeacher}
        ></img>
        <div className='grid grid-cols-2 md:grid-cols-4 grid-row-reverse gap-9'>
          {visibleTeachers.map((teacher, index) => (
            <Teacher
              key={index}
              showYellow2={itemsPerPage === 4 ? index === 1 : index === 0}
              showPurple2={itemsPerPage === 4 ? index === 2 : index === 1}
              image={teacher.image}
              name={teacher.name}
              title={teacher.title}
            />
          ))}
        </div>
        <img
          src={arrow}
          className=' cursor-pointer w-8 lg:w-14'
          onClick={prevTeacher}
          alt='prev arrow'
        ></img>
      </div>
    </section>
  )
}

export default JoyfulLearning
