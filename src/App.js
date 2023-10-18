import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    const handleKeyPress = (event) => {
      const currentKey = event.key;
      const matchingPad = drumPads.find((drumPad) => drumPad.text === currentKey.toUpperCase())
      if (matchingPad) {
        playSound(matchingPad.text);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  function playSound(source) {
    const audio = document.getElementById(source)
    // audio.pause();
    // audio.currentTime = 0;
    audio.play();
    setActiveKey(source)

  }
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads btn-group">
          {drumPads.map((drumPad) => (
            <button onClick={() => { playSound(drumPad.text) }} key={drumPad.text} className="drum-pad btn btn-secondary shadow" id={drumPad.keyCode}>
              {drumPad.text}
              <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
