// dependencies
import { useSession } from 'next-auth/client';
import gql from 'gql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Head from 'next/head';
// components
import { GridLinks } from '../../../components';
import { Modal } from '../../../components';
// layout
import { AppLayout } from '../../../layout';


/* CONTENT */
const FolderDashboardContent = {
    title: 'Folder Dashboard',
    description: 'This is where the user will see all the folder they have :-D',
};

/* SCHEMAS */
const GET_FOLDERS = gql`
    query folders {
        folderList {
            _id
            name
            creationDate
        }
    }
`;

const FolderDashboard = ( {
    content,
} ) => {
    
    /* CHECK SESSION -> this should probably be its own component */ 
    const [ session, loading ] = useSession();

    if ( loading ) return null; // loading spinner? 

    if ( !session && !loading ) {
        return (
            <div className='screen-container center'>
                <h1>You are not logged in</h1>
            </div>
        )
    }

    const { loading: dataLoading, error, data } = useQuery( GET_FOLDERS, );
    
    if ( dataLoading ) return 'loading'
    if ( error ) return 'error'
    if ( data ) return ( <h1> yay </h1> )


    /* CONTENT */
    const { title, description } = content;

    return (
        <>
            <Head>
                <title>tomou Folder Dashboard</title>
            </Head>
            <AppLayout user={session.user}>
                <div className='screen-container text-center'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <a href='#add-folder'>
                        <button>Add Folder</button>
                    </a>
                    <Modal id='add-folder' onSubmit={handleNewFolder} content={ { label: 'Folder Name' } } />
                    <GridLinks id='mongo-folder-links' content={ { items: shownFolders } } setState={setShownFolders} />
                </div>
            </AppLayout>
        </>
    );
}

export default FolderDashboard;


export function getStaticProps() {
    return { 
        props: {
            content: FolderDashboardContent,
        }
     };
}