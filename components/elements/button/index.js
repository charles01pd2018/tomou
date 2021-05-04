// dependencies
import classNames from 'classnames';


const Button = ({
    className,
    content: { text='' }
}) => {

    /* CLASSNAMES */
    const buttonClasses = classNames( 'button-wrapper', className );

    return (
        <button className={buttonClasses}>
            {text}
        </button>
    );
}

export default Button;