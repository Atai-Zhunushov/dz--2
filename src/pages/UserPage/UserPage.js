import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserList from "../../components/UserList/UserList";

const UserPage = () => {
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()

    const changeInput = (e) => {
        dispatch({
            type: 'VALUE',
            payload: e.target.value,

        })
    }

    const addUsers = () => {
        dispatch({
            type:"ADD_USER",
            payload: value
        })
    }
    const deleteUsers = () => {
        dispatch({
            type:"DELETE_USER",
        })
    }
    return (
        <div>

            <input type="text" placeholder='name' value={value} onChange={changeInput}/>
            <button onClick={addUsers}>add</button>
            <button onClick={deleteUsers}>deleteAll</button>
            <UserList/>
        </div>
    );
};

export default UserPage;