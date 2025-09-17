interface TeacherProps {
  image: string;
  name: string;
  title: string;
}
const Teacher = (props: TeacherProps) => {
  return (
    <div className="text-background flex flex-col justify-center items-center">
      <img src={props.image}></img>
      <h2 className="body2">{props.name}</h2>
      <p className="body4">{props.title}</p>
    </div>
  );
};

export default Teacher;
