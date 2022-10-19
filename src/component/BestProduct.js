import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const BestProduct = ({ ITMDATA, NAVDATA }) => {
    const bestSlider = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        // fade: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    }
    return (
        <section className="BestProduct csc">
            <h2>룰루레몬 베스트셀러</h2>
            <div className="title">
                <ul>
                    {
                        NAVDATA[0].mainsub.map(it => {
                            return (
                                <li key={it.sid}>
                                    {it.stitle}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="tabslide">
                <div className="inner">
                    <Slider {...setting} ref={bestSlider} className="best_slider">
                        {ITMDATA.map(it => {
                            return (
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/s" + it.id + ".jpg"} alt="" />

                                    <div className="box">
                                        <ul className="color">
                                            {
                                                it.color.map((colorchip, idx) => {
                                                    return (
                                                        <li key={idx} style={{ background: `${colorchip}` }}></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <strong className='product'>{it.product}</strong>
                                        <div className="price">{it.price}</div>
                                        <ul className='dec'>
                                            {
                                                it.dec.map((dec, idx) => {
                                                    return (
                                                        <li key={idx}>{dec}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </figure>
                            )
                        })}
                    </Slider>
                    <div className="slideArrows">
                        <button onClick={() => bestSlider.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                        <button onClick={() => bestSlider.current.slickNext()}><i className='xi-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BestProduct;