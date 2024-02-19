import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-500 py-8">
            <div className="container mx-auto flex  items-start justify-between px-4">
                
                <div className="mb-4 md:mb-0">
                    <img src="path/to/maktab-logo.png" alt="Maktab Logo" className="h-8 w-auto"/>
                    <p className="text-gray-300 text-sm">Bizning maktabimiz</p>
                </div>

                {/* Ikkinchi ustun */}
                <div className="mb-4 md:mb-0">
                    <h3 className="text-white mb-2">Asosiy</h3>
                    <ul>
                        <li><a href="#" className="text-gray-300 hover:text-white">Asosiy</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Yangiliklar</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Galery</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Staff</a></li>
                    </ul>
                </div>

                {/* Uchinchi ustun */}
                <div className="mb-4 md:mb-0">
                    <h3 className="text-white mb-2">Ijtimoiy Tarmoqlar</h3>
                    <ul>
                        <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>

                {/* To'rtinchi ustun */}
                <div>
                    <p className="text-gray-300 mb-2">Tel: +998 12 345 67 89</p>
                    <p className="text-gray-300 mb-2">Email: info@maktab.uz</p>
                    <p className="text-gray-300">Manzil: Namangan, Chust</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
