let initialState = {
    id:'',
    password:'',
    authenticate:false
}

function authenticateReducer(state=initialState,action){
    let {type,payload}=action
    switch(type){
        case "LOGIN_SUCCESS":
            console.log("payload.id",payload.id);
            console.log("payload.password",payload.password);
            return{...state,id:payload.id,password:payload.password,authenticate:true}
        case "LOGOUT":
            console.log("payload.authenticate",payload.authenticate);
            return{...state,id:null,password:null,authenticate:payload.authenticate}
        default:
            return{...state};     
    }

}

export default authenticateReducer;