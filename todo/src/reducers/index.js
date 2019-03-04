import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
    todos: [{task: "Eat", completed: false}]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:  
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;    
    }   
}