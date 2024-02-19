import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header>
        <nav>
            <div className="logo"><img src="" alt="" /></div>
            <ul>
                <li>
                    <a href="/home">Asosiy</a>
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