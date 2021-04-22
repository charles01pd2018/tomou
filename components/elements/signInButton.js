// dependencies
import classNames from 'classnames';
import { signIn } from 'next-auth/client';


const SignInButton = ({
    className,
    buttonType
}) => {

    const lowerCaseButtonType = buttonType.toLowerCase();

    /* CLASSNAMES */
    const signInButtonClasses = classNames(`${lowerCaseButtonType}-button`, className );

    return (
        <div>
            <button className={signInButtonClasses} onClick={ () => { signIn( lowerCaseButtonType ) } }>
                Sign in with {buttonType}
            </button>
        </div>
    );
}

export default SignInButton;