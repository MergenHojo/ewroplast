import React from 'react'
import ahliHarytlar from '../data'
import { useParams, useState } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()

    return (
        <div>
            <div>
                {
                    ahliHarytlar.filter(dt => dt.id == id).map((dat, i) => (

                        <div style={{ display: "flex", flexDirection: "row", width: "100%", marginTop: "40px" }}>
                            <div style={{ width: "547px", width: "70%", height: "557px" }} className='suratDiv'>
                                <img
                                    src={dat.imgInfo}
                                    alt="Home foto"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        padding: '20px',
                                    }}
                                />
                            </div>
                            <div style={{ marginLeft: "50px", alignItems: "top", display: "flex", flexDirection: "column", alignItems: "top" }}>
                                <h3 key={i} style={{ fontSize: "40px", textAlign: "top", display: "flex", margin: "0" }}>{dat.atlary}</h3>

                                <div style={{ marginTop: "20px", borderColor: "#1756bd", display: "flex", height: "90px", width: "99%", borderRadius: "3px", borderWidth: "2px", alignItems: "center", borderStyle: "outset", }}>
                                    <div style={{ marginLeft: "10px", backgroundColor: "lightblue", padding: "5px", paddingRight: "5px", display: "block", clipPath: "polygon(0% 0%, 85% 0%, 95% 50%, 85% 100%, 25% 100%, 0% 100%)", }}>
                                        <h5 style={{ margin: "0", marginRight: "70px", fontSize: "30px", display: "block" }}>
                                        от 5,9 руб.
                                        </h5>
                                        <p style={{ fontSize: "15px", margin: "0" }}>
                                            Цена зависит от объёма
                                        </p>
                                    </div>
                                    <div style={{ padding: "5px", paddingRight: "5px", display: "block", }}>
                                        <button style={{ margin: "0", marginRight: "10px", padding: "10px 75px 10px 75px", cursor: "pointer", borderColor: "#ffaa58", borderRadius: "5px", backgroundColor: "#ffaa58", fontWeight: "bold", fontSize: "20px", display: "block" }}> Сделать заказ </button>
                                        <p style={{ fontSize: "15px", margin: "0", marginTop: "5px", marginLeft: "5px" }}>или 
                                            <a
                                                style={{ fontWeight: "bolder",marginLeft:"5px" }}
                                                href="https://reactjs.org"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                 Рассчитать стоимость
                                            </a>
                                        </p>
                                    </div>
                                </div>


                                <h3 style={{ fontSize: "20px", display: "flex", marginTop: "20px", width: "100%", borderWidth: "2px", borderLeftWidth: "0cap", borderRightWidth: "0cap", borderTopWidth: "0cap", borderColor: "black", textAlign: "top", borderStyle: "groove" }}>Основные параметры</h3>

                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    <div style={{ width: "300px", paddingRight: "10px" }}>
                                        <p style={{ fontWeight: "bold", }}>Ширина</p>
                                        <p style={{ fontWeight: "bold", }}>Высота</p>
                                        <p style={{ fontWeight: "bold", }}>Печать</p>
                                        <p style={{ fontWeight: "bold", }}>Материал и толщина</p>
                                        <p style={{ fontWeight: "bold", }}>Типовые размеры</p>

                                    </div>

                                    <div style={{}}>
                                        <p style={{ fontWeight: "normal" }}>от 900 до 1200 мм</p>
                                        <p style={{ fontWeight: "normal" }}>от 900 до 1500 мм</p>
                                        <p style={{ fontWeight: "normal" }}>от 1 до 4 цветов (требуется клише)</p>
                                        <p style={{ fontWeight: "normal" }}>ПНД, толщина от 14 до 30 микрон;</p>
                                        <p style={{ fontWeight: "normal" }}>700+(2х150)х1000 мм - 18 мкм, б/печ желтый  700+(2х200)х1100мм - 20 мкм, б/печ белый</p>

                                    </div>




                                </div>
                                <div style={{ display: "flex", borderRadius: "7px", alignItems: "center", backgroundColor: "#f7da97", flexDirection: "row" }}>
                                    <h1 style={{ marginLeft: "5px", marginRight: "10px" }}>!</h1>
                                    <p style={{ marginLeft: "10px", margin: "0px" }}>Минимальный заказ на типовые пакеты для шин – 300 шт. (одна упаковка). Пакеты для колес с логотипом заказчика – от 5000 шт.</p>
                                </div>

                            </div>
                        </div>
                    )
                    )
                }


                {/*  <div style={{display:"flex", flexDirection:"row",}}>
            <div style={{width:"50%"}}>
                <img
                    src="/img/6.jpg"
                    alt="Home foto"
                    style={{
                        width: '100%',
                        height: '550px',
                        padding: '10px'
                    }}
                />
            </div>
            <div style={{marginLeft:"50px",alignItems:"top",display:"flex", flexDirection:"column",alignItems:"top" }}>
            <h3 style={{fontSize:"40px", textAlign:"top", display:"flex",padding:""}}>ПАКЕТЫ "МАЙКА"</h3>
            <div>dsf</div>
            </div>
        </div> */}

            </div>
        </div>
    )
}

export default Detail
