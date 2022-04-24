import TicketCard from "./TicketCard";
import TasksCard from "./TasksCard";

const Footer = ()=>{
    return (
        <footer className="footer">
            <TicketCard title="Unresolved tickets" wiew="View details" info="Group: " strong="Support"/>
            <TasksCard title="Tasks" wiew="View all" info="Today"/>
        </footer>
    )
}

export default Footer;