const Header = ({
    id,
    content
}) => {
    
    return (
        <section id={id} className='header-container'>
            <div className='header-wrapper'>

                <div className='header-account'>
                    <p>Account</p>
                </div>

            </div>
        </section>
    );
}

export default Header;