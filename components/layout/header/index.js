// dependencies
import { useSession } from 'next-auth/client';


const Header = ({
    id,
    user
}) => {

    return (
        <section id={id} className='header-container'>
            <div className='header-wrapper'>

                <div className='header-account'>
                    <p>{user ? user.name : 'Joe Shmoe'}</p>
                </div>

            </div>
        </section>
    );
}

export default Header;