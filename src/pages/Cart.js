import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi";


const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(cart.filter((itm, idx, arry) => idx === arry.findIndex(it => it.id === itm.id)))
    }, []);


    return (
        <section className='Cart'>
            <div className="inner">
                <h2>장바구니</h2>
                <ul className='list'>
                    <li>total product : {cart.length}</li>
                    <li className='line'>line</li>
                    <li>
                        <Link to='/'><HiOutlineHome /></Link>
                    </li>
                </ul>
                <table className='inner'>
                    <tbody>
                        {
                            cart.map((it, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td className="box" style={{ width: '10rem' }}>
                                            <Link to={'/Itms/' + it.id}><img src={it.src} alt="" /></Link>
                                        </td>
                                        <td className='name' style={{ width: '30rem' }}>
                                            <Link to={'/Itms/' + it.id}>{it.name} </Link>
                                        </td>
                                        <td className='des'>
                                            <Link to={'/Itms/' + it.id}>{it.des.substring(0, 200)} ...</Link></td>
                                        <td className='price' style={{ width: '15rem' }}><span>{it.price.toLocaleString()}</span> 원</td>
                                    </tr>
                                )

                            })
                        }
                        <tr>

                            <td colSpan={3}>total :  </td>
                            <td className='price'>
                                <span>
                                    {
                                        cart.reduce((pr, cur) => {
                                            return pr + cur.price
                                        }, 0)
                                    }
                                </span> 원
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Cart;