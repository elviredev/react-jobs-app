import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <section
            className="bg-slate-100 text-center items-center flex flex-col h-screen pt-12"
        >
            <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4 " />
            <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
            <p className="text-xl mb-5">This page does not exist</p>
            <Link
                to="/"
                className="text-white bg-amber-900 hover:bg-amber-700 rounded-md px-3 py-2 mt-4"
            >Go Back</Link>
        </section>
    )
}
export default NotFoundPage
