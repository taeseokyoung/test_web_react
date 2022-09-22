import '../ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = ({ ND, FP, SP }) => {

    return (
        <section className='NewProducts'>

            <div className='inner'>
                <div className='left'>
                    <div className='NPtitle'>
                        <span>{FP[0].content.ctitle}</span>
                        <h3>{ND[0].title}</h3>
                    </div>
                    <ul className='title'>
                        {
                            FP.map(el => {
                                return (
                                    <li key={el.id}>
                                        {el.title}
                                        <a href='#!'>
                                            <i className='xi-angle-down-min'></i>
                                        </a>
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
                    <div className='pdList'>
                        {
                            SP.map(el => {
                                return (
                                    <Link to='/sub01/p01'>
                                        <div className='pImage'>
                                            <img src={process.env.PUBLIC_URL + "/assets/images/s1-0" + el.id + ".jpg"} alt="" />

                                            <div className="box">
                                                <ul className="color">
                                                    {
                                                        el.color.map((colorchip, idx) => {
                                                            return (
                                                                <li key={idx} style={{ background: `${colorchip}` }}></li>
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
                                                                <li key={idx}>{els}</li>
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

export default ProductList