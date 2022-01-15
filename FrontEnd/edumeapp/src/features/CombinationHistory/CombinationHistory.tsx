import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addInput,
  selectShowMore,
  selectCombinations,
  addShowMore,
} from "../PhoneScreen/PhoneReducer";
import styles from "./CombinationHistory.module.scss";

export function CombinationHistory() {
  const Combinations = useAppSelector(selectCombinations);
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
  const renderedListItems = Combinations.map((suggestId) => {
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
        <p>Click on '...' to see all possible combinations</p>
        <div> {renderedListItems}</div>

      </div>
    </div>
  );
}
