import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addInput,
  selectShowMore,
  selectSuggestions,
  addShowMore,
} from "../PhoneScreen/PhoneReducer";
import styles from "./SuggestionHistory.module.scss";

export function SuggestionHistory() {
  const suggestions = useAppSelector(selectSuggestions);
  const showMore = useAppSelector(selectShowMore);
  const dispatch = useAppDispatch();

  let index = 0;
  let textAreaText = "";
  const readMore = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: string
  ) => {
    dispatch(addShowMore(item));
  };
  const renderedListItems = suggestions.map((suggestId) => {
    index++;
    let item = index + "-" + suggestId + "," + "  ";
    if (item.length > 50) {
      return (
        <li>
          {" "}
          {item.substring(0, 50)}
          <a onClick={(evt) => readMore(evt, item)}>...</a>
          <></>
        </li>
      );
    } else {
      return <li> {item}</li>;
    }
  });
  return (
    <div>
      <div className={styles.history}>
        <h2>Combinations</h2>
        <textarea value={showMore}></textarea>
        <div className={styles.textAreaContent}></div>
        <h2>Suggestions</h2>
        <p>click on ... to see possible combinations</p>
        <div> {renderedListItems}</div>

      </div>
    </div>
  );
}
