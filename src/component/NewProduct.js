import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const TAB = [
    { tid: 1, tit: "컬렉션" },
    { tid: 2, tit: "액티비티" },
    { tid: 3, tit: "여성" },
    { tid: 4, tit: "남성" },
    { tid: 5, tit: "액세서리" },
]

const NewProduct = () => {

    return (
        <section className="NewProduct csc">
            <h2>룰루레몬 베스트셀러</h2>
            <ul className='tabtitle'>
                {
                    TAB.map(tab => {
                        return (
                            <li key={tab.tid}>
                                {tab.tit}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="tabslide">
                <Slider
                    arrows={false}
                    centerMode={true}
                    centerPadding='300px'
                    slidesToShow={1}
                    afterChange={index => setSlideNum(index)}
                    ref={SLIDE}
                    className={'solution_slide'}>
                    {
                        SOLUTION.map((img, idx) => {
                            return (
                                <figure
                                    key={img.id}
                                    className={slideNum === idx ? 'on' : ''}>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/main_s0" + img.id + ".jpg"} alt="" />
                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default NewProduct;