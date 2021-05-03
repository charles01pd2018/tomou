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
    mutation AddFolder($input: NewFolderInput!) {
        newFolder(input: $input) {
            _id
            userID
            name
            creationDate
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
    const { 
        loading: folderListLoading, 
        error: folderListError, 
        data: folderListData, 
        refetch: refetchFolderList } = useQuery( GET_FOLDERS );

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
            userID: session.user.id,
            ...input,
            creationDate: new Date().toDateString(),
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
    const { title, description } = content;

    console.log( folderListData );

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
                    <Modal id='add-folder' content={ { label: 'Folder Name' } } submitText='Create Folder' onSubmit={handleAddFolder} />
                    <GridLinks id='mongo-folder-links' content={{ items: folderListData.folderList }} data={folderListData} setState={handleFolderSort} />
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