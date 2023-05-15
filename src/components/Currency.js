import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <div className='alert alert-success'>
      <span> Currency </span>
      <select className="custom-select" id="inputGroupSelect02"
        onChange={(e) => dispatch({ type: 'CHG_CURRENCY', payload: e.target.value })}>
        <option defaultValue value="£" name="pound"> £ Pound </option>
        <option value="$" name="dollar"> $ Dollar </option>
        <option value="€" name="euro"> € Euro</option>
        <option value="₹" name="ruppe"> ₹ Ruppee</option>
      </select>
    </div>
  );
}
export default Currency;