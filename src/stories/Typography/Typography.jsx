import React from 'react';

export default function Typography() {
  return (
    <div>
      <h2>Headings</h2>
      <div>
        <span className="heading heading__600">h600</span>
        &nbsp; &nbsp;
        <small>.heading .heading__600</small>
      </div>
      <br />
      <div>
        <span className="heading heading__200">h200</span>
        &nbsp; &nbsp;
        <small>.heading .heading__200</small>
      </div>
      <br />
      <div>
        <span className="heading heading__100">h100</span>
        &nbsp; &nbsp;
        <small>.heading .heading__100</small>
      </div>

      <br />

      <h2>Body</h2>
      <div>
        <span className="text__short--lg">Text/Short/Large</span>
        &nbsp; &nbsp;
        <small>.text__short--lg</small>
      </div>
      <br />
      <div>
        <span className="text__long--lg">Text/Long/Large</span>
        &nbsp; &nbsp;
        <small>.text__long--lg</small>
      </div>
      <br />
      <div>
        <span className="text__short--md">Text/Short/Medium</span>
        &nbsp; &nbsp;
        <small>.text__short--md</small>
      </div>
      <br />
      <div>
        <span className="text__short--md">Text/Short/Medium</span>
        &nbsp; &nbsp;
        <small>.text__long--md</small>
      </div>
      <br />
      <div>
        <span className="text__short--sm">Text/Short/Small</span>
        &nbsp; &nbsp;
        <small>.text__short--md</small>
      </div>
      <br />
      <div>
        <span className="text__long--sm">Text/Long/Small</span>
        &nbsp; &nbsp;
        <small>.text__long--md</small>
      </div>
      <br />
      <div>
        <span className="text__upper">Upper</span>
        &nbsp; &nbsp;
        <small>.text__upper</small>
      </div>
    </div>
  );
}
