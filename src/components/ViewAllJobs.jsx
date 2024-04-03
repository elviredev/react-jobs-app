import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
    return (
        <section className="bg-slate-100 p-10">
            <div className="m-auto max-w-lg">
                <Link
                    to="/jobs"
                    className="block bg-slate-800 text-white text-center py-4 px-6 rounded-xl hover:bg-slate-600"
                >View All Jobs</Link>
            </div>
        </section>
    )
}
export default ViewAllJobs
