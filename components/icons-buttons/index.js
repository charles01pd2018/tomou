// dependencies
import classNames from 'classnames';
import { useRef, useLayoutEffect } from 'react';


const IconButtons = ({
    id,
    content: { defaultIconButton='', iconsButtonsTypes=[] },
    currentButton,
    setState,
}) => {

    /* HOOKS */
    const defaultIconButtonRef = useRef( null );

    /* FUNCTIONS */
    const handleSetIconButton = ( viewType ) => {
        setState( viewType );
    }

    useLayoutEffect( () => { 
        // defaultIconButtonRef.current.click();
    }, [] );

    /* CONTENT */
    const defaultIconButtonAltText = `${defaultIconButtonRef} icon`;
    const defaultIconButtonClasses = classNames( 'icons-buttons-item', currentButton === defaultIconButton && 'icon-button-active' );

    return (
        <section id={id} className='icons-buttons-container'>
            <div className='icons-buttons-wrapper'>
                <div className='icons-buttons-item-wrapper'>
                    <a ref={defaultIconButtonRef} href={`#${defaultIconButton}`}>
                        <button className={defaultIconButtonClasses} onClick={() => handleSetIconButton(defaultIconButton)}>
                            <object className='icons-buttons-icon' type="image/svg+xml" data={`/static/icons/${defaultIconButton}.svg`} alt={defaultIconButtonAltText}>
                                {defaultIconButtonAltText}
                            </object>
                        </button>
                    </a>
                    {
                        iconsButtonsTypes.map( ( viewType ) => {
                            /* CONTENT */
                            const iconAltText = `${viewType} icon`;
                            const taskIconButtonClasses = classNames( 'icons-buttons-item', currentButton === viewType && 'icon-button-active' );
                            return (
                                <a href={`#${viewType}`}>
                                    <button className={taskIconButtonClasses} onClick={() => handleSetIconButton(viewType)}>
                                            <object className='icons-buttons-icon' type="image/svg+xml" data={`/static/icons/${viewType}.svg`} alt={iconAltText}>
                                                {iconAltText}
                                            </object>
                                    </button>
                                </a>
                            );
                        } )
                    }
                </div>
            </div>
        </section>
    );
}

export default IconButtons;