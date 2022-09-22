import { useEffect, useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const BANNER = [
    { id: 1, dec: "추석 연휴 게스트 에듀케이션 센터 (GEC) 휴무 안내 : 9/8 (목) 13:00 ~ 9/12 (월)", link: "/", },
    { id: 2, dec: "CJ 대한통운 및 홍콩 물류센터 휴무로 인해 배송이 2-3일 지연되는 점 양해 부탁드립니다.", link: "/", },
    { id: 3, dec: "룰루레몬 공식 온라인 스토어의 모든 제품은 룰루레몬 코리아가 직접 취급하는 정품입니다.", link: "/", },
]


const TopBanner = () => {

    const setting = {
        vertical: true,
        arrows: false,
        //dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // fade: true,
    }

    return (
        <div className="TopBanner">
            <div className="inner">
                <div className="banner">
                    <div className="banner_slider">
                        <Slider {...setting}>
                            {
                                BANNER.map(slide => {
                                    return (
                                        <li key={slide.id}>{slide.dec}</li>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <ul className="service">
                    <li><a href="#!">배송 조회</a></li>
                    <li><a href="#!">뉴스레터 구독</a></li>
                    <li><a href="#!">스토어 찾기</a></li>
                    <li class="language">
                        <strong> <i class="xi-globus"></i> KOR <i class="xi-angle-down arrow"></i></strong>
                        <ul class="lang_box">
                            <li><a href="#!">KOR</a></li>
                            <li><a href="#!">ENG</a></li>
                            <li><a href="#!">CHN</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default TopBanner;