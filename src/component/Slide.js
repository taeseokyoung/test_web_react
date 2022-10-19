import React from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { ITMDATA } from '../Data'


const Slide = () => {
    const bestSlider = useRef(null);
    const setting = {
        arrows: false,
        autoplay: true,
        //dots: true,
        // fade: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    }
    const W = ITMDATA.filter(itm => "여성" === itm.gender);
    return (
        <div className="Slide">
            <div className="inner">
                <Slider {...setting} ref={bestSlider} className="best_slider">
                    {W.map(it => {
                        return (
                            <figure key={it.id}>
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
                                    {/* <div className="price">{it.price}</div> */}
                                    {/* <ul className='dec'>
                                        {
                                            it.dec.map((dec, idx) => {
                                                return (
                                                    <li key={idx}>{dec}</li>
                                                )
                                            })
                                        }
                                    </ul> */}
                                </div>
                            </figure>
                        )
                    })}
                </Slider>
                {/* <div className="slideArrows">
                    <button onClick={() => bestSlider.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                    <button onClick={() => bestSlider.current.slickNext()}><i className='xi-arrow-right'></i></button>
                </div> */}
            </div>
        </div>
    )
}

export default Slide