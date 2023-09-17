import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="Home">
      <section className="relative" >
        <img src="./imgs/image 53.png" className="" />
        <div className="info absolute top-1/2 -translate-y-1/2 mx-6">
          <h1 className="text-[#fff] text-3xl not-italic font-extrabold mb-4">You got the travel plans, we got the travel vans.</h1>
          <p className="text-[#fff] text-sm not-italic font-normal leading-6 mb-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button className="text-center text-sm not-italic font-bold leading-8 py-1 w-full rounded bg-orange-500">
            <Link to='vans'>Find your van</Link>
          </button>
        </div>
      </section>
    </div>
  )

}

export default Home
