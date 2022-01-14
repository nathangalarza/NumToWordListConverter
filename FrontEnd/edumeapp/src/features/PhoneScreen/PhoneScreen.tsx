import { useAppSelector, useAppDispatch } from "../../app/hooks";

import {
  addInput,
  getCombinationsAsync,
  removeInput,
  selectNumber,
  selectSuggestions,
} from "./PhoneReducer";

import styles from "./phoneScreen.module.scss";

export function PhoneScreen() {
  const numberInput = useAppSelector(selectNumber);
  const dispatch = useAppDispatch();
  //Handles input change from phone. 
  const handleInputChange = (evt :  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	let key = evt.currentTarget.dataset.value ?? '' ;
	dispatch(getCombinationsAsync(numberInput + key));
	dispatch(addInput(key));

	};
  return (
    <div>
      <div className={styles.smartphone}>
        <div className={styles.content}>
          <table id="phone" className={styles.phone}>
            <h2>EduMessages</h2>
            <tr>
              <td colSpan={3} className={styles.numberInput}>
                <input type="text" defaultValue={numberInput} />
              </td>
            </tr>
            <tr>
              <td>
                <button data-value="1" className="key">
                  1<span></span>
                </button>
              </td>
              <td>
                <button
                  data-value="2"
                  className="key"
                  onClick={(evt) => {
					  handleInputChange(evt);   
                  }}
                >
                  2<span>a b c</span>
                </button>
              </td>
              <td>
                <button
                  data-value="3"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  3<span>d e f</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  data-value="4"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  4<span>g h i</span>
                </button>
              </td>
              <td>
                <button
                  data-value="5"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  5<span>j k l</span>
                </button>
              </td>
              <td>
                <button
                  data-value="6"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  6<span>m n o</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  data-value="7"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  7<span>p q r s</span>
                </button>
              </td>
              <td>
                <button
                  data-value="8"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  8<span>t u v</span>
                </button>
              </td>
              <td>
                <button
                  data-value="9"
                  className="key"
                  onClick={(evt) => {
					handleInputChange(evt);   
				}}
                >
                  9<span>w x y z</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button data-value="*" className="key">
                  *
                </button>
              </td>
              <td>
                <button data-value="0" className="key">
                  0
                </button>
              </td>
              <td>
                <button
                  data-value="#"
                  className="key"
                  onClick={() => dispatch(removeInput())}
                >
                  del
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
