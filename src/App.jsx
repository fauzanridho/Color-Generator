import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleOpacityChange = (e) => {
    const opacityValue = Number(e.target.value);
    setOpacity(opacityValue);
  };
  const opacityPercentage = Math.round(opacity * 100);

  return (
    <div className="container-app">
      <h1>Color Generator</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <input
        type="range"
        min="0"
        max="1"
        step={0.1}
        value={opacity}
        onChange={handleOpacityChange}
      />
      <div
        className="box"
        style={{ backgroundColor: color, opacity: opacity }}
      ></div>

      <p>Hex: {color}</p>
      <p>Opacity: {opacityPercentage}%</p>
    </div>
  );
}

export default App;
