const NavData = [
    {
        navid: 1, title: "신상품", alink: "#!",
        submenu: [
            { stitle: "컬렉션", slink: "#!" },
            { stitle: "액티비티", slink: "#!" },
            { stitle: "상의", slink: "#!" },
            { stitle: "하의", slink: "#!" },

        ]
    },
    {
        navid: 2, title: "베스트", alink: "#!",
        submenu: [
            { stitle: "컬렉션", slink: "#!" },
            { stitle: "액티비티", slink: "#!" },
            { stitle: "상의", slink: "#!" },
            { stitle: "하의", slink: "#!" },

        ]
    },
    {
        navid: 3, title: "여성", alink: "#!",
        submenu: [
            { stitle: "컬렉션", slink: "#!" },
            { stitle: "액티비티", slink: "#!" },
            { stitle: "상의", slink: "#!" },
            { stitle: "하의", slink: "#!" },

        ]
    },
    {
        navid: 4, title: "남성", alink: "#!",
        submenu: [
            { sid: 1, stitle: "컬렉션", slink: "#!" },
            { sid: 2, stitle: "액티비티", slink: "#!" },
            { sid: 3, stitle: "상의", slink: "#!" },
            { sid: 4, stitle: "하의", slink: "#!" },

        ]
    },
    {
        navid: 5, title: "액세서리", alink: "#!",
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
]

const Nav = () => {
    return (
        <nav className="Gnb">
            <ul className="mNav">
                {
                    NavData.map(
                        (navlink, idx) => (<li key={navlink.navid}>
                            <a href={navlink.alink}>{navlink.title}</a>
                            <ul className="sNav">
                                {
                                    navlink.submenu.map(
                                        smenu => (<li key={navlink.sid}><a href={smenu.slink}>{smenu.stitle}</a></li>)
                                    )
                                }
                            </ul>
                        </li>)
                    )
                }

            </ul>
        </nav>
    )
}

export default Nav;