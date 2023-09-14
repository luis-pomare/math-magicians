import { useState } from 'react';

export default function ToggleButton() {
  let [buttonState, setButtonState] = useState('Off')

  function handleButon() {
    if (buttonState === 'Off') setButtonState('On');
    if (buttonState === 'On') setButtonState('Off');
  }

  return (
    <button onClick={handleButon}>{buttonState}</button>
  )
}
