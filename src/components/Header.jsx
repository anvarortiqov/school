
function Header() {
  return (
    <header className='bg-blue-500 h-24 flex'>
        <nav className='container mx-auto flex justify-between items-center '>
            <div className="logo"><img src="" alt="maktab-logo" className='h-8 w-auto' /></div>
            <ul className='flex gap-3 text-xl text-white'>
                <li>
                    <a className='' href="/home">Asosiy</a>
                </li>
                <li>
                    <a href="/staff">Jamoa</a>
                </li>
                <li>
                    <a href="/blogs">Yangiliklar</a>
                </li>
                <li>
                    <a href="/gallery">Maktab hayoti</a>
                </li>
                <li>
                    <a href="/about">Maktab hayoti</a>
                </li>
                <li>
                    <a href="/contact">Boglanish</a>
                </li>
            </ul>
           
            
        </nav>
    </header>
  )
}

export default Header