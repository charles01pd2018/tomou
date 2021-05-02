// depenedencies
import Head from 'next/head';
// components
import { CenterPanel } from '../components';


const Home = ({
  content
}) => {
  
  /* CONTENT */
  const { title, description, centerPanelContent } = content;

  return (
    <>
        <Head>
            <title>Welcome to toumou, friend</title>
        </Head>
      <div className='screen-container text-center'>
        <h1>{title}</h1>
        <p>{description}</p>
        <CenterPanel id='home-nav' content={centerPanelContent} />
      </div>
    </>
  );
}

export default Home;


const HomeContent = {
  title: 'Home',
  description: 'tomou: the best note taking app you will ever see in your life time yuhurd',
  centerPanelContent: {
    navLinks: [
      {
        linkText: 'Take me to the amazing tomou App',
        linkDestination: '/app'
      },
      {
        linkText: 'Take me to sign in page',
        linkDestination: '/signin'
      },
    ]
  }
};

export function getStaticProps() {
  return {
    props: {
      content: HomeContent,
    }
  }
}