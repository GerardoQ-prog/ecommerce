import React from 'react'
import './slider.scss'
import Background from './img/slide-2.jpg';
const Slider = () => {
    return (
        <div class="content_slider">
            <div class="slider" style={{backgroundImage: `url(${Background})`}}>
            </div>
        </div>
    )
}

export default Slider
