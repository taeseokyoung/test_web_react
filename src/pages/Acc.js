import React from 'react'
import { Link } from 'react-router-dom';

const Acc = ({ NAVDATA, ITMDATA }) => {

    const A = ITMDATA.filter(itm => "액세서리" === itm.gender);

    return (
        <section className='SubPage'>
            <div className="inner">
                <div className="subNav">
                    <h2>액세서리</h2>
                    <ul>
                        <li>양말</li>
                        <li>장갑</li>
                        <li>가방</li>
                        <li>요가용품</li>
                        <li>헤어 액세서리</li>
                        <li>모자</li>
                    </ul>
                </div>
                <div className='subMain'>
                    <figure className='acc01'></figure>
                    <figure className='acc02'></figure>
                    <figure className='acc03'></figure>
                </div>
                <div className="banner">
                    <p>나의 스웻 라이프를 더욱 윤택하게 만들어 줄<br />룰루레몬의 다양한 액세서리를 만나보세요.</p>
                    <div className="btn">
                        <button className='sbtn2'>소도구 구경하기</button>
                        <button className='sbtn2'>모자 구경하기</button>
                    </div>
                </div>
                {/* <Slide /> */}
                <div className='subList'>
                    <h3>제품 보기</h3>
                    <div className='grid'>
                        {
                            A.map(it => {

                                return (
                                    <Link to={'/Itms/' + it.id} key={it.id} >
                                        <div key={it.id}>
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
                                                        it.dec.map((it, idx) => {
                                                            return (
                                                                <li key={idx}>{it}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Acc;