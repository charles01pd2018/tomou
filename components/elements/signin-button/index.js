// dependencies
import classNames from 'classnames';
import { signIn } from 'next-auth/client';


const SigninButton = ({
    className,
    buttonType
}) => {

    const lowerCaseButtonType = buttonType.toLowerCase();

    /* CLASSNAMES */
    const signInButtonClasses = classNames(`${lowerCaseButtonType}-button`, className );

    return (
        <button className={signInButtonClasses} onClick={ () => { signIn( lowerCaseButtonType ) } }>
            Sign in with {buttonType}
        </button>
    );
}

export default SigninButton;