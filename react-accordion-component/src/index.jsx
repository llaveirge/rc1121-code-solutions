import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  { id: 1, topic: 'Hypertext Markup Language', content: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.' },
  { id: 2, topic: 'Cascading Style Sheets', content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.' },
  { id: 3, topic: 'JavaScript', content: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.' }
];

ReactDOM.render(
  <Accordion menu={topics}/>, document.getElementById('root')
);
