import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className='flex justify-center gap-5'>
                <NavLink 
                    to="/"
                    className={({isActive}) => isActive ? "text-red-500" : ""}>
                        Home
                </NavLink>
                <NavLink 
                    to="/contact"
                    className={({isActive}) => isActive ? "text-red-500" : ""}>                        
                        Contact
                </NavLink>
                <NavLink 
                    to="/message"
                    className={({isActive}) => isActive ? "text-red-500" : ""}>
                        Message
                </NavLink>  
                <NavLink 
                    to="/author"
                    className={({isActive}) => isActive ? "text-red-500" : ""}>
                        Author
                </NavLink>
                <NavLink 
                    to="/addAuthor"
                    className={({isActive}) => isActive ? "text-red-500" : ""}>
                        Add Author
                </NavLink>
                
            </nav>
        </>
    )
}