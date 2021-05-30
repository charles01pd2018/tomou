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
    doubleClickEdit=true,
} ) => {

    /* HOOKS */
    const textareaRef = useRef( null );

    /* FUNCTIONS */
    const handleDisableEnterKey = ( event ) => {
        if ( event.keyCode == 13 ) event.preventDefault();
    }

    const handleDisableSingleClick = ( event ) => {
        if ( event.type === 'click' ) event.preventDefault();
        event.preventDefault();
    }

    const handleDoubleClickFocus = ( event ) => {
        console.log( 'hi ');
    }

    useEffect( () => {
        let textarea = textareaRef.current;

        if ( disableEnterKey ) textarea.addEventListener( 'keypress', handleDisableEnterKey );
        if ( doubleClickEdit ) {
            textarea.addEventListener( 'click', handleDisableSingleClick );
            textarea.addEventListener( 'dblclick', handleDoubleClickFocus );
        }
        return () => {
            if ( disableEnterKey ) textarea.removeEventListener( 'keypress', handleDisableEnterKey );
            if ( doubleClickEdit ) {
                textarea.removeEventListener( 'click', handleDisableSingleClick );
                textarea.removeEventListener( 'dblclick', handleDoubleClickFocus );
            }
        }
    }, [] );

    /* CLASSNAMES */
    const textareaWrapperClasses = classNames( 'text-area-wrapper', className );

    return (
        <TextareaAutosize ref={textareaRef} className={textareaWrapperClasses}
            value={value}
            onChange={onChange}
            onClick={handleDisableSingleClick} />
    );
}

export default Textarea;