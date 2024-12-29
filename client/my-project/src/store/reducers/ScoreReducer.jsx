const initialValue ={
    score: 0
};
const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "add":
            return {...state,
                score: state.score+action.payload
            }
        case "less":
            return {...state,
                score: state.score-action.payload
            }
        case "restart":
            return {...state,
                score: 0
            }   
    }
}

export default reducer