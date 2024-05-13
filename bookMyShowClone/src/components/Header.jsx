import React from 'react';

const Header = () => {
  return (
    <>
      <header className='pt-4 pb-4'>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" className='logo'/>
            </div>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder='Search for Movies' />
            </div>
            <div className="col-md-2">
              <button type="button" class="btn btn-danger">Sign In</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
