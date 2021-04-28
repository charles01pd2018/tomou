// dependencies
import { useRouter } from 'next/router';
import Link from 'next/link';

/* MIGHT NOT NEED THIS IF USING IDS FOR URL */
const convertTextToURLSlug = ( text ) => {
    const lowerCaseText = text.toLowerCase();
    return lowerCaseText.replace(/\s/g, '-'); // replaces all occurences of spaces with dashes ( left argument = reg expression for spaces using global thingy, right is what is replacing the spaces )
}

const Sticky = ({
    content: {  stickyIcon, stickyLabel }
}) => {

    const router = useRouter();
    // add pathname to the new note by parsing the string

    return (
        <Link href='/'>
            <div className='sticky-item'>
                <a>
                    <object className='sticky-icon' type="image/svg+xml" data={stickyIcon.iconPath} alt={stickyIcon.iconAltText}>
                        Sticky Tab Icon
                    </object>
                    <p>{stickyLabel}</p>
                </a>
            </div>
        </Link> 

    );
}

export default Sticky;