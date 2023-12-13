import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMsg, selectStatus, selectData } from '../redux/openai/aiSlice';

const Test = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);

  const handleClick = async () => {
    dispatch(sendMsg(input));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      console.log(data);
    } else if (status === 'failed') {
      console.error('Error:', data);
    }
  }, [status, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Send Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default Test;