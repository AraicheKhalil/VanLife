import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function HostVans() {

    const [vans,setVans] =useState(null);

    useEffect(() => {
        fetch(`/api/host/vans`).then(
            data => data.json()
        ).then(
            data => setVans(data.vans)
        )
    },[])

    const van = vans?.map(van => {
        return (
            <Link to={`${van.id}`} key={van.id}>
                <div className="flex items-center bg-white rounded-md p-2 gap-x-5">
                    <img className="w-[20%] rounded-md" src={van.imageUrl} />
                    <div>
                        <h3 className="text-gray-900 text-xl not-italic font-semibold leading-8">{van.name}</h3>
                        <div className="text-gray-700 text-base not-italic font-medium leading-8">${van.price}/day</div>
                    </div>
                </div>
            </Link>
        )
    })

  return (
    <div className="vand-types ">
        <div className="px-7 py-4 bg-orange-100">
            <h1 className="text-gray-900 text-3xl not-italic font-bold leading-8">Your listed vans</h1>
            <div className="theVans flex flex-col gap-5 py-6">
                {vans ?
                 van 
                 : <h1 className="text-2xl text-center my-12 font-semibold">Loading...</h1> }
            </div>
        </div>
    </div>
  )
}

export default HostVans
