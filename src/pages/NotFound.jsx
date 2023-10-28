import Image404 from '../assets/error-404.png'

function NotFound() {

  const contStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: '100px',
    paddingBottom: '100px'
  }

  const imgStyles = {
    maxHeight: '50vh',
    display: 'block'
  }

  return (
    <div className="white" style={{ ...contStyles }}>
      <img src={Image404} alt="not found" style={{ ...imgStyles }} />
      <h1>Not Found</h1>
    </div>
  )
}

export default NotFound