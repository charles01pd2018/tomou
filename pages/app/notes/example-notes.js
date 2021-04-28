// dependencies
import Head from 'next/head';
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
  content
}) => {
  return (
    <AppLayout content={content} >
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
      content: noteContent,
    }
  }
}