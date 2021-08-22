import { Component } from 'react';
import Styles from './Header.module.css';
import imgHeader from '../../imgs/avataaars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    render() {
        return(
            <header className={`${Styles.myHeader}`} id="home">
                <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                    <div className={`${Styles.imgg}`}>
                        <img className="img-fluid" src={imgHeader} />
                    </div>
                    <h1>Start React</h1>
                    <div className={`${Styles.star}`}>
                        <FontAwesomeIcon icon={['fas', 'star']} />
                    </div>
                    <p className="mb-5">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
        )
    }
}

export default Header