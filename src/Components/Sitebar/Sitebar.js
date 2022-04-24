import Logo from "./Logo";
import {
	Tickets,
	Overwiew,
	Ideas,
	Contacts,
	Agents,
	Articles,
	Settings,
	Subscription,
} from "./Navbar";

const Sitebar = () =>{
    return (
        <div className='sitebar'>
				<Logo />
                <ol className='nav'>
                    <Overwiew />
                    <Tickets />
                    <Ideas />
                    <Contacts />
                    <Agents />
                    <Articles />
                    <span className='nav-line'></span>
                    <Settings />
                    <Subscription />
                </ol>
	    </div>
    )
}

export default Sitebar;