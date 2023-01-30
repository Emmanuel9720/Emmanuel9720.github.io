import React from "react";
import SearchBar from "./SearchBar.jsx";
import style from "./Styles.module.css";
import { Link } from "react-router-dom";
import About from "./About.jsx";

function Nav(props) {
    return (
    
        <nav className={style.navBar}>
            <li>
                    <a target="_blank" href="https://github.com/Emmanuel9720">
                        <img
                            className={style.githubLogo}
                            src="https://pngimg.com/uploads/github/github_PNG58.png"
                            alt="github logo"
                        />
                    </a>
                </li>
            <div className={style.navBarLogo}></div>
            <SearchBar onSearch={props.onSearch} />
            <ul className={style.navMenu}>
                <Link className={style.navItem} to="/">
                    Home
                </Link>
                <Link className={style.navItem} to="/weatherSection">
                    Weather Section
                </Link>
                <Link className={style.navItem} to="/about">
                    About
                </Link>
                
            </ul>
        </nav>
    );
}

export default Nav;