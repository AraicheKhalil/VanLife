import { useOutletContext } from "react-router-dom"

function DetailsVanId() {

  const {currentVan} = useOutletContext()


  return (
    <div className="px-2 py-5 flex flex-col gap-3">
      <div className="text-gray-900 text-base not-italic font-bold leading-5"> Name :   
        <span className="text-gray-900 text-base not-italic font-medium leading-5"> {currentVan.name} </span>
      </div>
      <div className="text-gray-900 text-base not-italic font-bold leading-5"> Category : 
        <span className="text-gray-900 text-base not-italic font-medium leading-5"> {currentVan.type}</span>
      </div>
      <div className="text-gray-900 text-base not-italic font-bold leading-5"> Description :
        <span className="text-gray-900 text-base not-italic font-medium leading-5"> {currentVan.description}</span>
      </div>
      <div className="text-gray-900 text-base not-italic font-bold leading-5"> Visibility : 
        <span className="text-gray-900 text-base not-italic font-medium leading-5"> Public</span>
      </div>
    </div>
  )
}

export default DetailsVanId
