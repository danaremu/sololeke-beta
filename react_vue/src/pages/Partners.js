import { Link } from 'react-router-dom'

//
import Page from '../components/ui/Page'

//
import emmanuel_sololeke_img from './../components/img/team/emmanuel_adeleke.jpg'
import user_icon from './../components/icons/user.png'

const Partners = () => {
  return (
    <Page>
      {/* <!--  --> */}
      <section class='landing-min' id='aboutus'>
        <div class='overlay'></div>
        <div class='content'>
          <h2 class='landing_title'>about us | meet our partners</h2>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='personnels'>
        <div class='content'>
          <div class='section_text'>
            <h3 class='section_topic'>key personnel</h3>
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
                <div class='personnel_info'>
                  Our success over the past 8 years is attributable to the
                  knowledge base, experience and work ethics of our dedicated
                  and qualified personnel. Our key staff are complemented by
                  fifty-five other qualified surveyors and numerous other
                  technical
                </div>
                <h1 class='personnel_name'>Mr. Emmanuel Adeleke</h1>
              </div>
              <img
                src={emmanuel_sololeke_img}
                alt='emmanuel adeleke'
                class='personnel_img'
              />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>Mr. Olukunle Olaniyan</h1>
              </div>
              <img
                src={user_icon}
                alt='olukunle olaniyan'
                class='personnel_img'
              />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>Mr. Auwal Musa</h1>
              </div>
              <img src={user_icon} alt='auwal musa' class='personnel_img' />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>Mrs. Abigail Jatau</h1>
              </div>
              <img src={user_icon} alt='abigail jatau' class='personnel_img' />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>Mr. Domshak Dawesh</h1>
              </div>
              <img src={user_icon} alt='domshak dawesh' class='personnel_img' />
            </div>
            <div class='card personnel_item'>
              <div class='personnel_content'>
                <div class='personnel_info'></div>
                <h1 class='personnel_name'>Miss. Blessing Oyero</h1>
              </div>
              <img src={user_icon} alt='blessing oyero' class='personnel_img' />
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

export default Partners
