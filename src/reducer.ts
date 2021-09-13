export interface reducerInterface {
    todos: string []
}
const initialState ={
    todos: []
}
type addAction = {
    type: 'ADD_TODO',
    payload: string
}

export const reducer = (state : reducerInterface = initialState, action : addAction) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                state, todos: [...state.todos, action.payload]
            }
        }
        default :
            return state
    }
}
