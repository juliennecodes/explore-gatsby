import React from "react";
import {Link} from "gatsby";

export default function Header(){
    return(
        <header>
            <nav className="navigation">
                <ul className="navigation-links"> 
                    <li className="navigation-link">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="navigation-link">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}