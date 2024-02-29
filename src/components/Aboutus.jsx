function Aboutus() {
    return (
        <div className="container mx-auto">
            <div className="flex  items-center justify-center h-screen bg-gradient-to-b from-white to-blue-500">
                <div className={'w-1/3'}>
                    <img src="../../src/assets/images/aboutus.png" alt="aboutus" className="w-fit h-1/2 rounded-full" />
                </div>
                <div className="flex flex-col items-center w-2/3 justify-center">
                    <h1 className="text-4xl font-bold text-blue-700 underline  ">About Us</h1>
                    <p className="text-blue-700 p-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam cupiditate debitis deleniti dolorem doloremque earum esse facere, facilis nemo nisi placeat praesentium recusandae sapiente sit tempore tenetur unde. Adipisci cumque, dolor! Cupiditate deleniti, ex expedita facere, inventore ipsam laboriosam modi molestias nemo non optio quod, rem veniam vitae voluptas.z
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-800">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;