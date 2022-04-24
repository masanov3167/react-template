const CardItem = ({text, number}) =>{
    return(
        <li className="card">
            <h3 className="card-text">{text}</h3>
            <time className="card-number">{number}</time>
        </li>
    )
}

export default CardItem;