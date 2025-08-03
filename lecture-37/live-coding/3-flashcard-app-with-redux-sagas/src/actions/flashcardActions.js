// Actions
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const RESET_SESSION = "RESET_SESSION";

// Action creators
export const submitAnswer = (isCorrect) => ({
    type: SUBMIT_ANSWER,
    payload: isCorrect
});

export const resetSession = () => ({
    type: RESET_SESSION
});