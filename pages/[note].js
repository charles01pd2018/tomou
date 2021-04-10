// dependencies
import Head from 'next/head';
import { useRouter } from 'next/router'

// components
import { NoteInput } from '../components';

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

const Notes = ({
    content
}) => {

    const router = useRouter()
    const { noteLabel } = router.query

    return (
        <>
            <Head>
                <title>tomou: Notes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NoteInput content={content} />
        </>
  );
}

export default Notes;

export async function getServerSideProps() {
    return {
        props: {
            content: noteContent
        }
    }
}