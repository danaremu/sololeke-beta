import { Link } from 'react-router-dom'

//
import Page from '../components/ui/Page'

const Properties = () => {
  return (
    <Page>
      {/* <!--  --> */}
      <section class='landing-min' id='properties'>
        <div class='overlay'></div>
        <div class='content'>
          <h2 class='landing_title'>property listings</h2>
        </div>
      </section>

      {/* <!--  --> */}
      <section class='gallery'></section>
    </Page>
  )
}

export default Properties
