const Sidebar = ({
    id,
    // content: { sidebarIcon, sidebarText }
}) => {
    
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

    return (
        <section id={id} className='sidebar-container'>
                {
                    sidebarContent.sidebarItems.map( ({ sidebarIcon, sidebarText }) => (
                        <div key={sidebarText} className='sidebar-item'>
                            <img className='sidebar-icon' src={sidebarIcon.iconPath} alt={sidebarIcon.iconAltText} />
                            <p>{sidebarText}</p>
                        </div>
                    ) )
                }
        </section>
    );
}

export default Sidebar;