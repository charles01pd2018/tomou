// dependencies
import Link from 'next/link';

const Header = ({
    id,
    content: { navItems },
    user
}) => {

    return (
        <section id={id} className='header-container'>
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
                                            {navText}
                                        </div>
                                    </a>
                                </Link>
                            );
                        } )
                    }
                </nav>

            </div>
        </section>
    );
}

export default Header;