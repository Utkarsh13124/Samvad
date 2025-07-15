import React from 'react'
import "../App.css"

export default function LandingPage() {
  return (
      <div className='landingPageContainer'>
          <nav>
              <div className='navHeader'>
                  <h2>Samvaad Video Call</h2>
              </div>
              <div className='navlist'>
                  <p>Join as Guest</p>
                  <p>Register</p>
                  <div role='button'> 
                      <p>Login</p>
                  </div>
              </div>
          </nav>

          <div className="landingMainContainer">
              <div>
                  <h1><span style={{ color: '#FF9839' }}>Connect</span> with your loved Ones</h1>
                  <p>Cover a distance by Samvaad Video Call</p>
                  <div role='button'>
                      <Link to={"/auth"}>Get Started</Link>
                  </div>
              </div>
              <div>
                  <img src="/mobile.png" alt="mobile_image" />
              </div>
        </div>
    </div>
  )
}


// <div role='button'>  seo freindly button
{/* <p>Login</p>
</div> */}

