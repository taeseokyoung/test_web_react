import '../css/Product.scss'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Itm = ({ NAVDATA, FILTER, ITMDATA }) => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        count(5)
    }, [])

    return (
        <section className='Itm'>
            {
                ITMDATA.map(it => {
                    return (
                        <div className='inner' key={it.id}>
                            <div className='img left'>
                                <div className='white'>
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/s1-01-w" + setCount(count + 1) + ".jpg"} alt="" />
                                    </figure>
                                </div>
                                <div className='black'>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section >
    )
}

export default Itm