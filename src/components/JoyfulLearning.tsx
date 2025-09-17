import { useState ,useEffect } from "react";
import yellow from "../assets/yellow.svg";
import purple from "../assets/purple.svg";
import Teacher from "./Teacher";
import teacher1 from "../assets/teacher1.svg";
import teacher2 from "../assets/teacher2.svg";
import teacher3 from "../assets/teacher3.svg";
import teacher4 from "../assets/teacher4.svg";
import yellow2 from "../assets/yellow2.svg";
import purple2 from "../assets/purple2.svg";
import arrow from "../assets/arrow.svg";

const JoyfulLearning = () => {
  const [currentIndex,setCurrentIndex]= useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 768 ? 2 : 4
  );
  const teachers = [
    { image: teacher1, name: "Savannah Nguyen", title: "Reading Teacher" },
    { image: teacher2, name: "Jacob Jones", title: "Math Teacher" },
    { image: teacher3, name: "Jenny Wilson", title: "Drawing Teacher" },
    { image: teacher4, name: "Kristin Watson", title: "Science Teacher" },
  ];

   useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 4);
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTeacher = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const start = currentIndex * itemsPerPage;
  const visibleTeachers = teachers.slice(start, start + itemsPerPage);

  return (
    <section className="bg-purple-300 relative z-10 overflow-hidden py-15 md:py-30 flex justify-center items-center flex-col">
      <img
        src={yellow}
        className="
          absolute -z-10 
          top-[4%] left-[4%] w-[70px]
          sm:top-[6%] sm:left-[5%] sm:w-[86px]
          md:top-[8%] md:left-[6%] md:w-[100px]
          lg:top-[12%] lg:left-[7%] lg:w-[114px]
        "
        alt=""
      ></img>
      <h4 className="font-semibold h4 text-center  max-w-[994px] mx-auto flex flex-col justify-center items-center text-background ">
        We aim to help children
        <span className="text-yellow-200 font-normal h3">
          discover the joy of creative
        </span>
        learning and grow into well-rounded individuals.
      </h4>
      <img
        src={purple}
        className=" absolute -z-10 
          top-[25%] right-[4%] 
          sm:top-[30%] sm:right-[6%] 
          md:top-[35%] md:right-[8%] 
          lg:top-[40%] lg:right-[6%] 
        "
        alt=""
      ></img>
      <img
        src={purple2}
        className="
          absolute z-20
          bottom-[15%] right-[8%] w-6.5
          sm:bottom-[25%] sm:right-[12%] sm:w-8.5
          md:bottom-[30%] md:right-[30%] md:w-10.5
          lg:bottom-[32%] lg:right-[35%] lg:w-12.5
        "
        alt=""
      ></img>
      <img
        src={yellow2}
        className="
          absolute z-20
          bottom-[12%] left-[6%] w-4.5
          sm:bottom-[26%] sm:left-[33%] sm:w-8.5
          md:bottom-[28%] md:left-[30%] md:w-12.5
          lg:bottom-[30%] lg:left-[33%] lg:w-16.5
        "
        alt=""
      ></img>
      <div className="z-10 flex justify-center items-center gap-9 mt-20">
        <img src={arrow} alt="next arrow" className="cursor-pointer " onClick={nextTeacher}></img>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-row-reverse">
        {visibleTeachers.map((teacher, index) => (
            <Teacher
              key={index}
              image={teacher.image}
              name={teacher.name}
              title={teacher.title}
            />
          ))}
        </div>
        <img src={arrow} className="rotate-180 cursor-pointer " onClick={prevTeacher} alt="prev arrow"></img>
      </div>
    </section>
  );
};

export default JoyfulLearning;
