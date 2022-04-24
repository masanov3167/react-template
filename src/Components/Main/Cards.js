import CardItem from "./CardItem";

const Cards = () =>{
    return (
        <ol className="hero">
            <CardItem text="Unresolved" number="60" />
            <CardItem text="Overdue" number="16" />
            <CardItem text="Open" number="43" />
            <CardItem text="On hold" number="64" />
        </ol>
    )
}

export default Cards;