import React from 'react'
import '../pages/HomeScreen.css'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import ahliHarytlar from '../data';
import { useRef } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";



const HomeScreen = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100; // İstediğiniz ölçüde kaydırma yapabilirsiniz
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100; // İstediğiniz ölçüde kaydırma yapabilirsiniz
    }
  };



  function ScreenChange(id) {
    window.location = `./detail/${id}`
  }

  
  return (
    <div>
      <div className='yokarkyDiv'>
        <div>
          <img
            src="https://evroplast-paket.spb.ru/assets/images/components/main-banner/plastic-bags-with-logo.webp"
            alt="Surat Banner" >
          </img>
        </div>

        <div style={{ padding: "15px 90px 15px 40px" }}>
          <h2 style={{ fontSize: "40px", paddingRight: "40px" }}>Пакеты с логотипом напрямую от производителя в Санкт-Петербурге</h2>
          <p>Помогаем новым брендам быстро заявить о себе,
            а уже раскрученным — еще больше повысить узнаваемость!</p>
          <button style={{ padding: "20px 40px ", backgroundColor: "#ffaa58",borderColor:"none", fontWeight: "bold",cursor:"pointer", fontSize: "15px" }}>Узнать больше</button>
        </div>
      </div>

      <div style={{ fontSize: '27px', display: "flex", marginLeft: "15px", justifyContent: "space-between" }}>
        <h3>ОСНОВНАЯ  {' '}
          {/* <a href="src/infoProduksi">
          <span style={{ color: 'blue' }}>ПРЕДПРИЯТИЕ  <GoArrowUpRight style={{ fontSize: '30px', color: "blue", alignItems: 'top' }} /></span>
        </a> */}

          <Link to="/produksi">
            <span style={{ color: 'blue' }}>
              ПРОДУКЦИЯ <GoArrowUpRight style={{ fontSize: '30px', color: 'blue', verticalAlign: 'top' }} />
            </span>
          </Link>
          КОМПАНИИ
          {' '} </h3>
        <div style={{display:'flex', alignItems:"flex-end"}}>
          <button style={{backgroundColor:"white",border:"none",cursor:"pointer"}} onClick={scrollLeft}><FaChevronLeft style={{fontSize:"x-large"}}/>   </button>
          
          <button style={{marginLeft:"10px",backgroundColor:"white",cursor:"pointer",border:"none"}} onClick={scrollRight}><FaChevronRight style={{fontSize:"x-large"}}/></button>
        </div>

      </div>


      {/*  //!-produklar */}
      <div>
        <div ref={containerRef} className="card-container">
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
  )
}


export default HomeScreen

