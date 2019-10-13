export default (state={todos:[],text:''},action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:state.todos.concat(action.text)
            }
            break;
        case 'INPUT_CHANGE':
            return{
                ...state,
                text:action.text
            }
            break;
        case 'DELETE_TODO':
            return{
                ...state,
                todos:state.todos.splice(0, 2)
            }
            break;
        case 'EDIT_TODO':
               // state.todos.splice(2,0,action.text);
            return{
                ...state,
                todos:state.todos.concat(state.todos.splice(2,0,action.text))
            }
            break;
        default:
            return{
                ...state,
            }
    }

    return state;
}