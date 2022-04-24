const ListItem = ({text, spanText, spanClass}) => {
    return (
        <li className="footer-li">
        <input className="checkbox" type="checkbox" />
        <h3>{text}</h3>
        <span className={spanClass}>{spanText}</span>
        </li>
    )
}
export default ListItem;