import React, { useState } from 'react'
import GData from '../Data/Gallery'
import GalleryCard from '../components/GalleryCard'
function Gallery() {
  const [data,setData]=useState(GData) 
  const [category,setCategory]=useState("all")
  const filterImages = (category) => {
  
    if (category == 'all') {
        setData(GData);
    } else {
        const filteredImages = GData.filter((image) => image.category == category);
        setData(filteredImages);
    }
    setCategory(category);

  };
  return (
    <div className='Gallery container mx-auto'>
        <h2 className='text-center text-6xl text-underline'>Gallery</h2>
        <div className="btns">
            <button onClick={()=>filterImages("all")} className='btn py-2 px-8 rounded-xl border-2 mx-1 border-blue-400'>All</button>
            <button onClick={()=>filterImages("class")} className='btn py-2 px-8 rounded-xl border-2 mx-1 border-blue-400'>To`garaklar</button>
            <button onClick={()=>filterImages("sport")} className='btn py-2 px-8 rounded-xl border-2 mx-1 border-blue-400'>Sport</button>
            <button onClick={()=>filterImages("travel")} className='btn py-2 px-8 rounded-xl border-2 mx-1 border-blue-400'>Sayohat</button>
        </div>
        <div className="flex flex-wrap  gap-10 my-5">
            {
                data.map((item)=>{
                    return(
                        <GalleryCard image={item.image} key={item.id} />
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default Gallery