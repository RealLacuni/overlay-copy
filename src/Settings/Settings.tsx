import React, { useState } from 'react';
import SettingInput from './SettingInput';
import { PrimaryButton } from '../components/Buttons';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const nav = useNavigate();
  const [testVal, setTestVal] = useState(50);

  console.log(testVal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestVal(Number(e.target.value));
  };
  return (
    <>
      <div className="bg-slate-300 bg-opacity-80 h-48 w-36">
        <h1 className={'text-center text-4xl'}>Settings</h1>
        <SettingInput
          label={'Input'}
          type={'number'}
          handleChange={handleChange}
          minVal={0}
          maxVal={100}
          stepSize={1}
          startVal={testVal}
        />
        <PrimaryButton
          onClick={() => {
            nav('/');
          }}
        >
          Back to Main Menu
        </PrimaryButton>
      </div>
    </>
  );
};

export default Settings;
