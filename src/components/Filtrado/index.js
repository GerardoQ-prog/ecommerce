import React, { useState, useEffect } from 'react'

const Filtrado = (props) => {
    const [filtro, setfiltro] = useState([
        { id: 100, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
        { id: 200, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
        { id: 300, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
        { id: 400, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
        { id: 500, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
        { id: 600, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
    ]);

    
    return (
        <div className="catalogo">
            <h2 className="titulo">{props.filtro}</h2>
            <ul className="ul-productos">
                {
                    filtro.map(item => (
                        <li key={item.id} className="productos">
                            <img src={item.img} width="200px" className="img" />
                            <div className="body">
                            <h4 className="nombre">{item.nombre}</h4>
                            <p className="valor">{item.valor}</p>
                            <button className="boton">Agregar Carrito</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Filtrado