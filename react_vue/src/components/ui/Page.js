//
import Header from './Header'
import Footer from './Footer'

//

//
const page = ({ children }) => {
  return (
    <main>
      <Header />

      {children}

      <Footer />
    </main>
  )
}

export default page
