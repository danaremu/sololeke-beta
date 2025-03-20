import { Link } from 'react-router-dom'

//
import Page from '../components/ui/Page'

const Services = () => {
  return (
    <Page>
      {/* <!--  --> */}
      <section class='landing-min' id='services'>
        <div class='overlay'></div>
        <div class='content'>
          <h2 class='landing_title'>our services</h2>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='little_main'>
        <div class='content'>
          <h2>Estate Agency</h2>

          <p>
            The Estate Agency arm of the firm consist of two sub-departments –
            lettings and sales. The Lettings Unit – Assists prospective tenants
            to source and lease all kinds of properties. It also assists
            Landlords in letting or sourcing good quality tenants. The Sales
            Unit – Assists individuals, organizations and corporate bodies in
            the disposal of or purchase of properties.
          </p>
          <Link to='/../properties/'>
            <button class='no-button'>View our properties</button>
          </Link>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='little_main'>
        <div class='content'>
          <h2>Asset Valuation & Advisory Services</h2>

          <p>
            Regardless of your sales or investment choices, you need the
            professional judgement you can trust, behind your eventual decisions
            and our advisory services are there to help you.
          </p>
          <Link to='#contactus'>
            <button class='no-button'>Find out more</button>
          </Link>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='little_main'>
        <div class='content'>
          <h2>Management Services</h2>
          <p>
            We provide an array of property, project and facility management
            services for our clients wishing to embark on new developments or
            effectively managing their existing portfolio.
          </p>
          <Link to='/../insights/'>
            <button class='no-button'>Find out more</button>
          </Link>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='little_main'>
        <div class='content'>
          <h2>Financial & Asset Audit Services</h2>
          <p>
            Information remains the most vital asset in this century. At
            Emmanuel Sololeke Consulting, we make the provision of timely,
            accurate and invaluable financial information our top priority, so
            you and your organisation can take informed business decisions
            always.
          </p>
          <Link to='/../insights/'>
            <button class='no-button'>Find out more</button>
          </Link>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='little_main'>
        <div class='content'>
          <h2>Why Choose Emmanuel Sololeke Consulting</h2>
          <p>
            There are many reasons why you should choose us as your real estate
            partner. Our people, office network and processes are just a few.
          </p>
          <Link to='/../about_us/'>
            <button class='no-button'>Find out more</button>
          </Link>
        </div>
      </section>
    </Page>
  )
}

export default Services
