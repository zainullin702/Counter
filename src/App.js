import {useState} from 'react';
import './index.scss';
import Modal from './Components/Modal/Modal';

function App() {
  const [isOpen, setOpen] = useState(false)
  const togglePopUp = () => setOpen(!isOpen)
  return (
    <div className="App">
      <button onClick={togglePopUp} className="open-modal-btn">✨ Открыть окно</button>
      <Modal isOpen={isOpen} onClose={togglePopUp} />
    </div>
  );
}

export default App;
