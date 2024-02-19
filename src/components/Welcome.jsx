import welcome from '../assets/images/welcome.png';


function Welcome() {
    return (
        <>
            <div className="container mx-auto px-4 flex justify-between items-center h-screen ">
                <div className="text-start space-y-5 p-20">
                    <span className="text-4xl font-bold text-gray-500">Welcome</span>
                    <h1 className="text-6xl font-bold">Best learning opportunities</h1>
                    <p className="text-lg">Our goal is to make online education work for everyone</p>
                    <p className="text-lg">Our goal is to make online education work for everyone</p>
                    <div className="space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            About us
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact us
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img
                        src={welcome}
                        alt="welcome image"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </>
    );
}

export default Welcome;