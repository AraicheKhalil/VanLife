import { Link } from "react-router-dom"

function About() {

  return (
    <div className="About">
      <section>
        <img src='./imgs/image 54.png'/>
        <div className="px-5 py-7">
          <h1 className="text-gray-900 text-3xl not-italic font-bold leading-9 mb-7">Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p className="text-gray-900 text-base not-italic font-medium leading-5 mb-7">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            <br />
            (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
          <div className="rounded px-4 py-4 flex flex-col gap-6 bg-orange-300 mb-4">
            <h2 className="text-gray-900 text-2xl not-italic font-bold leading-7">Your destination is waiting.<br />Your van is ready.</h2>
            <button className="text-[#fff] text-sm not-italic font-bold leading-6 rounded-lg bg-gray-900 w-fit px-4 py-2">
              <Link to='/vans'>Explore our vans</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  )

}

export default About


