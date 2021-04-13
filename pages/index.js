// depenedencies
import Head from 'next/head';
// components
import { CenterPanel } from '../components';


const HomeContent = {
  homeTitle: 'Home',
  homeDescription: 'tomou: the best note taking app you will ever see in your life time yuhurd',
  homeCenterPanel: {
    navLinks: [
      {
        linkText: 'Take me to the amazing tomou App',
        linkDestination: '/app'
      },
      {
        linkText: 'Take me to sign in page',
        linkDestination: '/mysignin'
      },
    ]
  }
};

const Home = ({
  content
}) => {

  const { homeTitle, homeDescription, homeCenterPanel } = content;

  return (
    <div className='screen-container center'>
        <Head>
            <title>Welcome to toumou, friend</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

      <h1>{homeTitle}</h1>
      <p>{homeDescription}</p>
      <CenterPanel id='home-nav' content={homeCenterPanel} />
    </div>
  );
}

export default Home;

export function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  }
}