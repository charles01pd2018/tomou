// dependencies
import Link from 'next/link';
import classNames from 'classnames';

const LinkBlob = ({
    className,
    linkDestination,
    linkText
}) => {

    const linkBlobClasses = classNames('link-blob-wrapper', className );

    return (
        <div className={linkBlobClasses}>
            <Link href={linkDestination}>
                <a>
                    <span className='link-blob'>
                        {linkText}
                    </span>
                </a>
            </Link>   
        </div>
    );
}

export default LinkBlob;