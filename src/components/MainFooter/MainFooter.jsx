import { Component } from 'react';
import Styles from './MainFooter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class MainFooter extends Component {
    render() {
        return(
            <section className={`${Styles.mainFooter} text-center text-white py-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`${Styles.item}`}>
                                <h2>Location</h2>
                                <p>2215 John Daniel Drive Clark, MO 65243</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className={`${Styles.item}`}>
                                <h2>Around the web</h2>
                                <div className={`${Styles.iconContainer}`}>
                                    <div className={`${Styles.myIcon} ml-0`}>
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    </div>
                                    <div className={`${Styles.myIcon}`}>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                                    </div>
                                    <div className={`${Styles.myIcon}`}>
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    </div>
                                    <div className={`${Styles.myIcon}`}>
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className={`${Styles.item} mb-0`}>
                                <h2>About Freelancer</h2>
                                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainFooter