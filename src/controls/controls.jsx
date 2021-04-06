import React from 'react'
import './controls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const isLastStep = (currentIndex, slides) => {
    return (currentIndex === slides.length - 1);
}

const isFirstStep = (currentIndex) => {
    return (currentIndex === 0);
}

export const Controls = (props) => {

    const nextStepHandler = () => {
        if (!isLastStep(props.currentIndex, props.slides)) {
            props.setCurrentIndex(props.currentIndex + 1)
        }
    }

    return (
        <>
            {!isFirstStep(props.currentIndex) &&
                <button
                    className="btn previous-icon"
                    onClick={() => props.setCurrentIndex(props.currentIndex - 1)}
                ><FontAwesomeIcon icon={faAngleLeft} />
                </button>
            }

            {!isLastStep(props.currentIndex, props.slides) &&
                <button
                    className="btn next-icon"
                    onClick={nextStepHandler}
                ><FontAwesomeIcon icon={faAngleRight} />
                </button>
            }


            <button
                className="btn next-btn"
                onClick={nextStepHandler}
                disabled={isLastStep(props.currentIndex, props.slides)}
            > {isLastStep(props.currentIndex, props.slides) ? 'I am READY!' : 'Next'}
            </button>
        </>
    )
}
