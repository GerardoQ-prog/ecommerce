import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Filtrado from '../Filtrado'

const Filtrar = () => {
    const [filtro, setfiltro] = useState([
        {
            id: 10, nombre: "Moda Mujer", subTitulos: [
                { id: 110, uno: "Zapatillas" },
                { id: 120, dos: "Polos" },
                { id: 130, tres: "Buzos" },
                { id: 140, cuatro: "Sudaderas" }
            ],
            productos: 
            [
                { id: 1001, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 2002, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 3003, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 4004, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 5005, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 6006, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
            ]
        },
        {
            id: 20, nombre: "Moda Hombre", subTitulos: [
                { id: 210, uno: "Zapatillas" },
                { id: 220, dos: "Polos" },
                { id: 230, tres: "Buzos" },
                { id: 240, cuatro: "Sudaderas" }
            ],
            productos: 
            [
                { id: 1007, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 2008, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 3009, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 40010, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 50011, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 60012, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
            ]
        },
        {
            id: 30, nombre: "Accesorios", subTitulos: [
                { id: 310, uno: "Relojes" },
                { id: 320, dos: "Pulceras" },
                { id: 330, tres: "Ligas" },
                { id: 340, cuatro: "Guantes" }
            ],
            productos: 
            [
                { id: 10013, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 20014, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 30015, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 40016, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 50017, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
                { id: 60018, nombre: "Adidas Sport-Shakira", img: 'https://s3-alpha-sig.figma.com/img/a1f6/10c4/3790611dfc1632922ad91d3fa16db272?Expires=1593993600&Signature=EEN9bIwYh~9Q4vi0GPfMkv4DOMKVzYP23brRolHtDKHNboQXGMjDfwBVzfBHeHfLMBQ6DJWhoqQYxQdipYD9k~nkJR7qu~8v9Vi-p6R2B1Fw4FOYKnCpdRdPsf-Slb4ApXqINlB8VXLy2MK0xoi351bw82PefTq3Hzsm7BYd5Fm99goejv7KP6GTq5wZNABIEJJb7X-vB9WybEUPG69IhehNRF8JkW1BRVLKurk~LMU9zU0H-T0AOFdHiMZ4SZpdmaRprZ6zHIaEHqRfFfOND4CDHyiXWQ2tBKa4HS31WbRa-4Gx8HTzWRiGkANmDK9-hSIcGYOMSUPngurr0qV8Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', valor: "$/.25.00" },
            ]
        }
    ]);
    return (
        <div className="categorias">
            <div className="filtro">
                <h4 className="titulo">Filtrar</h4>
                <ul className="lista">
                    {
                        filtro.map(item => (
                            <div>
                            <li className="lista-li" key={item.id}>
                                <Link to={`${item.nombre}`} className="lista-titulo"><FontAwesomeIcon icon={faCircleNotch} size="lg" /><h4 className="lista-h4">{item.nombre}</h4></Link>
                                <ul>
                                    {
                                        item.subTitulos.map(item => (
                                            <li key={item.id} className="lista-lista">
                                                <Link to={`${item.uno}`} className="lista-categoria">{item.uno}</Link>
                                                <Link to={`${item.dos}`} className="lista-categoria">{item.dos}</Link>
                                                <Link to={`${item.tres}`} className="lista-categoria">{item.tres}</Link>
                                                <Link to={`${item.cuatro}`} className="lista-categoria">{item.cuatro}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <Filtrado filtro={`${filtro.nombre}`}/>
        </div>
    )
}

export default Filtrar