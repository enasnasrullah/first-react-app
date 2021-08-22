import { Component } from 'react';
import Styles from './Portfolio.module.css'
import item1 from '../../imgs/1.cabin.png'
import item2 from '../../imgs/2.cake.png'
import item3 from '../../imgs/3.circus.png'
import item4 from '../../imgs/4.game.png'
import item5 from '../../imgs/5.safe.png'
import item6 from '../../imgs/6.submarine.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Portfolio extends Component {

    render() {
        return(
            <div className={`${Styles.portfolio} text-center py-5`} id="portfolio">
                <div className="container">
                    <h2>Portfolio</h2>
                    <div className={`${Styles.star}`}>
                        <FontAwesomeIcon icon={['fas', 'star']} />
                    </div>
                    
                    <div className="row my-4">
                        <div className="col-md-6 col-lg-4">
                            <div className={`${Styles.item}`}>
                                <img className="img-fluid" src={item1} />
                                <div className={`${Styles.overlay}`}>+</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`${Styles.item}`}>
                                <img className="img-fluid" src={item2} />
                                <div className={`${Styles.overlay}`}>+</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`${Styles.item}`}>
                                <img className="img-fluid" src={item3} />
                                <div className={`${Styles.overlay}`}>+</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`${Styles.item}`}>
                                <img className="img-fluid" src={item4} />
                                <div className={`${Styles.overlay}`}>+</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`${Styles.item}`}>
                                <img className="img-fluid" src={item5} />
                                <div className={`${Styles.overlay}`}>+</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className={`${Styles.item}`}>
                                <img className="img-fluid" src={item6} />
                                <div className={`${Styles.overlay}`}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio