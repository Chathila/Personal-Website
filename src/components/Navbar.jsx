import React,{ useState}from 'react';
import { Link } from 'react-router-dom';
//import { Button } from './Button';
import'./Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [setButton] = useState(true);

  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const Closemobilemenu = () => setMenuOpen(false);

  const showButton = ()=> {
    if (window.innerWidth<=960){
      setButton(false);
    }else{
      setButton(true)
    }
  };

  // to fix the problem with the button on reloading, this is a hook for the button
  /*useEffect(()=>{
    showButton()
  },[]);*/

  window.addEventListener('resize', showButton)

  return (
    
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to = '/' className='navbar-logo'>
            Chathila's Website<i className='fab fa-typo3' onClick={Closemobilemenu}/>
          </Link>
          <div className='menu-icon' onClick={handleMenuClick}>
            <i className={ menuOpen? 'fas fa-times':'fas fa-bars'}/>
          </div>
          <ul className={menuOpen ? 'nav-menu active':'nav-menu'}>

            <li className='nav-item'>
              <Link to ='/' className='nav-links' onClick={Closemobilemenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to ='/About-me' className='nav-links' onClick={Closemobilemenu}>
                About me
              </Link>
            </li>

            <li className='nav-item'>
              <Link to ='/Experiences' className='nav-links' onClick={Closemobilemenu}>
                Experience
              </Link>
            </li>

            <li className='nav-item'>
              <Link to ='/Projects' className='nav-links' onClick={Closemobilemenu}>
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link to ='/ContactInformation' className='nav-links' onClick={Closemobilemenu}>
                Contact 
                Information
              </Link>
            </li>
          </ul>
          
        
        </div>    
      </nav>  
    
  );
}

export default Navbar

