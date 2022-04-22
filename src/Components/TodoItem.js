const TodoItem = ({id,forId,title,dataset,delfunc})=>{
    return (
        <li className="list-item">
            <input id={id} type="checkbox"/>
            <label for={forId}>{title}</label>
            <span className="del" data-todo-id={dataset} onClick={delfunc}></span>
        </li>
    )
}

export default TodoItem;