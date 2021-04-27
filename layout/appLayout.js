// components
import { Header } from '../components/layout';
import { LinkPoof } from '../components/poof';

const HeaderContent = {
    navItems: [
        {
            iconPath: '/static/icons/tasks.svg',
            navText: 'tasks',
            navDestination: '/app/tasks'
        },
        {
            iconPath: '/static/icons/notes.svg',
            navText: 'notes',
            navDestination: '/app/notes'
        },
        {
            iconPath: '/static/icons/storage.svg',
            navText: 'storage',
            navDestination: '/app/storage'
        },
    ]
};

const LinkPoofContent = {
    linkItem: {
        linkText: 'App',
        linkDestination: '/app',
    },
};

const AppLayout = ({
    children,
    user
}) => {

    return (
        <>
            <Header id='account-nav' content={HeaderContent} user={user} />
            {/*THIS MIGHT BE REDUNDANT - CHECK THE NEXTJS DOCS*/}
            <main className='site-content'>{children}</main>
            <LinkPoof id='app-redirect-poof' content={LinkPoofContent} />
        </>
    );
}

export default AppLayout;