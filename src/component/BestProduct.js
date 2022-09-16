// import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const TAB = [
    { id: 1, tit: "컬렉션" },
    { id: 2, tit: "액티비티" },
    { id: 3, tit: "여성" },
    { id: 4, tit: "남성" },
    { id: 5, tit: "액세서리" },
]

const BSLIDE = [
    { id: 1, product: "Nulux 하프집 롱슬리브 셔츠", price: "138,000원", color: ["#222222", "#eaeaec"], link: "/" },
    { id: 2, product: "코트 라이벌 하이라이즈 스커트 15", price: "65,000원 - 93,000원", color: ["#222222", "#eaeaec", "#d6d6e5", "#f8e8e6", "#00223f", "#a6005f", "#cbe89a"], link: "/", },
    { id: 3, product: "퀵 드라잉 숏슬리브 폴로 셔츠", price: "65,000원 - 93,000원", color: ["#222222", "#eaeaec", "#d6d6e5", "#cbe89a"], link: "/", },
    { id: 4, product: "플리티드 라인드 하이라이즈 테니스 스커트", price: "65,000원 - 93,000원", color: ["#222222", "#eaeaec", "#a4999a", "#444144", "#d8d2b2", "#e78d85", "#dbb1ad", "#e1b3b9", "#acacac", "#bbdecd"], link: "/", },
    { id: 5, product: "인비고레이트 트레이닝 탱크탑", price: "93,000원", color: ["#222222", "#eaeaec"], link: "/", },
    { id: 6, product: "패스트 앤 프리 하이라이즈 쇼츠 6", price: "93,000원", color: ["#222222", "#eaeaec"], link: "/", },
    { id: 7, product: "모달 실크 요가 탱크탑", price: "62,000원 - 78,000원", color: ["#222222", "#eaeaec"], link: "/", },
    { id: 8, product: "라이크 어 클라우드 브라", price: "55,000원 - 93,000원", color: ["#222222", "#eaeaec"], link: "/", },
]

const BestProduct = () => {
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
                    <Slider {...setting} className="best_slider">
                        {BSLIDE.map(bslide => {
                            return (
                                <figure>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/s1-0" + bslide.id + ".jpg"} alt="" />

                                    <div className="box">
                                        <ul className="color">
                                            {

                                            }
                                        </ul>
                                        <strong className='product'>{bslide.product}</strong>
                                        <div className="price">{bslide.price}</div>
                                    </div>
                                </figure>
                            )
                        })}
                    </Slider>
                    {/* <div className="slideArrows">
                        <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                        <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default BestProduct;