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
      theme === "bg-hero" ? "text-slate-500" : "text-slate-300"
    } items-center mt-5 shadow-black drop-shadow-lg`}>
      
      <div className='text-3xl ml-8'>Lazy Lyrics</div>
      <div className='flex'>
      
        <div className='ml-6 link link-underline link-underline-black hover:text-slate-400'>
          
            <a
              href='https://github.com/AlexKazz/lazy-lyrics-app'
              target='_blank'
              rel='noreferrer'
              className='hover:text-slate-400'
            >
              GitHub
            </a>
          
        </div>
        
      </div>
      <button onClick={toggleTheme}  className='hover:text-slate-400 ml-6'>
        {theme === 'bg-hero' ? (
          
            <FontAwesomeIcon icon={faMoon} />
          
        ) : (
          
            <FontAwesomeIcon icon={faSun} />
          
        )}
      </button>
      
    </div>
  );
}

export default Navbar;
