import React from 'react';
import {useSelector} from "react-redux";

const Menu = () => {

    const {menu} = useSelector(state => state)
    return (
        <ul className={menu ? 'activeMenu' : "hiddenMenu"}>
            <li>Main Page</li>
            <li>About Page</li>
            <li>Contact Page</li>
        </ul>
    );
};

export default Menu;