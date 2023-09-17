import { useOutletContext } from "react-router-dom"

function PhotosVanId() {

  const {currentVan} = useOutletContext()

  return (
    <div className="px-2 py-5">
      <img className="w-[20%] rounded-md" src={currentVan.imageUrl} /> 
    </div>
  )
}

export default PhotosVanId
