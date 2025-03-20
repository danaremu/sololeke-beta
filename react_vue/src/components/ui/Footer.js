import { Link } from 'react-router-dom'

//
import logo from './../img/esc_logo.png'
//
import home_icon from './../icons/home.png'
import location_icon from './../icons/location.png'
import phone_icon from './../icons/phone.png'
import mail_icon from './../icons/mail.png'

import user_icon from './../icons/user.png'
import office_icon from './../icons/office.png'
import leasing_icon from './../icons/leasing.png'
import invest_icon from './../icons/invest.png'
import finance_audit_icon from './../icons/finance_audit.png'
import finance_mngt_icon from './../icons/finance_mngt.png'
import asset_valuation_icon from './../icons/asset_valuation.png'

const Footer = () => {
  return (
    <footer>
      <div className='content'>
        {/* <!--  --> */}
        <div className='contactus-lane' id='contactus'>
          <div className='contactus-box'>
            <div className='contactus-header'>
              <div className='contactus-title'>Let's Get Started</div>
              {/* <!-- <button className="contactus-remove" onclick="history.replaceState(null, null, window.location.pathname); document.querySelectorAll('.modal').forEach((item) => {
                item.style.display = 'none';});"></button> --> */}
              <button className='contactus-remove'></button>
            </div>
            <div className=' card contactus-body'></div>
          </div>
        </div>

        {/* <!--  --> */}
        <div className='company-lane'>
          <Link to='/'>
            <img src='./img/esc_logo.png' alt='' className='footer-logo' />
          </Link>
          {/* <a href='./'>
            <img src='./img/esc_logo.png' alt='' className='footer-logo' />
          </a> */}
          <div className='footer-msg'></div>
        </div>

        {/* <!--  --> */}
        <div className='links-lane'>
          <div className='link-box'>
            <div className='link-title'>about us</div>
            <div className='link-list'>
              <Link to='/about_us/#mission' className='link'>
                our mission
              </Link>
              <Link to='/about_us/#vision' className='link'>
                our vision
              </Link>
              <Link to='/about_us/#personnels' className='link'>
                key personel
              </Link>
              <Link to='/about_us/#whyus' className='link'>
                why us
              </Link>

              {/* <a href='./about_us/#mission' className='link'>
                our mission
              </a>
              <a href='./about_us/#vision' className='link'>
                our vision
              </a>
              <a href='./about_us/#personnels' className='link'>
                key personel
              </a>
              <a href='./about_us/#whyus' className='link'>
                why us
              </a> */}
            </div>
          </div>
          <div className='link-box'>
            <div className='link-title'>resources</div>
            <div className='link-list'>
              <Link to='#' className='link'>
                estate agency
              </Link>
              <Link to='#' className='link'>
                estate management
              </Link>
              <Link to='#' className='link'>
                finance & audit services
              </Link>
              <Link to='#' className='link'>
                asset valuation services
              </Link>

              {/* <a href='#' className='link'>
                estate agency
              </a>
              <a href='#' className='link'>
                estate management
              </a>
              <a href='#' className='link'>
                finance & audit services
              </a>
              <a href='#' className='link'>
                asset valuation services
              </a> */}
            </div>
          </div>
          <div className='link-box'>
            <div className='link-title'>company</div>
            <div className='link-list'>
              <Link to='/career/' className='link'>
                careers
              </Link>
              <Link to='/about/' className='link'>
                about us
              </Link>
              <Link to='/about/partners/' className='link'>
                partners
              </Link>
              <Link to='/about/resource/' className='link'>
                resource team
              </Link>

              {/* <a href='./career/' className='link'>
                careers
              </a>
              <a href='./about_us/' className='link'>
                about us
              </a>
              <a href='./about_us/partners/' className='link'>
                partners
              </a>
              <a href='./about_us/resource/' className='link'>
                resource team
              </a> */}
            </div>
          </div>
          <div className='link-box'>
            <div className='link-title'>properties</div>
            <div className='link-list'>
              <Link to='/properties/?type=sale' className='link'>
                for sale
              </Link>
              <Link to='/properties/?type=lease' className='link'>
                for lease
              </Link>
              <Link to='/properties/?iloc=plateau' className='link'>
                plateau properties
              </Link>
              <Link to='/properties/?deny_iloc=plateau' className='link'>
                other properties
              </Link>

              {/* <a href='./properties/?type=sale' className='link'>
                for sale
              </a>
              <a href='./properties/?type=lease' className='link'>
                for lease
              </a>
              <a href='./properties/?iloc=plateau' className='link'>
                plateau properties
              </a>
              <a href='./properties/?deny_iloc=plateau' className='link'>
                other properties
              </a> */}
            </div>
          </div>
          <div className='link-box'>
            <div className='link-title'>data bank</div>
            <div className='link-list'>
              <Link to='/insights/?cat=news' className='link'>
                news & publications
              </Link>
              <Link to='/insights/?cat=annual_report' className='link'>
                annual real estate report
              </Link>
              <Link to='/insights/?cat=bank' className='link'>
                real estate data bank
              </Link>
              <Link to='/insights/?cat=articles' className='link'>
                articles
              </Link>

              {/* <a href='./insights/?cat=news' className='link'>
                news & publications
              </a>
              <a href='./insights/?cat=annual_report' className='link'>
                annual real estate report
              </a>
              <a href='./insights/?cat=bank' className='link'>
                real estate data bank
              </a>
              <a href='./insights/?cat=articles' className='link'>
                articles
              </a> */}
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <div className='address-lane'>
          <div className='address-box'>
            <div className='address-location'>
              <div className='address-title'>head office</div>
              <div className='address-list'>
                <div className='item'>
                  <img src={location_icon} alt='' />
                  <span>
                    Suite 1, Behind Heritage Bank, <br /> 3 Beach Rd, Jos,
                    Plateau State
                  </span>
                </div>
                <div className='item'>
                  <img src={mail_icon} alt='' />
                  <span>sololeke@yahoo.com</span>
                </div>
                <div className='item'>
                  <img src={phone_icon} alt='' />
                  <span>+2348036097688 | +2348093949347 | +2348031828251</span>
                  {/* <!-- <span>+2348036097688 <br/> +2348093949347 <br/> +2348031828251</span> --> */}
                </div>
              </div>
            </div>
            <div className='address-location'>
              <div className='address-title'>lagos office</div>
              <div className='address-list'>
                <div className='item'>
                  <img src={location_icon} alt='' />
                  <span>
                    5, oladejo street, <br /> off olusosun bus stop, <br />{' '}
                    kudirat abiola road, <br /> oregun,
                    <br /> lagos state
                  </span>
                </div>
                {/* <!-- <div className="item">
                    <img src="./icons/mail.png" alt="" />
                    <span>sololeke@yahoo.com</span>
                  </div>
                  <div className="item">
                    <img src="./icons/phone.png" alt="" />
                    <span>+2348036097688 <br/> +2348093949347 <br/> +2348031828251</span>
                  </div> --> */}
              </div>
            </div>
            <div className='address-location'>
              <div className='address-title'>gombe office</div>
              <div className='address-list'>
                <div className='item'>
                  <img src={location_icon} alt='' />
                  <span>
                    Suite 4, jubilee complex, <br /> behind jubilee hotel,{' '}
                    <br /> blu road, <br /> gombe State
                  </span>
                </div>
              </div>
            </div>
            <div className='address-location'>
              <div className='address-title'>abuja office</div>
              <div className='address-list'>
                <div className='item'>
                  <img src={location_icon} alt='' />
                  <span>
                    Suite b41 danziya plaza, <br /> opp. nnpc mega filling
                    station, <br /> central business district, <br /> abuja
                  </span>
                </div>
                {/* <!-- <div className="item">
                    <img src="./icons/mail.png" alt="" />
                    <span>sololeke@yahoo.com</span>
                  </div>
                  <div className="item">
                    <img src="./icons/phone.png" alt="" />
                    <span>+2348036097688 <br/> +2348093949347 <br/> +2348031828251</span>
                  </div> --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!--  --> */}
        <div className='copyright-lane'>
          <div className=''>
            <span>&copy;</span>
            <span>2025</span>
            <span>emmanuel sololeke consulting</span>
            <span>all right reserved</span>
          </div>
          <div className=''>
            <span>made with </span>
            <span>&#128151;</span>
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
