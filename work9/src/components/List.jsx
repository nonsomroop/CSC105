import Card from "./Card";
function List() {
  const person = [
    { Name: "Hanamichi Sakuragi", job: "Forward", hobby: "Basketball" },
    { Name: "Kaede Rukawa", job: "Forward", hobby: "Listen to Music" },
    { Name: "Takenori Akagi", job: "Center", hobby: "Studying" },
    { Name: "Ryota Miyagi", job: "guard", hobby: "Basketball" },
    { Name: "Hisashi Mitsui", job: "guard", hobby: "Basketball" },
  ];

  return (
    <>
      {person.map((e) => {
        return <Card name={e.Name} job={e.job} hobby={e.hobby}></Card>;
      })}
    </>
  );
}
export default List;
