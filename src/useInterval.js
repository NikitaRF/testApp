import {useEffect, useRef} from "react";

export const useInterval = (callback, delay, navigation) => {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    })



    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        let intervalId
        const unsubscribeIntervalFocus = navigation.addListener('focus', () => {
            intervalId = setInterval(tick, delay)
        })

        const unsubscribeIntervalBlur = navigation.addListener('blur', () => {
            clearInterval(intervalId)
        })

        return () => {
            unsubscribeIntervalBlur()
            unsubscribeIntervalFocus()
        }
    }, [delay])
}