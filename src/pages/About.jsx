import Aboutus from "../components/Aboutus.jsx";

function About() {
  return (
    <>
        <div className={'bg-about bg-no-repeat bg-cover flex justify-end'}>
            <div className={'container  px-4 flex flex-col w-8/12 justify-center items-center h-screen'}>
                <h1 className={'text-6xl font-bold text-gray-500 text-center p-10'}>Take student experience to the  next level</h1>
                <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-10'}>
                    Read more
                </button>
            </div>

        </div>
        <Aboutus />
        <div>
        {/*  TItle rules and regulations , four image in a row and 2 paragraph   */}
        <div className={'flex justify-center items-center h-96  my-20'}>
            <div className={'flex flex-col justify-center items-center w-8/12'}>
                <h1 className={'text-4xl font-bold text-gray-500 underline'}>Rules and Regulations</h1>
                <div className={'flex justify-center my-4 items-center w-full'}>
                    <div className={'flex justify-center items-center w-1/4'}>
                        <img src={'../../src/assets/images/rulesicon1.png'} alt={'rules1'} className={'w-1/2 h-1/2'} />
                    </div>
                    <div className={'flex justify-center items-center w-1/4'}>
                        <img src={'../../src/assets/images/rulesicon2.png'} alt={'rules2'} className={'w-1/2 h-1/2'} />
                    </div>
                    <div className={'flex justify-center items-center w-1/4'}>
                        <img src={'../../src/assets/images/rulesicon3.png'} alt={'rules3'} className={'w-1/2 h-1/2'} />
                    </div>
                    <div className={'flex justify-center items-center w-1/4'}>
                        <img src={'../../src/assets/images/rulesicon4.png'} alt={'rules4'} className={'w-1/2 h-1/2'} />
                    </div>
                </div>
                <p className={'text-gray-500 p-10'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam cupiditate debitis deleniti dolorem doloremque earum esse facere, facilis nemo nisi placeat praesentium recusandae sapiente sit tempore tenetur unde. Adipisci cumque, dolor! Cupiditate deleniti, ex expedita facere, inventore ipsam laboriosam modi molestias nemo non optio quod, rem veniam vitae voluptas.

                </p><p className={'text-gray-500 p-10 py-0'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam cupiditate debitis deleniti dolorem doloremque earum esse facere, facilis nemo nisi placeat praesentium recusandae sapiente sit tempore tenetur unde. Adipisci cumque, dolor! Cupiditate deleniti, ex expedita facere, inventore ipsam laboriosam modi molestias nemo non optio quod, rem veniam vitae voluptas.

                </p>


            </div>
        </div>
        </div>
    </>
  )
}

export default About