import { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm rounded p-8 shadow-md bg-gradient-to-b from-stone-700 to-stone-800 mx-auto"
    >
      <div className="flex flex-col mb-6 gap-2">
        {emailNotValid}
        <p>
          <Input
            label="Email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        {passwordNotValid}
        <p>
          <Input
            label="Password"
            invalid={passwordNotValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onSelect={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
