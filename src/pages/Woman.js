import React from 'react'
import { Link } from 'react-router-dom';
import Slide from '../component/Slide';
import { useState, useEffect } from 'react';


const Woman = ({ NAVDATA, ITMDATA }) => {

    const W = ITMDATA.filter(itm => "여성" === itm.gender);

    const [sortList, onSortList] = useState('W');
    useEffect(() => {
        onSortList('W');
    }, [sortList]);

    const top = W.filter(itm => "상의" === itm.filter[0]);
    const bottom = W.filter(itm => "하의" === itm.filter[0]);


    return (
        <section className='SubPage'>
            <div className="inner">
                <div className="subNav">
                    <h2>여성</h2>
                    <ul>
                        <li onClick={() => onSortList('top')}>상의</li>
                        <li onClick={() => onSortList('bottom')}>하의</li>
                        <li>원피스&점프수트</li>
                        <li>수영복</li>
                        <li>언더웨어</li>
                    </ul>
                </div>
                <div className='subMain'>
                    <figure className='woman01'></figure>
                    <figure className='woman02'></figure>
                    <figure className='woman03'></figure>
                </div>
                <div className="banner">
                    <p>몸을 포근하게 감싸 안아주는 룰루레몬의 브라탑, 쇼츠와 함께라면<br />언제 어디서 어떤 스포츠와 함께하든지 편안함과 안정감을 느끼실 수 있습니다.</p>
                    <div className="btn">
                        <button className='sbtn2'>브라탑 구경하기</button>
                        <button className='sbtn2'>쇼츠 구경하기</button>
                    </div>
                </div>
                {/* <Slide /> */}
                <div className='subList'>
                    <h3>제품 보기</h3>
                    <div className='grid'>
                        {
                            sortList === 'W' ? W.map(it => {
                                return (
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
                                )
                            }) : top.map(it => {
                                return (
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
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Woman;