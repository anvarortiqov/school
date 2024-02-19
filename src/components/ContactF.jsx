import React from 'react';

function ContactF() {
    return (
        <>
            <h2 className='contactf-title  text-center text-4xl my-4 text-blue-500 hover:text-blue-700'>Contact</h2>
            <div className="contf flex justify-between items-center container mx-auto m-10">
            {/* Chap tomonda forma */}
            <div className="w-1/2 p-4 ">
                <h2 className="text-2xl font-bold mb-4">Biz bilan bog'laning</h2>
                <form>
                    <div className="mb-4">
                        <input type="text" placeholder='Ismingizni kirting' id="name" name="name" className="mt-1 p-2 block w-full border-blue-300 border-1 rounded-md focus:ring-blue-500 focus:border-blue-500
                        border-2 border-blue-700"
                        />
                    </div>
                    <div className="mb-4">
                        <input type="tel" placeholder='Telefon raqamingizni kiriting' id="phone" name="phone" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500
                        border-2 border-blue-700
                        " />
                    </div>
                    <div className="mb-4">
                        <textarea id="message" name="message" rows="4" placeholder='Habar qoldiring' className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 border-2 border-blue-700"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Jo'natish</button>
                </form>
            </div>
            {/* Ong tomondagi ma'lumotlar */}
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">Manzil va ma'lumotlar</h2>
                <ul>
                    <li className="flex items-center mb-2">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        Namangan, Uzbekistan
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10a10 10 0 0 1 10-10zM12 14l-2-2m4 0l-2 2m0-4v4"></path></svg>
                        +998 12 345 67 89
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        info@example.com
                    </li>
                    <li className="flex items-center">

                    <iframe width="450" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=74-Maktab,Chust%20,Namangan+(Chust%2074%20maktab)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" loading='lazy'><a href="https://www.gps.ie/">gps systems</a></iframe>

                    </li>
                </ul>
            </div>
        </div>
        </>
     
    );
}

export default ContactF;
