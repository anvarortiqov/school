
import maktab from '../assets/maktab.webp'
import ContactF from '../components/ContactF'
function Contact() {
  return (
    <div className="contact">
          <section className=" py-12">
                <div className="flex items-center container mx-auto">
                <div className="container-xs  mx-auto items-center justify-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sarlavha</h2>
                        <p className="text-gray-800 text-lg mb-4">Matn sizga shu joyda ta'rifi bo'lgan mavzuni yozishingiz mumkin. Bu joyda matnning uzunligi va tuzilishi sizga qarab o'zgartirilishi mumkin.</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Batafsil</button>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img src={maktab} alt="Rasm" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
            </section>
            <ContactF/>
    </div>
  
  )
}

export default Contact