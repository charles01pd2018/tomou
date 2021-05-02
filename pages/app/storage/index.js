// dependencies
import { useSession } from 'next-auth/client';
import { gql } from '@apollo/client'
import { useQuery, useMutation } from '@apollo/react-hooks';
import Head from 'next/head';
// components
import { GridLinks, Modal, NotAuth } from '../../../components';
// layout
import { AppLayout } from '../../../layout';

/* SCHEMAS */
const GET_FOLDERS = gql`
    query GetFolders {
        folderList {
            _id
            name
            creationDate
        }
    }
`;

const ADD_FOLDER = gql`
    mutation AddFolder($name: String!) {
        newFolder(name: $name) {
            name
        }
    }
`;

const FolderDashboard = ( {
    content,
} ) => {
    
    const [ session, loading ] = useSession();
    if ( loading ) return null; 
    if ( !session && !loading ) return <NotAuth id='not-auth' />


    // i think that i am going to need to use refetch if i am writing this on multiple devices
    const { loading: dataLoading, error: fetchError, data: folderListData, refetch: refetchFolderList } = useQuery( GET_FOLDERS );
    const [ addFolder, { data: newFolderData } ] = useMutation( ADD_FOLDER );
    
    if ( dataLoading ) return null;
    if ( fetchError ) return 'error';


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
                    <Modal id='add-folder' content={ { label: 'Folder Name' } } />
                    <GridLinks id='mongo-folder-links' content={{ items: folderListData.folderList }} />
                </div>
            </AppLayout>
        </>
    );
}

export default FolderDashboard;


/* CONTENT */
const FolderDashboardContent = {
    title: 'Folder Dashboard',
    description: 'This is where the user will see all the folder they have :-D',
};

export function getStaticProps() {

    return { 
        props: {
            content: FolderDashboardContent,
        }
     };
}