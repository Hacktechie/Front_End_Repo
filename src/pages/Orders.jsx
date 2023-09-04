function Orders() {
  return (
    <div className="container bg-white p-5 my-5 border" style={{borderRadius: '20px'}}>
      <h4 className="fw-bold mb-5">My orders</h4>

      <div>
        <div className="container d-flex flex-column align-items-center gap-5 my-5 mx-4">
          <span style={{height: '240px', width: '240px'}}>
            <img 
              src="https://assetscdn1.paytm.com/movies_new/_next/static/media/no-shows-found.7f82dc78.svg" 
              alt="No orders"
              style={{height: '100%', width: '100%'}} />
          </span>

          <div className="text-center">
            <h4 className="fw-bold">No Orders</h4>
            <h5 style={{color: 'gray'}}>Looks like you don&apos;t have any movie bookings.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders