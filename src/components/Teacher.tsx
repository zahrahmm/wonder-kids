interface TeacherProps {
  image: string;
  name: string;
  title: string;
}
const Teacher = (props: TeacherProps) => {
  return (
    <div className="text-background flex flex-col justify-center items-center gap-4 md:gap-7">
      <img src={props.image}></img>
      <div>
        <h2 className="body2">{props.name}</h2>
        <p className="body4">{props.title}</p>
      </div>
    </div>
  );
};

export default Teacher;
