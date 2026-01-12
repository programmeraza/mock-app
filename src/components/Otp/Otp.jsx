import { useRef } from 'react';
import { useOtp } from './useOtp';
import './OtpConfirm.scss';

export default function OtpConfirm({ phone }) {
  const { code, setCode, timer, resend, submit } = useOtp(phone);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && inputs.current[index - 1]) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="otp">
      <h1>Enter code</h1>
      <p>
        We’ve sent an SMS with an activation code<br />
        to your phone {phone}
      </p>

      <div className="otp__inputs">
        {code.map((digit, i) => (
          <input
            key={i}
            ref={el => (inputs.current[i] = el)}
            value={digit}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKeyDown(i, e)}
            maxLength={1}
          />
        ))}
      </div>

      <button
        className="otp__resend"
        disabled={timer > 0}
        onClick={resend}
      >
        Send code again {timer > 0 && `00:${String(timer).padStart(2, '0')}`}
      </button>

      <button className="otp__submit" onClick={submit}>
        Confirm
      </button>
    </div>
  );
}
