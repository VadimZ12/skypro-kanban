import Card from "../Card/Card"

function Column({title}) {
    return (
        <div className="main__column column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
          <Card theme={"Copywriting"} name={"Название задачи"}  date={"30.01.23"} />
          <Card theme={"Web Design"} name={"Название задачи"}  date={"22.01.23"} />
        </div>
        </div>
    )
}

export default Column