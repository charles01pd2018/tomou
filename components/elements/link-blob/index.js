// dependencies
import Link from 'next/link';
import classNames from 'classnames';

const LinkBlob = ({
    className,
    linkDestination,
    linkText
}) => {

    /* CLASSNAMES */
    const linkBlobClasses = classNames( 'link-blob', className )

    return (
        <Link href={linkDestination}>
            <a>
                <div className={linkBlobClasses}>
                    {linkText}
                </div>
            </a>
        </Link>   
    );
}

export default LinkBlob;