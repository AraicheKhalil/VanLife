import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function DetailsVans() {

  const [vans,setVans] = useState(null)

  const params = useParams()
  console.log(params)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`).
    then(data => data.json()).
    then(data => setVans(data.vans))
  },[params])

  return (
    <>
      <section className="py-8 px-5">
        <Link className="underline" relative="path" to='..'>Back to all vans</Link>
        {vans ?
        <div className="details mt-8">
          <div>
            <img className="rounded-lg mb-5" src={vans.imageUrl} />
          </div>
          <button className={`${vans.type} rounded  bg-orange-200 py-1 px-2 text-gray-700 text-center text-base not-italic font-medium leading-6 mb-2`}>{vans.type}</button>
          <h3 className="text-gray-900 text-xl not-italic font-semibold leading-8 mb-1">{vans.name}</h3>
          <div className="text-gray-900 text-xl not-italic font-semibold leading-8 mb-2">${vans.price}<span className="text-gray-900  text-sm not-italic font-medium  leading-none">/day</span></div>
          <p className="text-gray-900 text-base not-italic font-medium leading-6 mb-4">{vans.description}</p>
          <button className="text-center text-sm not-italic font-bold leading-8 py-1 w-full rounded bg-orange-500">Rent this van</button>
          </div> 
            : <h1 className="text-2xl text-center my-12 font-semibold">Loading...</h1>}
      </section>
    </>
  )
}

export default DetailsVans
