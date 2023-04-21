import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {logo, sun} from '../assets';
import { useStateContext } from '../context';
//import {navlinks} from '../constants';
import './Layout';
const Icon = ({styles, name, imgUrl, isActive, disabled, handleClick, showTooltip, setShowTooltip}) => (
  <div className={`relative w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles} hover:bg-[#3a3d42] transition-colors duration-200`} onClick={handleClick} onMouseEnter={() => setShowTooltip(name === 'logout')} onMouseLeave={() => setShowTooltip(false)}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2"/>
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
    )}
    {showTooltip && name === 'logout' && (
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-lg shadow-lg">
        Logout has to be done manually on the MetaMask wallet
      </div>
    )}
  </div>
)

// ... (rest of the Sidebar component)



const Sidebar = ({isActive, setIsActive, navlinks}) => {
  const navigate = useNavigate();
  const { clearWallet } = useStateContext();
  const [showTooltip, setShowTooltip] = useState(false);
  const handleLogout = () => {
    clearWallet();
    window.location.href = "/";
  };
  //const [isActive, setIsActive] = useState('dashboard')
  //const {connect, address, clearAddress} = useStateContext();
  return (
    <div className='flex items-center flex-col top-5 h-[93vh]'>
      <Link to="/">
        <Icon styles='w-[52px] h-[52px] bg-[#2c2f32]' imgUrl={logo}/>
      </Link>

      <div className='flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12'>
        <div className='flex flex-col justify-center items-center gap-3'>
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              showTooltip={showTooltip}
              setShowTooltip={setShowTooltip}
              handleClick={() => {
                if (link.disabled) return;
                if (link.name === "logout") {
                  handleLogout();
                  return;
                }
                setIsActive(link.name);
                navigate(link.link);
              }}
            />
          ))}
        </div>

        <Icon styles='bg-[#1c1c24] shadow-secondary' imgUrl={sun}/>
      </div>
    </div>
  )
}

export default Sidebar