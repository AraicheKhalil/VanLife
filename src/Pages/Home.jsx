import Footer from "../components/Footer"
import Header from "../components/Header"

function VanLife() {

    return (  
        <div className="VanLife">
            <Header />
            <section className="Landing relative flex">
                <img className="Img w-full" src="./imgs/image 53.png" />
                <div className="main-title absolute self-center m-14">
                    <h1 className="title text-4xl not-italic font-extrabold text-white text-center max-w-[500px] my-4">You got the travel plans, we got the travel vans.</h1>
                    <p className="desc text-center max-w-[494.33px] text-[#fff] text-base not-italic font-medium leading-6 my-4">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <button type="button" className="my-4 focus:outline-none w-1/2 text-white bg-orange-500 font-medium  rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Find your van</button>

                </div>
            </section>     
            <Footer />

        </div>
    )
}

export default VanLife
