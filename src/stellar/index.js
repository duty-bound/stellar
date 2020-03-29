import React, { useRef, useState, useEffect } from 'react'
import { drawStellar } from './draw-stellar'


export const Stellar = () => {

    const [ canvasDimensions, setCanvasDimensions] = useState({ 
        width: window.innerWidth,
        height: window.innerHeight,
    })
    const ref = useRef()
    
    const handleResize = () => {
        setCanvasDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }
    
    useEffect(() => {
        addEventListener('resize', handleResize, false)
    }, [])

    useEffect(() => {
        let canvas = ref.current

        drawStellar(canvas, canvasDimensions)
    }, [canvasDimensions])

    return (
            <canvas
                ref={ref} 
                style={{ width: '100wh', height:'100vh'}}             
            />
    )
}
