import React from 'react'
import { Link } from 'react-router-dom';
import Slide from '../component/Slide';
import { useState, useEffect } from 'react';


const Man = ({ NAVDATA, ITMDATA }) => {

    const M = ITMDATA.filter(itm => "남성" === itm.gender);

    const [sortList, onSortList] = useState('M');
    useEffect(() => {
        onSortList('M');
    }, []);

    const top = M.filter(itm => "상의" === itm.filter[0]);
    const bottom = M.filter(itm => "하의" === itm.filter[0]);


    return (
        <section className='SubPage'>
            <div className="inner">
                <div className="subNav">
                    <h2>남성</h2>
                    <ul>
                        <li onClick={() => onSortList('top')}>상의</li>
                        <li onClick={() => onSortList('bottom')}>하의</li>
                        <li>수영복</li>
                        <li>언더웨어</li>
                    </ul>
                </div>
                <div className='subMain'>
                    <figure className='man01'></figure>
                    <figure className='man02'></figure>
                    <figure className='man03'></figure>
                </div>
                <div className="banner">
                    <p>놀라울정도로 포근하고 부드러운 Utilitech™ 소재의 팬츠는 운동과 일상의 경계를 완전히 허물어 <br />언제 어디서든 편안함과 안정감을 느끼실 수 있습니다.</p>
                    <div className="btn">
                        <button className='sbtn2'>팬츠 구경하기</button>
                        <button className='sbtn2'>베스트 구경하기</button>
                    </div>
                </div>
                {/* <Slide /> */}
                <div className='subList'>
                    <h3>제품 보기</h3>
                    <div className='grid'>
                        {
                            sortList === 'M' ? M.map(it => {
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
                                                <div className="price"><span>{it.price.toLocaleString()}</span> 원</div>
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
                            }) : sortList === 'top' ? top.map(it => {
                                return (
                                    <Link to={'/Itms/' + it.id} key={it.id}>
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
                                                <div className="price"><span>{it.price.toLocaleString()}</span> 원</div>
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
                            }) : bottom.map(it => {
                                return (
                                    <Link to={'/Itms/' + it.id} key={it.id}>
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
                                                <div className="price"><span>{it.price.toLocaleString()}</span> 원</div>
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

export default Man;      