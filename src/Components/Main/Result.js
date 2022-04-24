const Result = ({text, number}) =>{
    return (
        <li className="result-list-item">
            <h3>{text}</h3>
            <time>{number}</time>
        </li>
    )
}

export default Result;