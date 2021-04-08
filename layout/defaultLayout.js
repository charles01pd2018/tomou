const DefaultLayout = ({
    children
}) => {

    var SITE_NAME = 'JAWNZ';

    return (
        <>
            <main className='site-content'>{children}</main>
        </>
    );
}

export default DefaultLayout;