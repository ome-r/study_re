import React from 'react';

export default function ListChild({ title, detail }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{detail}</p>
      <hr />
    </>
  );
}
