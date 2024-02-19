import  {Link} from 'react-router-dom'
import {data} from '../Data/Blog'

function Blogs() {

  return (
      <>
          <div className="container mx-auto my-4">
              <h1 className={'text-4xl font-bold text-gray-500 text-center p-10'}>Blogs</h1>
              <div className="grid grid-cols-3 gap-4">
                  {data.map((item, index) => (
                      <Link to={`/news/${index}`} key={index}>
                          <div className="bg-gray-200 p-4">
                              <img src={item.img} className={'w-full h-48'} alt={item.title}/>
                              <h1 className={'text-2xl font-bold text-gray-500'}>{item.title}</h1>
                              <p className={'text-gray-500'}>{item.description}</p>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>


      </>
  )
}

export default Blogs