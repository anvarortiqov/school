// eslint-disable-next-line react/prop-types
function GalleryCard({image, title}) {
  return (
    <img src={image} alt={title} name={title} className='gcard-image' />
  )
}

export default GalleryCard