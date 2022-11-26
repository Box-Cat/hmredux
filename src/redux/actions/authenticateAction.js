const login = (id,password,authenticate) => {
    return (dispatch, getState)=>{
        dispatch({type:"LOGIN_SUCCESS",payload:{id,password}})
    };
}

const logout = (authenticate) => {
    return (dispatch,getState)=>{
            dispatch({type:"LOGOUT",payload:{authenticate}});
    };
}

export const authenticateAciton = {login,logout};
