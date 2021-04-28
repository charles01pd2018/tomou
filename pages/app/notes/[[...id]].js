// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
// components
import { NoteInput, NoteStickies } from '../../../components';
// layout
import { AppLayout } from '../../../layout';


const noteContent = {
  noteItems: [
      {
          noteLabel: 'Note 1', // this should be the same as the note label
          noteText: 'It be like that'
      },
      {
          noteLabel: 'Note 2', // this should be the same as the note label
          noteText: 'It be like that'
      },
      {
          noteLabel: 'Note 3', // this should be the same as the note label
          noteText: 'It be like that'
      },
  ]
};

const NotesDashboard = ({
  content,
}) => {

    const [ session, loading ] = useSession(); 
      
    if ( loading ) return null;

    return (
        <AppLayout content={content} user={session.user}>
            <Head>
                <title>tomou: Notes</title>
            </Head>

            <NoteStickies id='notes-NoteStickies' />
            <NoteInput content={content} />
        </AppLayout>
    );
}

export default NotesDashboard;


/* CHANGE THIS HACKY JAWNZ */
export function getServerSideProps() {
  return {
    props: {
      content: noteContent
    }
  }
}