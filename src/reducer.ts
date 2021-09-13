interface TodoState {
    todos: string[];
}

const initialState = {
    todos: []
}
type Action = {
    type: "Add TODO",
    payload: string
}

export const reducer = (state: TodoState = initialState, action : Action) => {
    switch (action.type)

}