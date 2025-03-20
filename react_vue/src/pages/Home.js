l
import Page from '../components/ui/Page'

const Home = () => {
  return (
    <Page>
      {/* <!--  --> */}
      <section class='landing' id='home'>
        <div class='overlay'></div>

        <div class='content curve'>
          <h1 class='landing_title'>Welcome to Our Estate Surveying Website</h1>
          <p class='landing_detail'>
            Here you can find information about our services, properties, and
            more.
          </p>
          <Link to='/services'>
            <button class='action-btn'>See all services</button>
          </Link>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='about_us' id='about_us'>
        <div class='content'>
          <div class='about-img'></div>
          <div class='about-content'>
            <h1 class='about_title'>About Us</h1>
            <p class='about_detail'>
              With nearly a decade attributable to the knowledge base,
              experience and work ethics of our dedicated and qualified
              personnel. Emmanuel Sololeke Consulting is a firm of Estate
              Surveyors & Valuers registered in Nigeria in accordance with the
              rules and regulations of the Nigerian Institution of Estate
              Surveyors and Valuers (NIESV), and the Estate Surveyors and
              Valuers Registration Board of Nigeria (ESVARBON).
            </p>
            <Link to='/about'>
              <button class='no-button'>Learn more about us</button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='services' id='services'>
        <div class='content'>
          <div class='section-head'>
            <h1 class='section_title'>Unique expertise and offerings</h1>
            <div class=''>
              <p class='section_detail'>
                Our services are need-structured and targeted in a way that
                provides immense benefits to you.
              </p>
              <Link to='services'>
                <button class='no-button'>See All Services</button>
              </Link>
            </div>
          </div>

          <div class='section-body'>
            {/* <!--  --> */}
            <div class='service-item card'>
              <div class='card-content'>
                <img
                  src='./icons/asset_valuation.png'
                  alt=''
                  class='card-icon'
                />
                <div class='card-box'>
                  <h1 class='card-title'>Asset Valuation & Advisory</h1>
                  <p class='card-detail'>
                    Our real estate Advisory and Survey services help will you
                    maximise the value of your real estate holdings, whilst
                    making important business decisions with confidence.
                  </p>
                  <button class='card-button'>learn more</button>
                </div>
              </div>
            </div>

            {/* <!--  --> */}
            <div class='service-item card'>
              <div class='card-content'>
                <img
                  src='./icons/facilities_mngt.png'
                  alt=''
                  class='card-icon'
                />
                <div class='card-box'>
                  <h1 class='card-title'>Facilities Management</h1>
                  <p class='card-detail'>
                    Our services helps you manage and optimise your real estate
                    properties, and equip you to best evaluate important real
                    estate-related business questions.
                  </p>
                  <button class='card-button'>learn more</button>
                </div>
              </div>
            </div>

            {/* <!--  --> */}
            <div class='service-item card'>
              <div class='card-content'>
                <img src='./icons/finance_audit.png' alt='' class='card-icon' />
                <div class='card-box'>
                  <h1 class='card-title'>Financial & Asset Audit</h1>
                  <p class='card-detail'>
                    We make the provision of timely, accurate and invaluable
                    financial information our top priority, so you and your
                    organisation can take informed business decisions always.
                  </p>
                  <button class='card-button'>learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='annual' id='annual'>
        <div class='content curve'>
          <div class='content-box'>
            <div>
              <h1 class='annual_title'>Creating Value</h1>
              <h3 class='annual_detail'>
                Driven by knowledge, expertise and research-led decision making,
                we aim to create long-term value for all our stakeholders.
              </h3>
            </div>
          </div>
          <div class='content-img'>
            <img src='./img/section_img/newsletter_img.jpg' alt='' />
          </div>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='ideal' id='ideal'>
        <div class='content'>
          <div class='section-head'>
            <h1 class='section_title'>Discover your ideal properties</h1>
            <div class=''>
              <p class='section_detail'>
                Our comprehensive listings offer a wealth of options to suit
                your unique preferences and requirements. With our commitment to
                quality and attention to detail, you can trust that each
                property has been thoroughly vetted to ensure a seamless and
                satisfying experience as you find your perfect home or
                investment opportunity.
              </p>
            </div>
          </div>

          <div class='section-body'>
            {/* <!--  --> */}
            <div class='ideal-item card'>
              <div class='card-content'>
                <img src='./icons/invest.png' alt='' class='card-icon' />
                <div class='card-box'>
                  <h1 class='card-title'>Investment Portfolios</h1>
                  <p class='card-detail'>
                    Our comprehensive listings offer a wealth of options to suit
                    your unique preferences and requirements. With our
                    commitment to quality and attention to detail, you can trust
                    that each property has been thoroughly vetted
                  </p>
                  <Link to='#'>
                    <button class='card-button'>explore portfolio</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <!--  --> */}
            <div class='ideal-item card' style='background-color: white'>
              <div class='card-content'>
                <img src='./icons/leasing.png' alt='' class='card-icon' />
                <div class='card-box'>
                  <h1 class='card-title'>Explore Lease Properties</h1>
                  <p class='card-detail'>
                    Our services helps you manage and optimise your real estate
                    properties, and equip you to best evaluate important real
                    estate-related business questions.
                  </p>
                  <Link to='#'>
                    <button class='card-button'>view properties</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Home
