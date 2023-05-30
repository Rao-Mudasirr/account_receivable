import React from 'react'
import './animated-btn.scss';
export const AnimatedBtn = ({openInnerSidbar,setOpenInnerSidbar}) => {
    return (
        <>
            <div class='wrapper'>
                <div class={`icon nav-icon-1 ${openInnerSidbar ? 'open' : ''}`} onClick={()=> setOpenInnerSidbar(!openInnerSidbar)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}
