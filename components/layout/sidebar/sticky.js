// dependencies
import { useState } from 'react';

const Sticky = ({
    content: {  sidebarIcon, sidebarText }
}) => {

    const [ stickyActive, setStickyActive ] = useState(true);

    const toggleSticky = () => {
        setStickyActive(false);
    }

    return (
        <>
        {
            stickyActive === true ? (
                <button key={sidebarText} className='sidebar-item' name='sticky-tab' onClick={toggleSticky}>
                    <object className='sidebar-icon' type="image/svg+xml" data={sidebarIcon.iconPath} alt={sidebarIcon.iconAltText}  >
                        Sticky Tab Icon
                    </object>
                    <p>{sidebarText}</p>
                </button> ) : ( null )
        }
        </>
    );
}

export default Sticky;