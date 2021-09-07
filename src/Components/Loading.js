import lottie from 'lottie-web';
import { useRef, useEffect } from 'react';
const Loading = () => {

    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/loading.json')
        })
    }, [])
    return (
        <div className="mx-auto h-96 mt-28 w-60 " ref={container}>
        </div>
    )
}

export default Loading
