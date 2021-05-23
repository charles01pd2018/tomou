// dependencies
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
// installed elements
import TextareaAutosize from 'react-textarea-autosize';


const Textarea = ( {
    className,
    value,
    onChange,
    disableEnterKey=true,
} ) => {

    /* HOOKS */
    const textareaRef = useRef( null );

    /* FUNCTIONS */
    const handleDisableEnterKey = ( event ) => {
        if ( event.keyCode == 13 ) event.preventDefault();
    }

    useEffect( () => {
        let textarea = textareaRef.current;

        if ( disableEnterKey ) textarea.addEventListener( 'keypress', handleDisableEnterKey );
        return () => {
            if ( disableEnterKey ) textarea.removeEventListener( 'keypress', handleDisableEnterKey );
        }
    }, [] );

    /* CLASSNAMES */
    const textareaWrapperClasses = classNames( 'text-area-wrapper', className );

    return (
        <TextareaAutosize ref={textareaRef} className={textareaWrapperClasses}
            value={value}
            onChange={onChange} />
    );
}

export default Textarea;