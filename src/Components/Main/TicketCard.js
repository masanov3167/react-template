import ListItem from "./ListItem";

const TicketCard = ({title, wiew,info, strong})=>{
    return (
        <div className="ticket-card">
            <div><h2>{title}</h2> <a href="#link">{wiew}</a> </div>
            <p>{info} <strong>{strong}</strong></p>

            <ol className="ticket-list">
                <ListItem text="Waiting on Feature Request" spanText="4238" spanClass="ticket-number"/>
                <ListItem text="Awaiting Customer Response" spanText="1005" spanClass="ticket-number"/>
                <ListItem text="Awaiting Developer Fix" spanText="914" spanClass="ticket-number"/>
                <ListItem text="Pending" spanText="281" spanClass="ticket-number"/>
            </ol>
        </div>
    )
}

export default TicketCard;