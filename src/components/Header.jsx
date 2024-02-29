import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-blue-500 h-24 flex'>
        <nav className='container mx-auto flex justify-between items-center '>
            <div className="logo"><img src="" alt="maktab-logo" className='h-8 w-auto' /></div>
            <ul className='flex gap-3 text-xl text-white'>
                <li>
                    <Link to="/home">Asosiy</Link>
                </li>
                <li>
                    <Link to="/staff">Jamoa</Link>
                </li>
                <li>
                    <Link to="/blogs">Yangiliklar</Link>
                </li>
                <li>
                    <Link to="/gallery">Maktab hayoti</Link>
                </li>
                <li>
                    <Link to="/about">Maktab hayoti</Link>
                </li>
                <li>
                    <Link to="/contact">Boglanish</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header