// partials
import Sticky from './sticky';

const sidebarContent = {
    sidebarItems: [
        {
            stickyIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'note icon'
            },
            stickyLabel: 'Note 1',
        },
        {
            stickyIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'note icon'
            },
            stickyLabel: 'Note 2',
        },
        {
            stickyIcon: {
                iconPath: '/static/icons/task.svg',
                iconAltText: 'note icon'
            },
            stickyLabel: 'Note 3',
        },
    ]
};

const Sidebar = ({
    id,
    content
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