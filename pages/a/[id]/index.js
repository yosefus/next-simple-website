import { useRouter } from 'next/router';
import React from 'react';

export default function TryOne({ One }) {
  const { id, title } = One;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      the id is {id}
      <br />
      and the title is {title}
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/try`);

  const data = await res.json();

  const One = data.filter((item) => item.id == context.params.id)[0];

  if (!data || !One) {
    return {
      notFound: true,
    };
  }

  return {
    props: { One },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/try`);

  const data = await res.json();

  const ids = data.map((item) => item.id);

  const paths = ids.map((id) => ({ params: { id: id } }));

  return {
    paths,
    fallback: true,
  };
}
