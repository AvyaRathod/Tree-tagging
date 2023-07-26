import React from 'react'
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="container">
      <div className="header bg-success p-2 mt-2">
      <Typewriter
            className="fs-bold text-white text-center p-5 mb-5 display-1"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString("GO GREEN")
                .start();
            }}
          />
      </div>
      <div className="horizontal cards">
        <div className="header">
          <h3 className="display-4 fs-bold text-start p-2 mt-2 mb-2">Our Activities</h3>
        </div>
      </div>


      <div class="container hor mt-4">
        <div class="card shadow border-0 p-3">
          <div class="cardbody">
            <div class="row ">
              <div class="col-sm-4">
                            
                <img class="" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-1024x682.jpg" width='300px' alt=""/>
                            
              </div>
              <div class="col-sm-8 ps-2 rel pt-5">
                            <h1 class="fw-bold text-start" >Tree Tagging</h1>
                            <p class="lead text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sint!</p>
                            
                            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container hor mt-4">
        <div class="card border-0 shadow p-3">
          <div class="cardbody">
            <div class="row ">
              
              <div class="col-sm-8 ps-2 rel pt-5">
                            <h1 class="fw-bold text-start" >Tree Tagging</h1>
                            <p class="lead text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sint!</p>
                            
                            
              </div>
              <div class="col-sm-4">
                            
                <img class="" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-1024x682.jpg" width='300px' alt=""/>
                            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container hor mt-4">
        <div class="card border-0 shadow p-3">
          <div class="cardbody">
            <div class="row ">
              <div class="col-sm-4">
                            
                <img class="" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-1024x682.jpg" width='300px' alt=""/>
                            
              </div>
              <div class="col-sm-8 ps-2 rel pt-5">
                            <h1 class="fw-bold text-start" >Lake Tagging</h1>
                            <p class="lead text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sint!</p>
                            
                            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bt-2 p-3">
        <div className="header p-2">
          <h3 className="fs-semibold">About us</h3>
          <hr></hr>
        </div>
        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quos!</p>
      </div>


    </div>
  )
}

export default Home