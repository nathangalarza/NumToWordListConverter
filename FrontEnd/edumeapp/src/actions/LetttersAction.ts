import axios from "axios";
import { Dispatch } from "redux";
import conversionService from "../services/conversion.service";
import { LettersDispatchTypes, LETTERS_FAIL, LETTERS_LOADING, LETTERS_SUCCESS } from "./LettersActionType";

export const GetLetters = (key: string) => async (dispatch: Dispatch<LettersDispatchTypes>) => {
    
    try{
        dispatch({
    type: LETTERS_LOADING
})
    const res = await conversionService.get(key);
    dispatch({
        type: LETTERS_SUCCESS,
        payload: JSON.stringify(res.data)
    })
}
    catch(Ex){
   dispatch({
        type: LETTERS_FAIL,
    })
    }
  };