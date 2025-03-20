import { Link } from 'react-router-dom'

//
import Page from '../components/ui/Page'

const NotFound = () => {
  return (
    <Page>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>
          This is not the page you are looking for.
        </p>
        <Link
          to='/'
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            fontSize: '1rem',
            color: 'white',
            backgroundColor: 'black',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Go Home
        </Link>
      </div>
    </Page>
  )
}

export default NotFound
