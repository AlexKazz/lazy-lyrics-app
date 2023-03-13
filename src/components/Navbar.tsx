import ToolTip from './ToolTip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FaQuestionCircle } from 'react-icons/fa'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import Sidebar from './Sidebar';

function Navbar({ theme, toggleTheme }) {
  return (
    <div className={`font-fell flex ${
      theme === "bg-hero" ? "text-slate-500" : "text-white"
    } items-center mt-5 shadow-black drop-shadow-lg`}>
      
      <div className='text-3xl ml-8'>Lazy Lyrics</div>
      <div className='flex'>
      
        <div className='mx-10 link link-underline link-underline-black hover:text-slate-400'>
          <ToolTip tooltip='View source code on GitHub'>
            <a
              href='https://github.com/AlexKazz/lazy-lyrics-app'
              target='_blank'
              rel='noreferrer'
              className='hover:text-slate-400'
            >
              GitHub
            </a>
          </ToolTip>
        </div>
        {/* <Sidebar /> */}
      </div>
      <button onClick={toggleTheme}>
        {theme === 'bg-hero' ? (
          <ToolTip tooltip='Dark mode'>
            <FontAwesomeIcon icon={faMoon} />
          </ToolTip>
        ) : (
          <ToolTip tooltip='Light mode'>
            <FontAwesomeIcon icon={faSun} />
          </ToolTip>
        )}
      </button>
      {/* <div className='ml-10'>
      <AiOutlineQuestionCircle className='text-2xl'/>
      </div> */}
      
    </div>
  );
}

export default Navbar;
