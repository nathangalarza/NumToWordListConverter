import { useAppSelector } from "../../app/hooks";
import { selectSuggestions } from "../PhoneScreen/PhoneReducer";
import styles from "./SuggestionHistory.module.scss";

export function SuggestionHistory() {
  const suggestions = useAppSelector(selectSuggestions);
  const renderedListItems = suggestions.map((suggestId) => {
    return <li> {suggestId + ","}</li>;
  });
  return (
    <div className={styles.history}>
      <li> {renderedListItems}</li>
    </div>
  );
}
