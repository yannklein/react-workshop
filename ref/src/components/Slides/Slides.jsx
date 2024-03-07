import React, { useCallback } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/league.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './Slides.css';

function Slides({ slidesDisplayed, setSlidesDisplayed }) {
  React.useEffect(() => {
    const deck = new Reveal({
      plugins: [Markdown, Highlight],
    });
    deck.initialize({ embedded: true });
  }, [slidesDisplayed]);

  const slideClass = `slide-frame ${slidesDisplayed ? '' : 'd-none'}`;

  function handleClick() {
    setSlidesDisplayed(false);
  }
  return (
    <div className={slideClass}>
      <div className="reveal">
        <div className="slides">
          <section
            data-background-color="aquamarine"
            data-background-opacity="1"
            data-markdown="README.md"
            data-separator="^\n\n\n"
            data-separator-vertical="^\n\n"
            data-separator-notes="^Note:"
          >
            <textarea data-template></textarea>
          </section>
        </div>
        <button
          onClick={handleClick}
          type="button"
          className="btn-close position-absolute top-0 end-0 z-3"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Slides;
