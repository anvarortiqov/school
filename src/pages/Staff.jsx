import React from 'react'
import TeacherCard from '../components/TeacherCard'
import Pagination from '../components/Pagination'
import Teachers from '../Data/Teachers'
function Staff() {
  return (
    <div className='staff '>
        <div className="staff_head flex items-center justify-center ">
            <h2 className='text-white text-3xl hover:text-blue-500 '>Take staff experience to the next level</h2>
        </div>

        <h3 className='text-center text-blue-500 text-4xl   mt-6'>Jamoamiz</h3>
        <div className="flex flex-wrap gap-2 container mx-auto my-5">
            {
                Teachers.map((item)=>{
                    return(
                        <TeacherCard key={item.id} fullname={item.fullname} toifa={item.toifa} tajriba={item.tajriba} fan={item.fan}  />
                    )
                })
            }            
        
        </div>
        <div className="pag flex justify-center my-5">
           <Pagination currentPage={1} totalEmployees={100}  />
        </div>
       
       <p className='container mx-auto text-2xl my-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem recusandae eum dolor nesciunt ducimus dignissimos similique, esse sunt, quo aperiam! Quod, eos corrupti quae cupiditate fugiat ipsum aspernatur optio?
       </p>

    </div>
  )
}

export default Staff