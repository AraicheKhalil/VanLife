import { Link } from "react-router-dom"


function NotFound() {

  return (
    <div className="not--found h-72 flex flex-col justify-center flex-nowrap gap-5 px-7 bg-orange-100 ">
      <h1 className="text-gray-900 text-3xl not-italic font-bold">Sorry, the page you were looking for was not found.</h1>
      <Link to='/'>
        <button className="py-3 text-white text-center text-lg not-italic font-bold leading-8 rounded bg-gray-900 w-full">
            Return to home
        </button>
      </Link>
    </div>
  )
}

export default NotFound
