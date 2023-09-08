import Footer from "../components/Footer"
import Header from "../components/Header"

function About() {
  return (
    <div className="About">
      <Header />
      <section>
        <div className="Landing">
            <img src="./imgs/image 54.png" className="object-cover w-full"/>
        </div>
        <div className="sedan-quote p-5">
            <p className="max-w-[600px] px-8 py-4 text-gray-900 text-3xl not-italic font-bold leading-9">Don’t squeeze in a sedan when you could relax in a van.</p>
            <p className="max-w-[700px] px-8 py-4 text-gray-900 text-base not-italic font-medium leading-5">
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
        </div>
        <div className="explorer mx-12 mb-8 p-7 bg-orange-300 w-fit rounded-lg flex flex-col gap-6">
            <h1 className="max-w-[420px] text-gray-900 text-2xl not-italic font-bold leading-7">Your destination is waiting.
            Your van is ready.</h1>
            <button type="button" className="rounded-lg bg-gray-900 text-sm not-italic font-bold leading-6 text-white py-3 px-6 w-fit">Explore our vans</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
