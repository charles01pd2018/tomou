// partials
import Sticky from './sticky';

const sidebarContent = {
    sidebarItems: [
        {
            sidebarIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'task icon'
            },
            sidebarText: 'Tasks'
        },
        {
            sidebarIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'task icon'
            },
            sidebarText: 'Tasks'
        },
        {
            sidebarIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'task icon'
            },
            sidebarText: 'Tasks'
        },
        {
            sidebarIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'task icon'
            },
            sidebarText: 'Tasks'
        },
        {
            sidebarIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'task icon'
            },
            sidebarText: 'Tasks'
        },
        {
            sidebarIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'task icon'
            },
            sidebarText: 'Tasks'
        },
    ]
};

const Sidebar = ({
    id,
    // content: { sidebarIcon, sidebarText }
}) => {
    
    return (
        <section id={id} className='sidebar-container'>
                {
                    sidebarContent.sidebarItems.map( ( sidebarItem ) => (
                        <Sticky content={sidebarItem} />
                    ) )
                }
        </section>
    );
}

export default Sidebar;