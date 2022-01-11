import { spawn } from 'child_process';
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { addInput, removeInput, selectNumber } from './numberSlice';

import styles from './ConvertNumToList.module.scss';




export function Convert(){
    const number = useAppSelector(selectNumber);
    const dispatch = useAppDispatch();
   
    return (
      <div>
      <table id="phone" className={styles.phone}>
	<tr>
		<td colSpan={3}>
			<input type="text" className={styles.result} value={number} />
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="1" className="key" 
             onClick={() => dispatch(addInput('1'))}
             >1
          <span>. , !</span>
        </button>
		</td>
		<td>
			<button data-value="2" className="key"
             onClick={() => dispatch(addInput('2'))}>2
          <span>a b c</span>
        </button>
		</td>
		<td>
			<button data-value="3" className="key"
             onClick={() => dispatch(addInput('3'))}>3
          <span>d e f</span>
        </button>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="4" className="key"
             onClick={() => dispatch(addInput('4'))}>4
          <span>g h i</span>
        </button>
		</td>
		<td>
			<button data-value="5" className="key"
             onClick={() => dispatch(addInput('5'))}>5
          <span>j k l</span>
        </button>
		</td>
		<td>
			<button data-value="6" className="key"
             onClick={() => dispatch(addInput('6'))}>6
          <span>m n o</span>
        </button>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="7" className="key"
             onClick={() => dispatch(addInput('7'))}>7
          <span>p q r s</span>
        </button>
		</td>
		<td>
			<button data-value="8" className="key"
              onClick={() => dispatch(addInput('8'))}>8
          <span>t u v</span>
        </button>
		</td>
		<td>
			<button data-value="9" className="key"
              onClick={() => dispatch(addInput('9'))}>9
          <span>w x y z</span>
        </button>
		</td>
	</tr>
	<tr>
		<td>
			<button data-value="*" className="key">*</button>
		</td>
		<td>
			<button data-value="0" className="key">0</button>
		</td>
		<td>
			<button data-value="#" className="key"
            onClick={() => dispatch(removeInput())}
            >&LT</button>
		</td>
	</tr>
       </table>
      </div>
      )


}