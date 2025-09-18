import show from "../assets/show.svg";
import FunActivitiesForKids from "../assets/Fun-Activities-for-Kids.svg";
import LearningGameIdeas from "../assets/Learning-Game-Ideas.svg";
import LearningWithGames from "../assets/Learning-with-Games.svg";
import Blog from "./Blog";
const ReadOurBlog = () => {
  const blogs = [
    {
      image: LearningWithGames,
      title: "Learning with Games? Why not?",
      description:
        "Embrace the joy of games to enhance your learning experience!",
    },
    {
      image: LearningGameIdeas,
      title: "10 Learning Game Ideas",
      description: "10 ideas for learning with for your kids to have fun.",
    },
    {
      image: FunActivitiesForKids,
      title: "Fun Activities for Kids",
      description:
        "Want to do something outside from your laptop? Here are our recommendations.",
    },
  ];

  return (
    <section className="px-8 sm:px-20 py-15">
      <div className="flex justify-between items-center mb-17.5 ">
        <h4 className="h4 font-semibold">
          Read our <span className="h3 font-normal text-purple-300">blog</span>
        </h4>
        <div className="flex items-center justify-center gap-1 sm:gap-3 cursor-pointer">
          <p className="body5 text-purple-300 font-semibold">See All</p>
          <img src={show} alt="show" className="w-7 h-7 sm:w-10 sm:h-10" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch justify-center gap-8 ">
        {blogs.map((blog, index) => (
          <Blog
            key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ReadOurBlog;
