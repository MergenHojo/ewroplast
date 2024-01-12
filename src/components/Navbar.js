import React, { useRef } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './Navbar.css'
import HarytInfo from '../infoProduksi'
import { Link } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import Detail from '../pages/Detail';
import ahliHarytlar from '../data';

function Navbar() {
  return (
    <Router>
      <div>
        <nav>
        {/* <li>
            <NavLink to="/" className='linklerMenu' activeClassName="active">ГЛАВНАЯ СТРАНИЦА</NavLink>
          </li> */}
          <li>
            <NavLink to="/produksi" className='linklerMenu' activeClassName="active">ПРОДУКЦИЯ</NavLink>
          </li>
          <li>
            <NavLink to="/okompani" className='linklerMenu' activeClassName="active">О КОМПАНИИ</NavLink>
          </li>
          <li>
            <NavLink to="/proizwedstwo" className='linklerMenu' activeClassName="active">ПРОИЗВЕДСТВО</NavLink>
          </li>
          <li>
            <NavLink to="/kakwybrat" className='linklerMenu' activeClassName="active">КАК ВЫБРАТЬ?</NavLink>
          </li>
          <li>
            <NavLink to="/nowosti" className='linklerMenu' activeClassName="active">НОВОСТИ</NavLink>
          </li>
          <li>
            <NavLink to="/kontakty" className='linklerMenu' activeClassName="active">КОНТАКТЫ</NavLink>
          </li>

          <button className='rascotButton'>+ Расчёт стоимости</button>


          {/* 
     <a >ПРОДУКСИЯ</a>
     <a >О КОМПАНИИ</a>
     <a >ПРОИЗВЕДСТВО</a>
     <a >КАК ВЫБРАТЬ?</a>
     <a >НОВОСТИ</a>
     <a >КОНТАКТЫ</a>
      <button className='rascotButton'>+ Расчёт стоимости</button> */}

        </nav>
      </div>

      <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/detail/:id" element={<Detail />} />
        <Route path="/produksi" element={<Produksi />} />
        <Route path="/okompani" element={<Kompany />} />
        <Route path="/proizwedstwo" element={<Proizwedstwo />} />
        <Route path="/kakwybrat" element={<Kakwybrat />} />
        <Route path="/nowosti" element={<Nowosti />} />
        <Route path="/kontakty" element={<Contact />} />
        <Route path="/infoProduksi" element={<HarytInfo />} />
      </Routes>
    </Router>

  );
}


const Kompany = () => (
  <>
  
  <div className='divProduksi' >
  
    <img
      src="https://evroplast-paket.spb.ru/assets/images/home/about-evroplast.png"
      alt="Home foto"
      style={{
        width: '40%',
        height: '500px',
        padding: '10px'
      }}
    />

    <div style={{ fontSize: '27px', marginLeft: "35px",marginRight:"30px" }}>
      <h3>"ЕВРОПЛАСТ" КРУПНОЕ <br></br>
        ПРОИЗВЕДСТВЕННОЕ {' '}
        {/* <a href="src/infoProduksi">
          <span style={{ color: 'blue' }}>ПРЕДПРИЯТИЕ  <GoArrowUpRight style={{ fontSize: '30px', color: "blue", alignItems: 'top' }} /></span>
        </a> */}

        <Link to="/infoProduksi">
          <span style={{ color: 'blue' }}>
            ПРЕДПРИЯТИЕ <GoArrowUpRight style={{ fontSize: '30px', color: 'blue', verticalAlign: 'top' }} />
          </span>

        </Link>


        {' '} </h3>
      <p style={{ fontSize: "large" }}>Компания «Европласт» основана в 2002 году. За это время фирма смогла стать одним из лидирующих предприятий в этой отрасли, постоянно расширяя ассортимент и производственные мощности, повышая экологические и иные стандарты до европейского уровня, закупая импортное оборудование и активно внедряя в производство пакетов новые разработки и технологии.</p>
        <div style={{borderStyle:"groove", borderLeftWidth:"0",borderRightWidth:"0",}}>
        <p style={{fontSize:"medium",fontWeight:"bold"}}>Нашими клиентами уже являются крупные аптечные сети, автодилеры, производственные компании, медицинские центрыи другие российские предприятия.</p>
        </div>
    </div>

  </div>
  </>
);

const Produksi = () => {

  const containerRef = useRef(null);
  function ScreenChange(id) {
    window.location = `./detail/${id}`
  }

  return (
  
  <div>
    


    <div>
    <h2 style={{paddingLeft:"20px"}}>Каталог продукции</h2>
        <div ref={containerRef} className="card-container1">
          {ahliHarytlar.map((ar, i) => (
            <div
              key={i}
              onClick={() => ScreenChange(ar.id)}
              className="card">
              <img
                src={ar.img}
                alt='Surat yuklenmedi'
              >

              </img>
              <p style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}> {ar.atlary}</p>


            </div>
          ))}

        </div>
      </div>

  </div>
  );
          };  


const Kakwybrat = () => (
  <div>
    <h2>kak wybrat</h2>
  </div>
);

const Proizwedstwo = () => (
  <div>
    <h2>proizwedstwo</h2>
  </div>
);

const Nowosti = () => (
  <div>
    <h2>nowosti</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);




export default Navbar;