import { useAppSelector } from "../../app/hooks";
import { selectSuggestions } from "../PhoneScreen/PhoneReducer";
import styles from "./SuggestionHistory.module.scss";

export function SuggestionHistory() {
  const suggestions = useAppSelector(selectSuggestions);
  let index = 0;
  const readMore = (item : string) =>{
console.log(item);
  }
  const renderedListItems = suggestions.map((suggestId) => {
    index++;
    let item =  index + "-" + suggestId + "," 
    + "  ";
    debugger;
    if(item.length > 50){
    
      return <li onClick={() => readMore(item)}> {item.substring(0, 50) + "... "}</li>
      ;
    }
    else{

      return <li> {item}</li>;
    }
  });
  return (
    <div className={styles.history}>
      <h2>Suggestions</h2>
      <li> {renderedListItems}</li>
    
    </div>
  );
}


