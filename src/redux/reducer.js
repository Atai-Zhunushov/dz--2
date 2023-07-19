
const initialState = {
    menu: false,
    value: '',
    users: [],
    count: 0
}
export default function reducer (state = initialState, action) {

    if (action.type === 'CHANGE_TITLE') {
        return {...state , title: 'hello geeks'}
    }
    else if (action.type === 'HANDLE_MENU') {
        return {...state , menu: !state.menu}
    }
    else if (action.type === "VALUE") {
        return {...state , value: action.payload}
    }
    else if (action.type === 'ADD_USER') {
        if (action.payload.trim() === '') {
            return {...state , value: ''}
        } else  {
        return {...state , users: [...state.users, action.payload] , value: ''}
        }
    }
    else if (action.type === 'DELETE_USER') {
        return {...state , users: [] , value: ''}
    }
    else if (action.type === 'MATH_PLUS') {
        return {...state , count: action.payload}
    }
    else if (action.type === 'MATH_MINUS') {
        return {...state , count: action.payload}
    }
    else if (action.type === 'MATH_DIVIDE') {
        return {...state , count: action.payload}
    }
    else if (action.type === 'MATH_MULTIPLICATION') {
        return {...state , count: action.payload}
    }

    return state
}

