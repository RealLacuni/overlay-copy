import React, { useContext } from 'react';
import { SecondaryButton } from './components/Buttons';
import { useNavigate } from 'react-router-dom';
import { PreferenceContext } from './util/PreferenceContext';

const sendLoadOverlay = (useDev = false) => {
  window.Main.LoadOverlay(useDev);
};

const Home = () => {
  const { preferences } = useContext(PreferenceContext);
  const nav = useNavigate();

  return (
    <>
      <div className={'flex flex-col h-screen justify-center gap-12 bg-slate-50 items-center text-blue-900'}>
        <SecondaryButton className={' hover:text-black w-28'} onClick={() => sendLoadOverlay(false)}>
          Launch Overlay
        </SecondaryButton>
        <SecondaryButton className={' hover:text-black w-28'} onClick={() => {nav('/settings')}}>
          Settings
        </SecondaryButton>
        <SecondaryButton className={' hover:text-black bg-indigo-600 text-indigo-50 w-32'} onClick={window.Main.Close}>
          Close
        </SecondaryButton>

        <p>
          Press <span className={'text-black'}>{preferences.shortcuts.toggleOverlay}</span> at any time to toggle the
          overlay.
        </p>
      </div>
      {/* absolute div containing the current version */}
      <div className='absolute bottom-0 left-0 px-1'>
        <a href='/about' className=' text-gray-600 underline text-sm'>
          About</a>

      </div>
      <div className={'absolute bottom-0 right-0 p-1 text-xs text-gray-500'}>
        <div className={'flex flex-row align-text-bottom gap-1 items-end'}>
          <div className = {'hover:cursor-pointer'}onClick={() => window.Main.OpenLink('https://github.com/RealLacuni/overlay-x')}>

          <img src='assets/icons/github-mark.svg' className={'w-6 h-6 mr-1'} alt='github link' />
          </div>
        {window.Main.GetVersion()}
        </div>
        </div>

    </>
  );
};

export default Home;
