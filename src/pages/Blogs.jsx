
const data =[ {
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
{
    title: "Blogs",
    description: "Blogs",
    img: "../assets/images/welcome.png",
},
]

function Blogs() {

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-200 p-4">
              <img src={item.img} className={'w-full h-48'} alt={item.title} />
                <h1 className={'text-2xl font-bold text-gray-500'}>{item.title}</h1>
                <p className={'text-gray-500'}>{item.description}</p>
            </div>
            ))}
        </div>
      </div>



    </>
  )
}

export default Blogs