// dependencies
import Head from 'next/head';

const Home = ({
}) => {
  return (
        <>
            <div className="container">
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1>
                   NextJS Starting Template
                </h1>
                <b>fdajskhfj</b>
                <span className='font-light'>
                </span>
                <p className='font-light'>fdafs</p>
                <p>fdsaf</p>
                

                <img className='logo-placeholder' src="/favicon.svg" alt='site-logo' />
            </div>
        </>
  );
}

export default Home;