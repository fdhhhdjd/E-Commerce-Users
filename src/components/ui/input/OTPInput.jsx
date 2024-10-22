import React from 'react';

const OTPInput = ({ length, onComplete, resetFlag, className }) => {
  const [inputs, setInputs] = React.useState(Array(length).fill(''));
  const inputRefs = React.useRef([]);

  React.useEffect(() => {
    // Focus the first input on mount
    inputRefs.current[0].focus();
  }, []);

  React.useEffect(() => {
    if (resetFlag) {
      // Reset inputs when resetFlag changes
      setInputs(Array(length).fill(''));
      // Optionally, focus the first input after reset
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [resetFlag]); // Dependency array includes resetFlag

  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === '') {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }

      if (newInputs.every(input => input)) {
        onComplete(newInputs.join(''));
      }
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, length);
    if (/^\d+$/.test(pasteData)) {
      const newInputs = [...inputs]; // Copy current inputs
      // Loop through paste data and fill inputs up to the length
      for (let i = 0; i < pasteData.length; i++) {
        newInputs[i] = pasteData[i];
      }
      setInputs(newInputs);
      // If paste data fills all inputs, call onComplete
      if (pasteData.length === length) {
        onComplete(newInputs.join(''));
      } else {
        // Focus the next empty input after paste
        inputRefs.current[pasteData.length].focus();
      }
    } else {
      alert('Pasted data contains invalid characters.');
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !inputs[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className='flex justify-center space-x-2'>
      {inputs.map((input, index) => (
        <input
          key={index}
          ref={el => (inputRefs.current[index] = el)}
          className={className}
          maxLength={1}
          value={input}
          onChange={e => handleChange(e.target.value, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          onPaste={handlePaste}
          type='text'
          inputMode='numeric'
          autoComplete='off'
        />
      ))}
    </div>
  );
};

export default OTPInput;
