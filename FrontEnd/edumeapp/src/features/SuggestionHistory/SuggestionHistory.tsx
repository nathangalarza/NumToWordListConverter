import { useAppSelector } from "../../app/hooks";
import { selectSuggestions } from "../PhoneScreen/numberSlice";
import styles from './SuggestionHistory.module.scss';

export function SuggestionHistory(){
    const suggestions = useAppSelector(selectSuggestions);
    const maxLength = 50;
    const renderedListItems = suggestions.map(suggestId => {
        if(suggestions.length > maxLength){
            let cropSugest = suggestId.substring(0,maxLength);
            return <li> { cropSugest + "," }</li>
        }
        else{
            return <li> { suggestId + "," }</li>
        }
        }
       )
return (<div className={styles.history}>
        
    	<li> { renderedListItems }</li>
</div>)
}