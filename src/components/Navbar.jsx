import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const location = useLocation()
    // console.log(location.pathname)

    // Liens actifs pour le menu
    const linkClass = ({ isActive }) =>
        isActive
            ? 'bg-amber-900 text-white hover:bg-amber-700 hover:text-white rounded-md px-3 py-2'
            : 'text-white hover:bg-amber-700 hover:text-white rounded-md px-3 py-2'

    return (
        <nav className={ location.pathname === '/' ? "absolute z-10 w-full" : "bg-slate-500"} >
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className="flex flex-1 md:items-stretch md:justify-start">

                        {/* <!-- Logo --> */}
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={ logo } alt="React Jobs"/>
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2 text-sm media410:text-base">
                                <NavLink to="/" className={ linkClass }>Home</NavLink>
                                <NavLink to="/jobs" className={ linkClass }>Jobs</NavLink>
                                <NavLink to="/add-job" className={ linkClass }>Add Job</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
