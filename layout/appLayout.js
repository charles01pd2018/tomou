// components
import { RightMenu, Header } from '../components/layout';

const AppLayout = ({
    children,
    user
}) => {

    return (
        <>
            <RightMenu id='app-nav' />
            <Header id='account-nav' user={user} />
            {/*THIS MIGHT BE REDUNDANT - CHECK THE NEXTJS DOCS*/}
            <main className='site-content'>{children}</main>
        </>
    );
}

export default AppLayout;