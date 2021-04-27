// dependencies
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from 'array-move';
// elements
import { LinkBlob } from '../elements';


const GridLinks = ({
    id,
    content: { folderNames=[] },
    setShownFolders,
}) => {

    /* CONSTANTS */
    const linkDestination = '/';

    /* HIGHER ORDER COMPONENTS */
    const DraggableLink = SortableElement( ( { name } ) => (
        <LinkBlob linkText={name} linkDestination={linkDestination} />
    ) );

    const SortableGrid = SortableContainer( ( { folderNames } ) => (
        <section id={id} className='grid-links-container'>
        {
            folderNames.map( ( { name }, index ) => (
                <DraggableLink key={`${name}-${index}`} index={index} name={name} />
            ) )
        }
        </section>
    ) );

    const onSortEnd = ( { oldIndex, newIndex } ) => {
        setShownFolders( state => arrayMove( state, oldIndex, newIndex ) );
    }
    
    return (
        <SortableGrid folderNames={folderNames} distance={2} axis='xy' onSortEnd={onSortEnd} />
    );
}

export default GridLinks;