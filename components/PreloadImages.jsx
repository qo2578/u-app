import Head from 'next/head';

const PreloadImages = ({ imagePaths }) => (
  <Head>
    {imagePaths.map((path, index) => (
      <link key={index} rel="preload" href={path} as="image" />
    ))}
  </Head>
);

export default PreloadImages;
