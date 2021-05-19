// dependencies
import classNames from 'classnames';
import { useRef, useEffect } from 'react';


const IconButtons = ({
    id,
    content: { iconsButtonsTypes=[] },
    currentButton,
    setState,
}) => {

    /* FUNCTIONS */
    const handleSetIconButton = ( viewType ) => {
        setState( viewType );
    }

    return (
        <section id={id} className='icons-buttons-container'>
            <div className='icons-buttons-wrapper'>
                <div className='icons-buttons-item-wrapper'>
                    {
                        iconsButtonsTypes.map( ( viewType ) => {
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