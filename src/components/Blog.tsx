import { Show } from "./Icons";

interface BlogProps {
  image: string;
  title: string;
  description: string;
}
const Blog = (props: BlogProps) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-start gap-6 rounded-[48px] flex-1 h-full transform transition duration-300 hover:scale-105">
      <img
        src={props.image}
        alt={props.title}
        className="w-full rounded-t-[48px] h-full object-cover"
      />
      <div className="flex flex-col justify-center items-start gap-4 px-8">
        <h2 className="body2 font-semibold">{props.title}</h2>
        <p className="body5 font-medium text-gray">{props.description}</p>
      </div>
      <div
        className="flex items-center justify-center gap-3 cursor-pointer py-3 px-3 ml-4 mb-2
      group  sm:gap-3 
  border border-transparent rounded-[40px]  text-purple-300
  transition-colors duration-1000
  hover:border-purple-300 hover:bg-purple-300 hover:text-white"
      >
        <p className="body5  font-semibold">Learn more</p>
        <Show className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Blog;
