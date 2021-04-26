// dependencies
import { useState } from 'react';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
// components
import { GridLinks } from '../../../components';
import { Modal } from '../../../components';
// layout
import { FoldersLayout } from '../../../layout';
// database
import connectToMongoDb from '../../../db/connectMongo';
import { folder } from '../../../db/resources';


const FolderDashboardContent = {
    title: 'Folder Dashboard',
    description: 'This is where the user will see all the folder they have :-D',
};

const FolderDashboard = ({
    content,
    folders
}) => {
    
    /* CHECK SESSION */ 
    const [ session, loading ] = useSession();

    if ( loading ) return null; // loading spinner? 

    if ( !session && !loading ) {
        return (
            <div className='screen-container center'>
                <h1>Big Sad</h1>
            </div>
        )
    }

    /* DATA STOOFS */
    const [ shownFolders, setShownFolders ] = useState( folders || [] );

    const handleNewFolder = async ( { folderName } ) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/folder`, {
            method: 'POST',
            body: JSON.stringify( { name: folderName } ),
            headers: {
                'Content-Type': 'application/json'
            },
        } );

        const { data } = await res.json();
        console.log( data );
        setShownFolders( state => [ ...state, data ] );
    }
    
    const handleDeleteFolder = ( { id } ) => {

    }
    
    /* CONTENT */
    const { title, description } = content;

    return (
        <FoldersLayout user={session.user}>
            <div className='screen-container center'>
                <Head>
                    <title>tomou Folder Dashboard</title>
                </Head>

                <h1>{title}</h1>
                <p>{description}</p>
                <a href='#add-folder'>
                    <button>Add Folder</button>
                </a>
                <Modal id='add-folder' onSubmit={handleNewFolder} content={ { label: 'Folder Name' } } />
                <GridLinks id='mongo-folder-links' content={ { folderNames: shownFolders } } />
            </div>
        </FoldersLayout>
    );
}

export default FolderDashboard;


export async function getServerSideProps( context ) {
    const session = await getSession( context );

    // this should return empty props and redirect the user to signin page
    if ( !session || !session.user ) return { props: {} }; 

    const { mongoDB } = await connectToMongoDb();
    const folders = await folder.getFolders( mongoDB, session.user.id );

    const props = { session };
    props.content = FolderDashboardContent;
    props.folders = folders;

    return { props };
}