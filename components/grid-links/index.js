// dependencies
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from 'array-move';
// elements
import { LinkBlob } from '../elements';


const GridLinks = ({
    id,
    content: { items=[] },
    data,
    setState,
}) => {

    /* CONSTANTS */
    const linkDestination = '/';

    /* HIGHER ORDER COMPONENTS */
    const DraggableLink = SortableElement( ( { name } ) => (
        <LinkBlob className='light-scale-in-animate grid-link' linkText={name} linkDestination={linkDestination} />
    ) );

    const SortableGrid = SortableContainer( ( { items } ) => (
        <section id={id} className='grid-links-container'>
        {
            items.map( ( { name }, index ) => (
                <DraggableLink key={`${name}-${index}`} index={index} name={name} />
            ) )
        }
        </section>
    ) );

    const onSortEnd = ( { oldIndex, newIndex } ) => {
        setState( arrayMove( data, oldIndex, newIndex ) );
    }
    
    return (
        <SortableGrid items={items} distance={2} axis='xy' onSortEnd={onSortEnd} />
    );
}

export default GridLinks;