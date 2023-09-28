import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async  function Loader(){
    await requireAuth()
    return getHostVans()
}


function HostVans() {

    const vans = useLoaderData()

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
                {van }
            </div>
        </div>
    </div>
  )
}

export default HostVans
