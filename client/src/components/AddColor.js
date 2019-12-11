import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  color: '',
  code: { hex: '' }
};

function AddColor({colors, updateColors}) {
  const [colorToAdd, setColorToAdd] = useState(initialState);

  const addColor = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/colors", colorToAdd)
      .then(res => {
        console.log(res);
        updateColors(res.data)
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={addColor}>
      <legend>add color</legend>
      <label>
        color name:
        <input
          onChange={e =>
            setColorToAdd({ ...colorToAdd, color: e.target.value })
          }
          value={colorToAdd.color}
        />
      </label>
      <label>
        hex code:
        <input
          onChange={e =>
            setColorToAdd({
              ...colorToAdd,
              code: { hex: e.target.value }
            })
          }
          value={colorToAdd.code.hex}
        />
      </label>
      <div className="button-row">
        <button type="submit">save</button>
      </div>
    </form>
  );
}

export default AddColor;
