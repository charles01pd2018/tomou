// dependencies
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

const Header = ({
    id,
    content: { navItems },
    user
}) => {

    /* HOOKS */
    const [ isHeaderOpen, setIsHeaderOpen ] = useState( true );

    const handleHeaderToggle = () => {
        setIsHeaderOpen( state => !state );
    }

    /* CLASSNAMES */
    const headerContainerClasses = classNames( 'header-container', isHeaderOpen ? 'header-open' : 'header-closed' );

    return (
        <section id={id} className={headerContainerClasses}>
            <div className='header-wrapper'>

                <div className='header-account-wrapper'>
                    <p>{user ? user.name : 'Joe Shmoe'}</p>
                </div>

                <nav className='header-nav-wrapper' aria-label='app navigation'>
                    {
                        navItems.map( navItem => {
                            /* CONTENT */
                            const { iconPath, navText, navDestination } = navItem;
                            const iconAltText = `${navText} icon`;

                            return (
                                <Link key={navDestination} href={navDestination}>
                                    <a>
                                        <div className='header-nav-item'>
                                            <object className='header-nav-icon' type="image/svg+xml" data={iconPath} alt={iconAltText}>
                                                {iconAltText}
                                            </object>
                                            <p className='text-sm header-nav-text'>{navText}</p>
                                        </div>
                                    </a>
                                </Link>
                            );
                        } )
                    }
                </nav>

                <button className='header-toggle' onClick={handleHeaderToggle}>
                    hello
                </button>

            </div>
        </section>
    );
}

export default Header;