import React from 'react';
import './styles.css';

export default function App() {
  return (
    <main>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐳" name="klaus">
        <ul>
          <li>cute</li>
          <li>smart</li>
          <li>nice</li>
        </ul>
      </Animal>
      <Animal emoji="🐕" name="Lucky">
        <p>Cute dog</p>
      </Animal>
      <Animal emoji="🐈" name="Mittens">
        <p>Super cute cat</p>
      </Animal>
      <Animal emoji="🐣" name="Chick Norris">
        <ul>
          <li>cute</li>
          <li>smart</li>
          <li>nice</li>
        </ul>
      </Animal>
    </main>
  );
}
// <> ... </> Fragements - <React.Fragments> ...  </React.Fragments>
function Animal({ emoji, name, children }) {
  console.log('children', children);
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      {children}
    </>
  );
}
