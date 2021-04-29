// elements
import Sticky from './sticky';


const stickiesContent = {
    stickiesItems: [
        {
            stickyIcon: {
                iconPath: '/static/icons/note-taking.svg',
                iconAltText: 'note icon'
            },
            stickyLabel: 'Note 1',
        },
        {
            stickyIcon: {
                iconPath: '/static/icons/note-taking.svg',
                iconAltText: 'note icon'
            },
            stickyLabel: 'Note 2',
        },
        {
            stickyIcon: {
                iconPath: '/static/icons/note-taking.svg',
                iconAltText: 'note icon'
            },
            stickyLabel: 'Note 3',
        },
    ]
};

const NotesStickies = ({
    id,
    content
}) => {
    
    return (
        <section id={id} className='stickies-container'>
                {
                    stickiesContent.stickiesItems.map( ( stickiesItem ) => (
                        <Sticky key={stickiesItem.stickyLabel} content={stickiesItem} />
                    ) )
                }
        </section>
    );
}

export default NotesStickies;