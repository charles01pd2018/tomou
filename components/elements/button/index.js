// dependencies
import classNames from 'classnames';


const Button = ({
    children,
    className,
    content,
    type='submit',
}) => {

    /* CLASSNAMES */
    const buttonClasses = classNames( 'button-wrapper', className );

    /* CONTENT */
    const { text } = content || '';

    return (
        <button className={buttonClasses} type={type}>
           {text}
           {children}
        </button>
    );
}

export default Button;