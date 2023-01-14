import React from 'react';

export default function ListChild({ title, content }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <hr />
    </>
  );
}
