// dependencies
import Link from 'next/link';

const LinkBlob = ({
    linkDestination,
    linkText
}) => {

    return (
        <Link href={linkDestination}>
            <a>
                <div className='link-blob'>
                    {linkText}
                </div>
            </a>
        </Link>   
    );
}

export default LinkBlob;