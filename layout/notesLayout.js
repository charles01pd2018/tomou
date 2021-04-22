// components
import { Header, Sidebar } from '../components/layout';


var SITE_NAME = 'JAWNZ';

const NotesLayout = ({
    children,
    content,
    user
}) => {

    return (
        <>
            <Header id='header-nav' user={user} />
            <Sidebar id='side-nav' content={content} /> 
            {/*THIS MIGHT BE REDUNDANT - CHECK THE NEXTJS DOCS*/}
            <main className='site-content'>{children}</main>
        </>
    );
}

export default NotesLayout;