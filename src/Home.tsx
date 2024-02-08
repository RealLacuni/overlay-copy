import React, { useContext } from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { useNavigate } from 'react-router-dom';
import { PreferenceContext } from './util/PreferenceContext';
import Sidebar from './components/Sidebar';
import gitHubLogo from './assets/icons/github-mark.svg';



const sendLoadOverlay = (useDev = false) => {
  window.Main.LoadOverlay(useDev);
};

const Home = () => {
  const { preferences } = useContext(PreferenceContext);
  const nav = useNavigate();

  return (
    <div className='flex flex-row '>
      <Sidebar>
        <div className='flex flex-col gap-12 text-indigo-100 p-4'>
          <h1 className='text-3xl font-light'>About</h1>
          <p>Click <span className='bg-gray-800 rounded px-0.5'>Launch Overlay</span> to minimize the window and display the overlay.</p>
          <p>To <span>switch profiles</span> or change overlay settings click <span className='bg-gray-800 rounded px-0.5'>Settings</span>.</p>
          <p>To exit the app click <span className='bg-gray-800 rounded px-0.5'>Close</span>.</p>
        </div>

      </Sidebar>
      <div className={'w-full flex flex-col h-screen justify-center gap-12 bg-slate-50 items-center text-blue-900'}>
        <div className='flex flex-col gap-12'>
        <PrimaryButton className={'w-32'} onClick={() => sendLoadOverlay(false)}>
          Launch Overlay
        </PrimaryButton>
        <SecondaryButton
          className={' hover:text-black w-28'}
          onClick={() => {
            nav('/settings');
          }}
        >
          Settings
        </SecondaryButton>
        <TertiaryButton className={'w-28'} onClick={window.Main.Close}>
          Close
        </TertiaryButton>
        </div>
        <p className='text-indigo-800'>
          Press <span className={'text-black'}>{preferences.shortcuts.toggleOverlay}</span> at any time to toggle the
          overlay.
        </p>
        <p className='text-indigo-800'>
          Press <span className={'text-black'}>{preferences.shortcuts.openMenu}</span> at any time to go back into the
          main menu.
        </p>
      </div>
      {/* absolute div containing the current version */}
      <div className="absolute bottom-0 left-0 flex flex-row gap-2 p-1 items-end">
        <div
          className={'hover:cursor-pointer rounded-full bg-white opacity-80 p-1 flex flex-row items-center justify-center'}
          onClick={() => window.Main.OpenLink('https://github.com/RealLacuni/overlay-x')}
        >
          <img src={gitHubLogo} className={'w-5 h-5'} alt="github link" />
        </div>
      </div>
      <div className={'absolute bottom-0 right-0 p-1 text-xs text-gray-500'}>
        {/* <div className={'flex flex-row align-text-bottom gap-1 items-end'}>{window.Main.GetVersion()}</div> */}
      </div>
    </div>
  );
};

export default Home;
