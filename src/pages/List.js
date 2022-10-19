import { Link } from 'react-router-dom';

const List = ({ FILTER, ITMDATA, NAVDATA }) => {

    return (
        <section className='NewProducts'>
            <div className='inner'>
                <div className='left'>
                    <div className='NPtitle'>
                        <h3>카테고리</h3>
                    </div>
                    <ul className='title'>
                        {
                            FILTER.map(it => {
                                return (
                                    <li key={it.id}>{it.title}
                                        <i className='xi-angle-down-min'></i>
                                        <ul className='stitle'>
                                            {
                                                it.content.map(it => {
                                                    return (
                                                        <li key={it.id}>
                                                            <input type="checkbox" />
                                                            {it.title}
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
                    <figure className='newMain'></figure>
                    <div className='pdList'>
                        {
                            ITMDATA.map(it => {
                                return (
                                    // <Link to={`/List/ + ${NAVDATA.title}`} ></Link>
                                    <Link to={'/Itm/' + it.id} key={it.id}>
                                        <div className='pImage'>
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

export default List;