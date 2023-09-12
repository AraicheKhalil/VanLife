import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading"


function VanDetails() {

    const params = useParams()
    console.log(params.id)

    const [info,setInfo] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setInfo(data.vans))
    }, [params.id])

    console.log(info)

  return (
    <div className="">
        {
            info ? (
                <section className="p-8 bg-[#FFF7ED]">
                <div className="w-[500px] rounded-lg m-auto p-8 pt-0">
                    <div className="underline text-gray-900 not-italic font-medium leading-5 my-4 text-lg">Back to all vans</div>
                    <div className="bg-white">
                        <div className="max-w-[500px]">
                            <img 
                                className="rounded-lg"
                                src={info.imageUrl} />
                        </div>
                        <div className="card-details px-5 py-2">
                            <button className="mr-4 mb-3 mt-6 bg-orange-500 text-white px-3 rounded-md p-2 text-center text-base not-italic font-medium leading-6 w-fit">
                                {info.type}
                            </button>
                            <div className="Name text-gray-900 text-3xl not-italic font-bold leading-8 my-2">{info.name}</div>
                            <div className="my-3 price flex items-center">
                                <div className="num text-gray-900 text-2xl not-italic font-bold">${info.price}</div>/day</div>
                            <div className="my-2 description text-gray-900 text-base not-italic font-medium leading-6">{info.description}</div>
                            <button className="mr-4 my-3 bg-orange-500 text-white px-3 rounded-md p-2 text-center text-base not-italic font-medium leading-6 w-full">
                            Rent this van
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            ) :
            <Loading />
        }
    </div>
  )
}

export default VanDetails
