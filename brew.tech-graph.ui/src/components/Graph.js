import { Graph } from 'react-d3-graph';
require('./Graph.css');
import React from 'react';
const redata  = {
  nodes: [
    {id: 'Jason Turner', color: 'white', gravity: 0.1},
      {id: 'Techniques', color: 'red'},
        {id: 'Management', color: 'red'},
        {id: 'Architecure', color: 'red'},
      {id: 'Tools', color: 'green'},
        {id: 'CI/CD', color: 'green'},
        {id: 'Development', color: 'green'},
      {id: 'Language & Framework', color: 'lightblue'},
        {id: '.Net', color: 'lightblue'},
        {id: 'Javascript', color: 'lightblue'},
      {id: 'Platform', color: 'orange'},
        {id: 'DevOps', color: 'orange'},
        {id: 'Databases', color: 'orange'}
  ],
  links: [
      {source: 'Jason Turner' , target: 'Techniques'},
        {source: 'Techniques' , target:  'Management'},
        {source: 'Techniques' , target:  'Architecure'},
      {source: 'Jason Turner' , target:  'Tools'},
        {source: 'Tools', target: 'CI/CD'},
        {source: 'Tools', target: 'Development'},
      {source: 'Jason Turner' , target:  'Language & Framework'},
        {source: 'Language & Framework' , target: '.Net'},
        {source: 'Language & Framework' , target: 'Javascript'},
      {source: 'Jason Turner' , target:  'Platform'},
        {source: 'Platform' , target:  'DevOps'},
        {source: 'Platform' , target: 'Databases'}
  ]
}
// Graph payload (with minimalist structure)
const data = {
    nodes: [
    {id: 'Jason Turner'},
    {id: 'Techniques'},
      {id: 'Management'},
        {id: 'Waterfall'},
        {id: 'Adgile' },
      {id: 'Architecure'},
        {id: 'CQRS'},
        {id: 'CAP Theorem'},
        {id: 'Eventual Consistency'},
        {id: 'OWASP'},
        {id: ''},
    {id: 'Tools'},
    {id: 'Language & Framework'},
      {id: '.Net'},,
        {id: 'Data'},
          {id: 'Dapper'},
          {id: 'EF'},
          {id: 'NHibernate'},
      {id: 'Javascript'},
        {id: 'ES6'},
        {id: 'Typescript'},
        {id: 'UI'},
          {id: 'React'},
            {id: 'Redux'},
            {id: 'Jest'},
          {id: 'Vaadin'},
          {id: 'Angular2+'},
          {id: 'CSS3'},
            {id: 'SCSS/SASS'},
            {id: 'Compass'},
            {id: 'BEM'},
            {id: 'CSS Modules'},
        {id: 'Node'},
          {id: 'Express'},
        {id: 'CI'},
          {id: 'Webpack'},
          {id: 'gulp'},
    {id: 'Platform'},
      {id: 'Dev Ops'},
        {id: 'Yeomon'},
        {id: 'Team City'},
        {id: 'Octopus Deploy'},
        {id: 'Ansible'},
        {id: 'Code Deploy'},
      {id: 'Databases'},
        {id: 'RDBMS'},
          {id: 'MSSql'},
            {id: 'SSRS'},
          {id: 'My Sql'},
          {id: 'Postgressql'},
        {id: 'NoSQL'},
          {id: 'RethinkDB'},
          {id: 'CouchDB'},
          {id: 'ElasticSearch'},
          {id: 'ArangoDB'}
    ],
    links: [
      {source: 'JasonTurner', target:'Techniques'},
      {source: 'JasonTurner', target:'Tools'},
      {source: 'JasonTurner', target:'LanguageFramework'},
      {source: 'JasonTurner', target:'Platform'},
        {source: 'Platform', target:'DevOps'},
          {source: 'DevOps', target:'Yeomon'},
        {source: 'Platform', target:'Databases'}

    ]
};

// The graph configuration
const myConfig = {
    highlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 120,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue',
        size: 10
    }
};

// Graph event callbacks
const onClickNode = function(nodeId) {
     // window.alert('Clicked node', nodeId);
};

const onMouseOverNode = function(nodeId) {
    // window.alert('Mouse over node', nodeId);
};

const onMouseOutNode = function(nodeId) {
     // window.alert('Mouse out node', nodeId);
};

const onClickLink = function(source, target) {
     window.alert(`Clicked link between ${source} and ${target}`);
};

export class TechGraph extends React.Component {
  render() {
    return (
      <div>
      <Graph
           id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
           data={redata}
           config={myConfig}
           onClickNode={onClickNode}
           onClickLink={onClickLink}
           onMouseOverNode={onMouseOverNode}
           onMouseOutNode={onMouseOutNode} />
      </div>
    );
  }
}
