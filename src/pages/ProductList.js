import React from 'react'
import styled from 'styled-components';
import { useRef, useState } from 'react';


const ProductList = ({ filter, single }) => {

    return (
        <section className='NewProducts'>
            <div className='inner'>
                <div className='left'>
                    <ul className='title'>
                        {
                            filter.map(el => {
                                return (
                                    <li key={el.id}>
                                        {el.title}
                                        <ul className='stitle'>
                                            {
                                                el.content.map(els => {
                                                    return (
                                                        <li key={els.cid}>
                                                            <input type="checkbox" />
                                                            {els.ctitle}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right">
                    {single.map(el => {
                        return (
                            <div className='pImage'>
                                <img src={process.env.PUBLIC_URL + "/assets/images/s1-0" + el.id + ".jpg"} alt="" />

                                <div className="box">
                                    <ul className="color">
                                        {
                                            el.color.map((colorchip, idx) => {
                                                return (
                                                    <li style={{ background: `${colorchip}` }}></li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <strong className='product'>{el.product}</strong>
                                    <div className="price">{el.price}</div>
                                    <ul className='dec'>
                                        {
                                            el.dec.map((els, idx) => {
                                                return (
                                                    <li>{els.dec}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default ProductList