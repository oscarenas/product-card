import React from 'react';
import LABEL from '../../../CONSTANTS/labels';

function Talle(props) {
  const { sizes } = props;

  return (
    <div className="mb-3">
      <h3 className="text-titleGray font-bold mt-5 uppercase">
        {LABEL.talle_label}
      </h3>

      <div className="w-full overflow-x-auto product-size">
        <form className="radios-ghost inline-flex mb-5 mt-5">
          {sizes &&
            sizes.map((item) => (
              <div className="relative" key={item.id}>
                <input
                  type="radio"
                  id={item.id}
                  name="radname"
                  value={item.size}
                />
                <label htmlFor={item.id}>{item.size}</label>
              </div>
            ))}
        </form>
      </div>
    </div>
  );
}

export default Talle;
