function Loading() {
    return (
        <div className="bg-body rounded shadow-lg align-self-center d-flex flex-column gap-3 align-items-center p-5">
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status"></div>
            <span className="d-flex flex-column align-items-center">
              <span className='fs-3 fw-medium'>Harap Tunggu</span>
              <span className='fs-5'>Halaman sedang dimuat...</span>
            </span>
          </div>
    )
}

export default Loading