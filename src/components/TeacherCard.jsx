import React from 'react';
import rasm from '../assets/teacher-photo.png'
function TeacherCard({  fullname, toifa, tajriba, fan }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-gray-300 p-4 border-2 rounded-2xl " >
            <img className="w-full h-64 object-cover" src={rasm} alt={fullname} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{fullname}</div>
                <p className="text-gray-700 text-base mb-2">Toifasi: {toifa}</p>
                <p className="text-gray-700 text-base mb-2">Tajribasi: {tajriba}</p>
                <p className='text-gray-700 text-base mb-2'>
                    Ta`lim beruvchi fani: {fan}
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Batafsil
                </button>
            </div>
        </div>
    );
}

export default TeacherCard;
