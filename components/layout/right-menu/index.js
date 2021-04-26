// dependencies
import { useState } from 'react';
import classNames from 'classnames';

const RightMenu = ({
    id,
    content,
}) => {

    /* HOOKS */
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    const handleMenuToggle = () => {
        setIsMenuOpen( state => !state );
    }

    /* CONTENT */
    const menuStatus = isMenuOpen ? 'open' : 'close'; // used for accessibility puroses
    
    /* CLASSNAMES */
    const rightMenuContainerClasses = classNames( 'right-menu-container', isMenuOpen ? 'right-menu-open' : 'right-menu-closed' );
    const chevronClasses = classNames( 'chevron', isMenuOpen ? 'right' : 'left' );

    /* ACCESIBILITY */
    const menuToggleLabel = `${menuStatus} right menu`;

    console.log( isMenuOpen );

    return ( 
        <aside id={id} className={rightMenuContainerClasses}>
            <button className='right-menu-toggle' onClick={handleMenuToggle} aria-label={menuToggleLabel}>
                <span className='screen-reader'>{menuToggleLabel}</span>
                <span className={chevronClasses}></span>
            </button>
            <nav id='right-menu' className='right-menu-wrapper' aria-label='right-menu'>
                <div className='right-menu-nav-item'>
                    Helo
                </div>
                <div className='right-menu-nav-item'>
                    Helo
                </div>
            </nav>
        </aside>
    );
}

export default RightMenu;