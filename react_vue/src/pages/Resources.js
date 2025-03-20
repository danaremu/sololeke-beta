import { Link } from 'react-router-dom'

//
import Page from '../components/ui/Page'

//
import user_icon from './../components/icons/user.png'

const Resources = () => {
  return (
    <Page>
      {/* <!--  --> */}
      <section class='landing-min' id='aboutus'>
        <div class='overlay'></div>
        <div class='content'>
          <h2 class='landing_title'>about us | meet our team</h2>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='personnels'>
        <div class='content'>
          <div class='section_text'>
            <h3 class='section_topic'>reource team</h3>
            <p>
              Our success over the past 8 years is attributable to the knowledge
              base, experience and work ethics of our dedicated and qualified
              personnel. Our key staff are complemented by fifty-five other
              qualified surveyors and numerous other technical and
              administrative staff. Below is a short profile of each of our key
              personnel:
            </p>
          </div>
          {/* <!--  --> */}
          <div class='personnel_list'>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>resource member</h1>
              </div>
              <img src={user_icon} alt='staff member' class='personnel_img' />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>resource member</h1>
              </div>
              <img src={user_icon} alt='staff member' class='personnel_img' />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>resource member</h1>
              </div>
              <img src={user_icon} alt='staff member' class='personnel_img' />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>resource member</h1>
              </div>
              <img src={user_icon} alt='staff member' class='personnel_img' />
            </div>
          </div>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='joinus'>
        <div class='content'>
          <h3 class='section_topic'>want to be a part of our team?</h3>
          <p>
            Our success over the past 8 years is attributable to the knowledge
            base, experience and work ethics of our dedicated and qualified
            personnel.
          </p>
          <button class='action-btn left'>join us</button>
        </div>
      </section>
    </Page>
  )
}

export default Resources
