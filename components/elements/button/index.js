// dependencies
import classNames from 'classnames';


const Button = ({
    className,
    content: { text='' },
    type='submit',
}) => {

    /* CLASSNAMES */
    const buttonClasses = classNames( 'button-wrapper', className );

    return (
        <button className={buttonClasses} type={type}>
            {text}
        </button>
    );
}

export default Button;