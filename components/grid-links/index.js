// dependencies
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from 'array-move';
// elements
import { LinkBlob } from '../elements';


const GridLinks = ({
    id,
    content: { items=[] },
    setState,
}) => {

    /* CONSTANTS */
    const linkDestination = '/';

    /* HIGHER ORDER COMPONENTS */
    const DraggableLink = SortableElement( ( { name, itemType } ) => (
        <LinkBlob className='light-scale-in-animate grid-link' 
        linkText={name} 
        linkDestination={linkDestination}
        iconType={itemType.toLowerCase()} />
    ) );

    const SortableGrid = SortableContainer( ( { items } ) => (
        <section id={id} className='grid-links-container'>
        {
            items.map( ( { name, __typename}, index ) => (
                <DraggableLink key={`${name}-${index}`} index={index} 
                name={name}
                itemType={__typename} />
            ) )
        }
        </section>
    ) );

    const onSortEnd = ( { oldIndex, newIndex } ) => {
        setState( arrayMove( items, oldIndex, newIndex ) );
    }
    
    return (
        <SortableGrid items={items} distance={2} axis='xy' onSortEnd={onSortEnd} />
    );
}

export default GridLinks;