// dependencies
import Link from 'next/link';
import classNames from 'classnames';

const LinkBlob = ({
    className,
    blobClassName,
    linkDestination,
    linkText
}) => {

    /* CLASSNAMES */
    const linkBlobWrapperClasses = classNames( 'link-blob-wrapper', className );
    const linkBlobClasses = classNames( 'link-blob', blobClassName );

    return (
        <div className={linkBlobWrapperClasses}>
            <Link href={linkDestination}>
                <a>
                    <div className={linkBlobClasses}>
                        {linkText}
                    </div>
                </a>
            </Link>   
        </div>
    );
}

export default LinkBlob;