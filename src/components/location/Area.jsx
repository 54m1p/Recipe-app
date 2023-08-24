
import { Link } from 'react-router-dom';
const Area =({area})=>{
    return(
        <div className='area-box'>
            <Link to={`/location/${area.strArea}`}>
                <img src="https://picsum.photos/200/200" alt="" />
                <h4>{area.strArea}</h4>
            </Link>
        </div>
    )
}

export default Area