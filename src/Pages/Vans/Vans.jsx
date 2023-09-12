import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Vans() {
    const [vans,SetVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => SetVans(data.vans))
    }, [])

    console.log(vans.map(it => {
      return it
    }))


  return (
    <div className="Vans">
        <section className="">
          <div className="container px-14 py-6">
            <h1 className="text-gray-900 text-3xl not-italic font-bold leading-8">
              Explore our van options
            </h1>
            <div className="py-3">
              <button className="mr-4 my-3 bg-orange-200 px-3 rounded-md p-2 text-gray-700 text-center text-base not-italic font-medium leading-6">
                Simple
              </button>
              <button className="mr-4 my-3 bg-orange-200 px-2 rounded-md p-2 text-gray-700 text-center text-base not-italic font-medium leading-6">
              Luxury
              </button>
              <button className="mr-4 my-3 bg-orange-200 px-2 rounded-md p-2 text-gray-700 text-center text-base not-italic font-medium leading-6">
                Rugged
              </button>
              <button className=" rounded-md p-2 text-gray-700 text-center text-base not-italic font-medium leading-6 underline">
                clear Filters
              </button>
            </div>
          </div>
          <div className="card-cont gap-8 mx-auto p-6 flex justify-center flex-wrap px-14 py-6">
            {vans?.map(card => {
              return (
                <div key={card.id} className="card-vans ">
                  <Link to={`/vans/${card.id}`}>
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src={card.imageUrl} alt="product image" />
                        <div className="flex w-full justify-between items-center py-2 px-4">
                          <div className="">
                              <h5 className="text-gray-900 text-xl not-italic font-semibold leading-8">{card.name}</h5>
                          </div>
                          <div className="leading-3 mt-2 text-gray-900 text-right text-xl not-italic font-semibold ">{card.price}$ <br />
                            <div className="text-gray-900 text-right text-sm not-italic font-medium leading-8">/Day</div>
                          </div>
                        </div>
                        <button 
                          type="button" 
                          className={`text-white ${card.type} bg-blue-700  font-medium rounded-lg text-sm mx-4  px-5 py-2.5 mr-2 mb-4  focus:outline-none`}>
                            {card.type}
                        </button>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
    </div>
  )
}

export default Vans
