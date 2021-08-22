import { Component } from "react";
import Styles from "./About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {

  render() {
    return (
      <section className={`${Styles.about} py-5`} id="about">
        <div className="container">
         <h2>About</h2>
         <div className={`${Styles.star}`}>
            <FontAwesomeIcon icon={['fas', 'star']} />
         </div>

          <div className="content my-4 mx-auto w-75">
            <div className="row">
              <div className="col-lg-6">
                <div className="info pl-lg-5">
                  <p>
                    Freelancer is a free bootstrap theme created by Start
                    Bootstrap. The download includes the complete source files
                    including HTML, CSS, and JavaScript as well as optional SASS
                    stylesheets for easy customization.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="info">
                  <p>
                    You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address
                    to the contact form to make it fully functional!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
