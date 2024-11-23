import { ThreeCircles } from 'react-loader-spinner'
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.wrapper}>
            <ThreeCircles
                className={s.wrapper}
                visible={true}
                height="80"
                width="80"
                innerCircleColor="rgb(9, 57, 91)"
                middleCircleColor="rgb(134, 206, 251)"
                outerCircleColor="rgb(82, 187, 253)"
                ariaLabel="three-circles-loading"
            />
        </div>
    )
}

export default Loader