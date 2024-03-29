import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Saša Lalić</a></h1>
              <span className="email"><i className="icon-mail"></i> sasalali@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/sasa.lalic.9" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                {/*<li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>*/}				
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/sasalalic/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/darionathor" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                {/*<<li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>*/}	
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Thanks Dhruv Barochiya for helping me get into react
              </small></p>
                {/*<Something coming soon !!*/}
				<div>
				  <p><small>Icons made by <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">Lucy G</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				  </small></p>
			  </div>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
