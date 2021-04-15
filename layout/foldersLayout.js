// components
import { Header } from '../components/layout';

const FoldersLayout = ({
    children,
    user
}) => {

    return (
        <>
            <Header id='header-nav' user={user} />
            {/*THIS MIGHT BE REDUNDANT - CHECK THE NEXTJS DOCS*/}
            <main className='site-content'>{children}</main>
        </>
    );
}

export default FoldersLayout;