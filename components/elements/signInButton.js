// dependencies
import classNames from 'classnames';
import { signIn } from 'next-auth/client';

const SignInButton = ({
    className,
    buttonType
}) => {

    const signInButtonClasses = classNames(`${buttonType.toLowerCase()}-button`, className );

    return (
        <div>
            <button className={signInButtonClasses} onClick={ () => { signIn( buttonType ) } }>
                Sign in with {buttonType}
            </button>
        </div>
    );
}

export default SignInButton;