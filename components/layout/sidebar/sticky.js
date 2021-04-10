// dependencies
import { useState } from 'react';
import Link from 'next/link';

const Sticky = ({
    content: {  stickyIcon, stickyLabel }
}) => {

    const convertTextToURLSlug = ( text ) => {
        const lowerCaseText = text.toLowerCase();
        return lowerCaseText.replace(/\s/g, '-'); // replaces all occurences of spaces with dashes ( left argument = reg expression for spaces using global thingy, right is what is replacing the spaces )
    }

    // const [ stickyActive, setStickyActive ] = useState(true);

    // const toggleSticky = () => {
    //     setStickyActive(false);
    // }

    return (
        <Link href={`#${convertTextToURLSlug(stickyLabel)}`}>
            <div className='sidebar-item'>
                <a>
                    <object className='sidebar-icon' type="image/svg+xml" data={stickyIcon.iconPath} alt={stickyIcon.iconAltText}  >
                        Sticky Tab Icon
                    </object>
                    <p>{stickyLabel}</p>
                </a>
            </div>
        </Link> 

    );
}

export default Sticky;