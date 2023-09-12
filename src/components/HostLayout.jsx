import { Link, Outlet } from "react-router-dom"

function HostLayout() {
  return (
    <>
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <Link to="/host" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/host/income" className="text-gray-900 dark:text-white hover:underline">Income</Link>
                        </li>
                        <li>
                            <Link to="/host/vans" className="text-gray-900 dark:text-white hover:underline">Vans</Link>
                        </li>
                        <li>
                            <Link to="/host/reviews" className="text-gray-900 dark:text-white hover:underline">Reviews</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout
