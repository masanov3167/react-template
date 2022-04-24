import ListItem from "./ListItem";

const TasksCard = ({title, wiew,info, strong})=>{
    return (
        <div className="ticket-card">
            <div><h2>{title}</h2> <a href="#link">{wiew}</a> </div>
            <p>{info} <strong>{strong}</strong></p>

            <ol className="tasks-list">
                <ListItem text="Create new task" spanText="+" spanClass="add-task"/>
                <ListItem text="Finish ticket update" spanText="Urgent" spanClass="tasks-border"/>
                <ListItem text="Create new ticket example" spanText="new" spanClass="tasks-border green"/>
                <ListItem text="Update ticket report" spanText="Default" spanClass="tasks-border default"/>
            </ol>
        </div>
    )
}

export default TasksCard;