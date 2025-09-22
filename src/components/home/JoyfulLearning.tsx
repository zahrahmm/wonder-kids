import { useState, useEffect } from 'react'
import yellow from '../../assets/yellow.svg'
import purple from '../../assets/purple.svg'
import Teacher from '../Teacher'
import teacher1 from '../../assets/teacher1.svg'
import teacher2 from '../../assets/teacher2.svg'
import teacher3 from '../../assets/teacher3.svg'
import teacher4 from '../../assets/teacher4.svg'
import purple2 from '../../assets/purple2.svg'
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
      <div className='relative max-w-[1216px]'>
        <img
          src={yellow}
          className='
          absolute 
          top-[4%] left-[4%] w-[70px]
          sm:top-[6%] sm:left-[5%] sm:w-[86px]
          md:top-[8%] md:left-[6%] md:w-[100px]
          lg:top-[12%] lg:left-[7%] lg:w-[114px]
        '
          alt=''
          aria-hidden='true'
        ></img>
        <h4 className='font-semibold h4 text-center  max-w-[994px] mx-auto flex flex-col justify-center items-center text-background '>
          We aim to help children
          <span className='text-yellow-200 font-normal h3'>
            discover the joy of creative
          </span>
          learning and grow into well-rounded individuals.
        </h4>
        <img
          src={purple}
          className=' absolute
          top-[25%] right-[4%] 
          sm:top-[30%] sm:right-[6%] 
          md:top-[35%] md:right-[8%] 
          lg:top-[40%] lg:right-[6%] 
        '
          alt=''
          aria-hidden='true'
        ></img>
        <img
          src={purple2}
          className='
          absolute z-20
          bottom-[15%] right-[8%] w-10.5
          sm:bottom-[40%] sm:right-[18%] 
          md:bottom-[40%] md:right-[32%]
          lg:bottom-[34%] lg:right-[35%] lg:w-12.5
        '
          alt=''
          aria-hidden='true'
        ></img>
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
                showYellow2={index === 1}
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
      </div>
    </section>
  )
}

export default JoyfulLearning
