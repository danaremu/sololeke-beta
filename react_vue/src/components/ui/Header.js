import { Link } from 'react-router-dom'

//
import logo from './../img/esc_logo.png'

const Header = () => {
  return (
    <header>
      <div className='content'>
        <h1 className='header-title'>Emmanuel Sololeke Consulting</h1>

        <button className='navbar-controls'></button>

        <div className='navbar-container'>
          <img src={logo} alt='' className='header-logo' />

          <button className='menu-toggle'>
            <div className=''></div>
            <div className=''></div>
            <div className=''></div>
          </button>

          <div className='navbar-block'>
            <nav className='navbar'>
              <Link to='/'>home</Link>
              <div className='dropdown'>
                <Link to='/about' alt=''>
                  about us
                </Link>
                <div className='dropdown-list'>
                  <div className='overlay'></div>
                  <Link to='/about/partners/' className='dropdown-item'>
                    partners
                  </Link>
                  <Link to='/about/resource/' className='dropdown-item'>
                    resource teams
                  </Link>
                </div>
              </div>
              <Link to='/services'>services</Link>
              <Link to='/properties'>properties</Link>

              {/* <a>home</a>
              <div className='dropdown'>
                <a href='./about_us/' alt=''>
                  about us
                </a>
                <div className='dropdown-list'>
                  <div className='overlay'></div>
                  <a href='./about_us/partners/' className='dropdown-item'>
                    partners
                  </a>
                  <a href='./about_us/resource/' className='dropdown-item'>
                    resource teams
                  </a>
                </div>
              </div>
              <a href='./services/'>services</a>
              <a href='./properties/'>properties</a> */}
            </nav>

            <nav className='navbar-extras'>
              <Link to='/insights'>insights</Link>
              <Link to='#contactus' className='action-btn'>
                contact us
              </Link>

              {/* <a href='./insights/'>insights</a>
              <a href='#contactus' className='action-btn'>
                contact us
              </a> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
