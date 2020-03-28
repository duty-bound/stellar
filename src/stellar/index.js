import React, { useRef, useEffect } from 'react'
import { drawStellar } from './draw-stellar'

export const Stellar = () => {

    const ref = useRef()
    
    useEffect(() => {
        console.log('useEffect')
        let canvas = ref.current

        drawStellar(canvas)
    })

    return (
            <canvas
            ref={ref} 
            style={{ width: '100wh', height:'100vh'}} 
        />
    )
}
