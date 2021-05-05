// dependencies
import Link from 'next/link';
import classNames from 'classnames';

const LinkBlob = ({
    className,
    linkDestination,
    linkText,
    iconType
}) => {

    /* CLASSNAMES */
    const linkBlobClasses = classNames( 'link-blob', className )

    return (
        <Link href={linkDestination}>
            <a>
                <div className={linkBlobClasses}>
                    {
                        iconType && (
                            <object className='link-blob-icon' type="image/svg+xml" data={`/static/icons/${iconType}.svg`} alt={`${iconType} icon`} role='presentation'>
                                {iconType} icon
                            </object> )
                    }
                    <span className='link-blob-text'>{linkText}</span>
                </div>
            </a>
        </Link>   
    );
}

export default LinkBlob;