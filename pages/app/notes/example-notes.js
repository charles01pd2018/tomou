// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
// components
import { NotesInput, NotesStickies, NotAuth } from '../../../components';
// layout
import { AppLayout } from '../../../layout';


const NotesDashboard = ({
  content
}) => {

  const [ session, loading ] = useSession();
  if ( loading ) return null;
  if ( !session && !loading ) return <NotAuth id='not-auth' />

  return (
    <>
        <Head>
          <title>tomou: Notes</title>
        </Head>
        <AppLayout content={content} >
            <NotesStickies id='notes-stickies' />
            <NotesInput id='notes-input' content={content} />
        </AppLayout>
    </>
  );
}

export default NotesDashboard;


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

/* CHANGE THIS HACKY JAWNZ */
export function getServerSideProps() {
  return {
    props: {
      content: noteContent,
    }
  }
}