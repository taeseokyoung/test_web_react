import { Link, NavLink } from 'react-router-dom'

const NavData = [
    {
        navid: 1, title: "신제품", alink: "/new",
        submenu: [
            // { sid: 1, stitle: "컬렉션", slink: "#!" },
            // { sid: 2, stitle: "액티비티", slink: "#!" },
            // { sid: 3, stitle: "상의", slink: "#!" },
            // { sid: 4, stitle: "하의", slink: "#!" },
        ]
    },
    {
        navid: 2, title: "여성", alink: "#!",
        submenu: [
            { sid: 1, stitle: "컬렉션", slink: "#!" },
            { sid: 2, stitle: "액티비티", slink: "#!" },
            { sid: 3, stitle: "상의", slink: "#!" },
            { sid: 4, stitle: "하의", slink: "#!" },

        ]
    },
    {
        navid: 3, title: "남성", alink: "#!",
        submenu: [
            { sid: 1, stitle: "컬렉션", slink: "#!" },
            { sid: 2, stitle: "액티비티", slink: "#!" },
            { sid: 3, stitle: "상의", slink: "#!" },
            { sid: 4, stitle: "하의", slink: "#!" },

        ]
    },
    {
        navid: 4, title: "액세서리", alink: "#!",
        submenu: [
            { sid: 1, stitle: "가방", slink: "#!" },
            { sid: 2, stitle: "요가소도구", slink: "#!" },
            { sid: 3, stitle: "요가 매트", slink: "#!" },
            { sid: 4, stitle: "장갑", slink: "#!" },
            { sid: 5, stitle: "헤어 액세서리", slink: "#!" },
            { sid: 6, stitle: "모자", slink: "#!" },
            { sid: 7, stitle: "양말", slink: "#!" },

        ]
    },
    {
        navid: 5, title: "커뮤니티", alink: "#!",
        submenu: [
            { sid: 1, stitle: "룰루레몬", slink: "#!" },
            { sid: 2, stitle: "앰버서더", slink: "#!" },
            { sid: 3, stitle: "스웻라이프", slink: "#!" },
        ]
    }
]

const Nav = () => {
    return (
        <nav className="Gnb">
            <ul className="mNav">
                {
                    NavData.map(
                        (el, idx) => (<li key={el.navid}>
                            <NavLink to={el.alink}>
                                {el.title}
                                <ul className="sNav">
                                    {
                                        el.submenu.map(
                                            smenu => (<li key={el.sid}><a href={smenu.slink}>{smenu.stitle}</a></li>)
                                        )
                                    }
                                </ul>
                            </NavLink>
                        </li>)
                    )
                }

            </ul>
        </nav >
    )
}

export default Nav;