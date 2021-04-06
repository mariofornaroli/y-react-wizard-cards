import React from 'react'
import './cards.css'
import { Card } from './card'

const isCurrentIndex = (index, currentIndex) => {
    return (index === currentIndex);
}

export const Cards = (props) => {

    return (
        <div className="cards-container">
            {
                props.slides && props.slides.map((slide, index) => {

                    const activeClass = (index === props.currentIndex) ? ' active' : '';
                    const isGoToLeftClass = (index < props.currentIndex) ? ' go-to-left' : '';
                    const isGoToRightClass = (index > props.currentIndex) ? ' go-to-right' : '';
                    return (
                        <div className={'card' + activeClass + isGoToLeftClass + isGoToRightClass}
                            key={slide.src}>
                            <Card
                                {...slide}
                                title={slide.title}
                                description={slide.description} />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
