import logo from '../logo.svg';
import '../header/Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Router, Route, Routes, NavLink } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';



function Header() {

    function ScreenChange() {
        window.location = `/`
      }


    return (
        <div>
            <header className="App-header">



                    <div onClick={() => ScreenChange()} className='div1' >
                     <img src={logo} className="App-logo" alt="logo" /> 
                    <h4>ЕВРОПЛАСТ</h4>
                </div> 

                <ul className='ul1'>
                    <li>Санкт-Петербург</li>
                    <li>Дальневосточный пр. 13/3</li>
                </ul>

                <div className='div3'>
                    <ul className='ul2'>
                        <li>Отдел родаж:</li>
                        <li>Склад: </li>
                    </ul>
                    <ul className='ul3'>
                        <li>Пн-Пт с 9:00 до 17:00</li>
                        <li>Пн-Пт с 9:00 до 16:30</li>
                    </ul>


                </div>
                <div className='div3'>

                    <ul className='ul2'>
                        <li>8(812)426-37-66</li>

                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Обратная связ
                        </a>
                    </ul>
                </div>

                <AiOutlineSearch size={35} className='searchIcon' />




                {/*     <div>
                    <p className='header-texts'>Sankt-Peterburg</p>
                    <p className='header-texts'>Dalnewostocniy pr. 13/3</p>
                </div>


                <div>
                    <div>
                        <div className='div1'>
                            <p className='header-texts'>Otdel Prodaj: </p>
                            <p className='header-texts'>Pn-Pt c 9:00 do 17:00</p>
                        </div>
                        <div className='div1'>
                            <p className='header-texts'>Sklad:  </p>
                            <p className='header-texts'>Pn-Pt c 9:00 do 17:00</p>
                        </div>
                    </div>

                    <div>

                    </div>

                </div> */}



            </header>
        </div>
    )
}

export default Header;