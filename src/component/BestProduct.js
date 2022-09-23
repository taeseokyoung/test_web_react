import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const TAB = [
    { id: 1, tit: "여성", link: "/" },
    { id: 2, tit: "남성", link: "/" },
]

const BSLIDE = [
    { id: 1, product: "Nulux 하프집 롱슬리브 셔츠", price: "138,000원", color: ["#eaeaec", "#222222"], dec: ["Nulux™", "고강도", "트레이닝"], link: "/" },
    { id: 2, product: "코트 라이벌 하이라이즈 스커트 15", price: "65,000원 - 93,000원", color: ["#f8e8e6", "#eaeaec", "#d6d6e5", "#00223f", "#222222", "#a6005f", "#cbe89a"], dec: ["Swift™", "테니스"], link: "/", },
    { id: 3, product: "퀵 드라잉 숏슬리브 폴로 셔츠", price: "65,000원 - 93,000원", color: ["#cbe89a", "#eaeaec", "#d6d6e5", "#222222"], dec: ["클래식", "골프", "테니스"], link: "/", },
    { id: 4, product: "플리티드 라인드 하이라이즈 테니스 스커트", price: "65,000원 - 93,000원", color: ["#d8d2b2", "#eaeaec", "#a4999a", "#444144", "#222222", "#e78d85", "#dbb1ad", "#e1b3b9", "#acacac", "#bbdecd"], dec: ["Swift™", "테니스"], link: "/", },
    { id: 5, product: "인비고레이트 트레이닝 탱크탑", price: "93,000원", color: ["#222222", "#9a9977", "#f14655", "#d1d884"], dec: ["Everlux™", "고강도", "트레이닝"], link: "/", },
    { id: 6, product: "패스트 앤 프리 하이라이즈 쇼츠 6", price: "93,000원", color: ["#00213f", "#945443", "#403d41", "#222222", "#a3005e"], dec: ["Nulux™", "초경량", "러닝"], link: "/", },
    { id: 7, product: "모달 실크 요가 탱크탑", price: "62,000원 - 78,000원", color: ["#eaeaec", "#f59244", "#878450", "#d7d7e7"], dec: ["요가"], link: "/", },
    { id: 8, product: "라이크 어 클라우드 브라", price: "55,000원 - 93,000원", color: ["#b27db8", "#e68d84", "#e1b3b9", "#eaeaec", "#f69045", "#352b24", "#fc757a", "#9f8967", "#f7eae7", "#d5d4e4"], dec: ["요가"], link: "/", },
]

const BestProduct = () => {
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
            <div className="tabtitle">
                <ul>
                    {
                        TAB.map(tab => {
                            return (
                                <li key={tab.id}>
                                    {tab.tit}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="tabslide">
                <div className="inner">
                    <Slider {...setting} ref={bestSlider} className="best_slider">
                        {BSLIDE.map(bslide => {
                            return (
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/s1-0" + bslide.id + ".jpg"} alt="" />

                                    <div className="box">
                                        <ul className="color">
                                            {
                                                bslide.color.map((colorchip, idx) => {
                                                    return (
                                                        <li key={idx} style={{ background: `${colorchip}` }}></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <strong className='product'>{bslide.product}</strong>
                                        <div className="price">{bslide.price}</div>
                                        <ul className='dec'>
                                            {
                                                bslide.dec.map((dec, idx) => {
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