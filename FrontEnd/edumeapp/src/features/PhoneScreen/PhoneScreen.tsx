import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { addInput,
	 getCombinationsAsync, 
	 removeInput, 
	 selectNumber, 
	 selectSuggestions} from './numberSlice';


import styles from './phoneScreen.module.scss';

export function PhoneScreen(){
	
    const numberInput = useAppSelector(selectNumber);
	const suggestions = useAppSelector(selectSuggestions);
    const dispatch = useAppDispatch();
	//Creates a list item on updates on suggestions
	const renderedListItems = suggestions.map(suggestId => {
	return <li> { suggestId + "," }</li>
	  })
    return (
      <div>
		
		  <div className={styles.smartphone}>
			  
  <div className={styles.content}>
  <table id="phone" className={styles.phone}>
  <h2 >EduMessages</h2>
	  <tr>
		<td colSpan={3} className={styles.numberInput}>
			<input type="text" 
		
			 defaultValue={numberInput} 
			/>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="1" className="key" >1
          <span></span>
        </button>
		</td>
		<td>
			<button data-value="2" className="key"
             onClick={() => { dispatch(getCombinationsAsync(numberInput + "2"));
				dispatch(addInput('2'))
		}}>2
          <span>a b c</span>
        </button>
		</td>
		<td>
			<button data-value="3" className="key"
             onClick={() => {dispatch(getCombinationsAsync(numberInput + "3"))
				dispatch(addInput('3'))
			 }}>3
          <span>d e f</span>
        </button>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="4" className="key"
             onClick={() => {dispatch(getCombinationsAsync(numberInput + "4"))
			 dispatch(addInput('4'))}}>4
          <span>g h i</span>
        </button>
		</td>
		<td>
			<button data-value="5" className="key"
             onClick={() => {dispatch(getCombinationsAsync(numberInput + "5"))
			 dispatch(addInput('5'))}}>5
          <span>j k l</span>
        </button>
		</td>
		<td>
			<button data-value="6" className="key"
             onClick={() => {dispatch(getCombinationsAsync(numberInput + "6"))
			 dispatch(addInput('6'))}}>6
          <span>m n o</span>
        </button>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="7" className="key"
             onClick={() => {dispatch(addInput('7'))
			 dispatch(getCombinationsAsync(numberInput + "7"))}}>7
          <span>p q r s</span>
        </button>
		</td>
		<td>
			<button data-value="8" className="key"
              onClick={() => {dispatch(addInput('8'))
			  dispatch(getCombinationsAsync(numberInput + "8"))}}>8
          <span>t u v</span>
        </button>
		</td>
		<td>
			<button data-value="9" className="key"
              onClick={() => {dispatch(addInput('9'))
			  dispatch(getCombinationsAsync(numberInput + "9"))}}>9
          <span>w x y z</span>
        </button>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="*"  className="key">*</button>
		</td>
		<td>
			<button data-value="0" className="key">0</button>
		</td>
		<td>
			<button data-value="#" className="key"
            onClick={() => dispatch(removeInput())}
            >del</button>
		</td>
	</tr>
	
       </table>
  </div>
</div>
    
	   {/* <div className={ styles.history}>
		<li> { renderedListItems }</li>
      </div> */}
      </div>
      )


}

