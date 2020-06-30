import React from "react";
import "./SideNavClass.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class SideNavClass extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }


  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })
    document.addEventListener("keydown", this.handleEscKey)
  }

  closeNav = () => {
    this.setState({
      showNav: false
    })
    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }



  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "250px" : "0" }

    return (
      <>
        <nav>
          <span
            onClick={this.openNavClick}
            className="open-nav">
            &#9776;
        </span>

          <div
            onClick={this.navCoverClick}
            className="nav-cover"
            style={navCoverStyle} />
          <div name="side-nav" className="side-nav" style={sideNavStyle}>
            <Router>
              <a href="#" onClick={this.closeNavClick} className="close-nav">&times;</a>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>


              <Switch>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </Router>

          </div>
        </nav>
      </>
    )
  }
}

function About() {
  return <h2>About</h2>;
}

export default SideNavClass