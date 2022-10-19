// import React from 'react'
// import { Link } from 'react-router-dom';

// const Sub = ({ NAVDATA, ITMDATA }) => {
//     return (
//         <section className='SubPage'>
//             <div className="inner">
//                 <figure className='subMain'></figure>
//                 <div className='pdList'>
//                     {
//                         NAVDATA.map(it => {
//                             return (
//                                 <Link to={'/List/' + it.title.slice(1, 3)}>
//                                     <div className='pImage'>
//                                         <img src={process.env.PUBLIC_URL + "/assets/images/s" + it.id + ".jpg"} alt="" />

//                                         <div className="box">
//                                             <ul className="color">
//                                                 {
//                                                     it.color.map((colorchip, idx) => {
//                                                         return (
//                                                             <li key={idx} style={{ background: `${colorchip}` }}></li>
//                                                         )
//                                                     })
//                                                 }
//                                             </ul>
//                                             <strong className='product'>{it.product}</strong>
//                                             <div className="price">{it.price}</div>
//                                             <ul className='dec'>
//                                                 {
//                                                     it.dec.map((it, idx) => {
//                                                         return (
//                                                             <li key={idx}>{it}</li>
//                                                         )
//                                                     })
//                                                 }
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </section >
//     )
// }

// export default Sub;