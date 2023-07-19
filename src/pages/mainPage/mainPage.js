import React from 'react';
import {useSelector , useDispatch} from "react-redux";


const MainPage = () => {
    const dispatch = useDispatch()
    const title = useSelector(state => state.title)
     const changeTitle = () => {
        dispatch({
            type:'CHANGE_TITLE'
        })
     }
    return (
        <div>
            <h1>{title}</h1>
            <button onChange={changeTitle}>change title</button>
        </div>
    );
};

export default MainPage;