import { useState } from 'react';

export default function ToggleButton() {
  let [buttonState, setButtonState] = useState(true)

  function handleButon() {
    setButtonState((previusButtonState) => !previusButtonState);
  }

  return (
    <button onClick={handleButon}>{buttonState ? 'ON' : 'Off'}</button>
  )
}
