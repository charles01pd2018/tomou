// dependencies
import Head from 'next/head';

// components
import { NoteInput } from '../../components';

// layout
import NotesLayout from '../../layout/notesLayout';

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
    <NotesLayout content={content} >
        <Head>
            <title>tomou: Notes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NoteInput content={content} />
    </NotesLayout>
  );
}

export default NotesDashboard;

export function getStaticProps() {
  return {
    props: {
      content: noteContent
    }
  }
}