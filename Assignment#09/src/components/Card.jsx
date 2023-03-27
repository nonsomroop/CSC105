import "./styles.css"

function Card(user) {
    const { name, job, hobby }= user;
    return (
        <div className="card-container">
            <p className="card-body">Name: {name}</p>
            <p className="card-body">Job: {job}</p>
            <p className="card-body">Hobby: {hobby}</p>
        </div>
    )
}
export default Card;