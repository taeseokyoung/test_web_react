import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, title: "Show what you're made of.", des: "테니스에 최적화된 스포츠웨어", dot: "룰루레몬 테니스" },
    { id: 2, title: "룰루레몬 맨즈 스포츠웨어", des: "기능성과 스타일을 모두 원하는 당신에게", dot: "룰루레몬 맨" }
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 3000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider  {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <div className='des'>{slide.des}</div>
                                    <p className='tit'>{slide.title}</p>
                                    <a href={slide.link} target="_blank" className='cbtn'>
                                        VIEW MORE
                                    </a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? ' on' : ''} onClick={() => mainSlide.current.slickGoTo(idx)}>{dots.dot}</li>
                        )
                    })
                }
            </ul>
            <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
            </div>
        </section>

    )
}

export default MainVisual;