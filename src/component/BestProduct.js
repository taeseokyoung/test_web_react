import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    const W = ITMDATA.filter(itm => "여성" === itm.gender);
    const M = ITMDATA.filter(itm => "남성" === itm.gender);

    const [cate, setCate] = useState('W');

    return (

        <section section className="BestProduct csc" >
            <h2>룰루레몬 베스트셀러</h2>
            <div className="title">
                <ul>
                    <li onClick={() => setCate('W')}>여성</li>
                    <li onClick={() => setCate('M')}>남성</li>
                </ul>
            </div>
            <div className="tabslide">
                <div className="inner">
                    {cate === 'W' ?
                        <Slider {...setting} ref={bestSlider} className="best_slider">
                            {W.map(it => {
                                return (
                                    <figure key={it.id}>
                                        <Link to={'/Itms/' + it.id}>
                                            <img src={process.env.PUBLIC_URL + "/assets/images/s" + it.id + ".jpg"} alt="" />
                                        </Link>
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
                        : <Slider {...setting} ref={bestSlider} className="best_slider">
                            {M.map(it => {
                                return (
                                    <figure key={it.id}>
                                        <Link to={'/Itms/' + it.id}>
                                            <img src={process.env.PUBLIC_URL + "/assets/images/s" + it.id + ".jpg"} alt="" />
                                        </Link>
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
                    }

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