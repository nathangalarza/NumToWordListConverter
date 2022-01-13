export const LETTERS_LOADING = "LETTERS_LOADING";
export const LETTERS_FAIL = "LETTERS_FAIL";
export const LETTERS_SUCCESS = "LETTERS_SUCCESS";

export interface LettersLoading{
    type: typeof LETTERS_LOADING
    
}

export interface LettersFail{
    type: typeof LETTERS_FAIL
  
}
export interface LettersSuccess{
    type: typeof LETTERS_SUCCESS
    payload: string
    
}

export type LettersDispatchTypes = LettersLoading | LettersFail | LettersSuccess;