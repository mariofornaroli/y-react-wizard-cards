import React from 'react'
import './badges.css'

export const Badges = (props) => {
    return (
        <ul>
            {
                props.slides && props.slides.map((slide, index) =>
                    <li
                    // Put after active control
                        className={"control" + ((index === props.currentIndex) ? ' active' : '')}
                        key={slide.src}
                    ></li>)
            }
        </ul>
    )
}
