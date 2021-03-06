// dependencies
import { useSession } from 'next-auth/client';
import { gql } from '@apollo/client'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { nanoid } from 'nanoid';
import Head from 'next/head';
// components
import { GridLinks, Modal, NotAuth } from '../../../components';
// layout
import { AppLayout } from '../../../layout';


/* SCHEMAS */
/* FOLDER */
const FOLDER_DETAILS = gql`
    fragment FolderDetails on Folder {
        _id
        name
        creationDate
        interactionDate
        updateDate
    }
`;
const GET_FOLDERS = gql`
    query GetFolders {
        folderList {
            ...FolderDetails
        }
    }
    ${FOLDER_DETAILS}
`;
const ADD_FOLDER = gql`
    mutation AddFolder($input: NewFolderInput!) {
        newFolder(input: $input) {
            ...FolderDetails
        }
    }
    ${FOLDER_DETAILS}
`;

const INTERACT_FOLDER = gql`
    mutation UpdateFolderInteract($input: UpdateFolderInteractinput!) {
        updateFolderInteract(input: $input) {
            _id
            interactionDate
        }
    }
`;


const FolderDashboard = ( {
    content,
} ) => {
    
    /* CHECK USER SESSION */
    const [ session, loading ] = useSession();
    if ( loading ) return null; 
    if ( !session && !loading ) return <NotAuth id='not-auth' />


    /* QUERIES */
    const { 
        loading: folderListLoading, 
        error: folderListError, 
        data: folderListData, 
        refetch: refetchFolderList } = useQuery( GET_FOLDERS );

    /* MUTATIONS */
    const [ addFolder ] = useMutation( ADD_FOLDER, {
          update( cache, { data: { newFolder } } ) {
              const { folderList } = cache.readQuery( { query: GET_FOLDERS } );
              cache.writeQuery( {
                  query: GET_FOLDERS,
                  data: { folderList: [ newFolder, ...folderList ] },
              } );
          }
    } );

    // const [ reorderFolders ] = useMutation( _, {
    //     update( cache, __) {
    //         cache.writeQuery( { 
    //             data: { folderList: [ 'newFolderList' ] }
    //         } )
    //     }
    // } );
    
    if ( folderListLoading ) return null;
    if ( folderListError ) return 'error';

    const handleAddFolder = ( input ) => {
        const inputFolder = {
            _id: nanoid(12),
            ...input,
            creationDate: new Date(),
        };
        
          addFolder( { 
            variables: { input: inputFolder },
            optimisticResponse: {
                __typeName: 'Mutation',
                newFolder: {
                    __typename: 'Folder',
                    ...inputFolder
                }
            },
          } );
    }

    const handleFolderSort = ( newFolderList ) => {

    }


    /* CONTENT */
    const { title, description, modalContent } = content;
    const { folderList } = folderListData;

    return (
        <>
            <Head>
                <title>tomou Folder Dashboard</title>
            </Head>
            <AppLayout user={session.user}>
                <div className='screen-container text-center'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Modal id='add-folder-modal' content={modalContent} onSubmit={handleAddFolder} />
                    <GridLinks id='mongo-folder-links' content={{ items: folderList }} setState={handleFolderSort} />
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
    modalContent: {
        label: 'Folder Name',
        submitText: 'Create Folder',
        buttonContent: {
            text: 'Add Folder',
        }
    }
};

export function getStaticProps() {
    return { 
        props: {
            content: FolderDashboardContent,
        }
     };
}