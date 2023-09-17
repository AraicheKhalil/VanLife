import {  useOutletContext } from "react-router-dom"


function PricingVanId() {

  const {currentVan} = useOutletContext()

  return (
    <div className="px-2 py-5">
        <div className="text-gray-900 text-2xl not-italic font-medium leading-5">${currentVan.price}<span className="text-gray-700 text-base not-italic font-medium leading-5">/day</span></div>
    </div>
  )
}

export default PricingVanId
