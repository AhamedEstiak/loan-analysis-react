export default (state, action) => {
    switch(action.type) {
        case 'SET_LOAN_INFO':
            return {
                ...state,
                ...state.loanInfo,
                loanInfo: action.payload
            }
        default:
            return state;
    }
}
