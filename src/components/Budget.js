import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                step='10'
                style={{ width: 150 }}
                onChange={(e) => dispatch({ type: 'SET_BUDGET', payload: e.target.value })}
            >
            </input>
        </div >
    );
};
export default Budget;
// onChange={(event) => setCost(event.target.value)}