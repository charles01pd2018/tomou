// dependencies
import Head from 'next/head';

// components
import { NoteInput } from '../components';

const Notes = ({
}) => {
  return (
        <>
            <Head>
                <title>tomou: Notes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NoteInput />
        </>
  );
}

export default Notes;