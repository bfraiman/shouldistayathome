import React from 'react';

export default () => (
  <div className="meta">
    <ul className="share-buttons">
      <li>Share:</li>
      <li>
        <a
          href="https://www.instagram.com/shouldistayathome.today/"
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Instagram"
        >
          Instagram
        </a>
      </li>
      <li>
        Source:
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/bfraiman/shouldistayathome/">
          Github
        </a>
      </li>
      <li>
        <a href="/api">
          <mark>API</mark>
        </a>
      </li>
    </ul>
  </div>
);
