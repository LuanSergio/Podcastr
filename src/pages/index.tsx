import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {}, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export async function getServerStaticProps() {
  const response = await fetch("htt://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
