import Welcome from "../components/Welcome.jsx";
import Aboutus from "../components/Aboutus.jsx";
import ContactF from "../components/ContactF.jsx";
import GalleryCard from "../components/GalleryCard.jsx";
import data from "../Data/Gallery.js";

function Home() {
    const images = data.slice(0, 3); // This will select the first 3 items from the data array

    return (
        <>
            <Welcome/>
            <Aboutus/>
            <div>
                <h2 className="text-center text-6xl text-underline my-3">Gallery</h2>
                <div className=" container mx-auto  flex justify-between items-center p-4">

                    {images.map((image, index) => (
                        <GalleryCard key={index} image={image.image} title={image.title}/>
                    ))}
                </div>
            {/*    more button*/}
                <div className="flex justify-center">
                    <a href={'/gallery'} className="btn py-2 px-8 rounded-xl border-2 mx-1 my-6 hover:bg-sky-600 hover:text-white transition-all border-blue-400">More</a>
                </div>
            </div>

            <ContactF/>
        </>
    )
}

export default Home