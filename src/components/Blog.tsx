import show from "../assets/show.svg";
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
      <div className="flex items-center justify-center gap-3 cursor-pointer px-8 pb-10">
        <p className="body5 text-purple-300 font-semibold">Learn more</p>
        <img src={show} alt="show" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Blog;
