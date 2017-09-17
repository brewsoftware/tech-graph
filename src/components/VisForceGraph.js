import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
const data = [
    {source: 'Jason Turner' , target: 'Techniques'},
      {source: 'Techniques' , target:  'Management', color:'red'},
        {source: 'Management', target: 'Waterfall', color:'red', type:'leaf'},
        {source: 'Management', target: 'Agile' , color:'red', type:'leaf'},
      {source: 'Techniques' , target:  'Architecure', color:'red'},
        {source: 'Architecure', target: 'CQRS' , color:'red', type:'leaf'},
        {source: 'Architecure', target: 'CAP Theorem', color:'red', type:'leaf'},
        {source: 'Architecure', target: 'Eventual Consistency', color:'red', type:'leaf'},
        {source: 'Architecure', target: 'OWASP', color:'red', type:'leaf'},
        {source: 'Architecure', target: 'Functional', color:'red', type:'leaf'},
        {source: 'Architecure', target: 'Object Oriented', color:'red', type:'leaf'},
    {source: 'Jason Turner' , target:  'Tools', color:'green'},
      {source: 'Tools', target: 'CI/CD', color:'green', type:'leaf'},
      {source: 'Tools', target: 'Development', color:'green', type:'leaf'},
    {source: 'Jason Turner' , target:  'Language & Framework', color:'blue'},
      {source: 'Language & Framework', color:'blue', target: '.Net'},,
        {source: '.Net', color:'blue', target: 'Data'},
          {source: 'Data', color:'blue', target:  'Dapper' ,type:'leaf'},
          {source: 'Data', color:'blue', target:  'EF',type:'leaf'},
          {source: 'Data', color:'blue', target:  'NHibernate',type:'leaf'},
      {source: 'Language & Framework', color:'blue', target: 'Javascript'},
        {source: 'Javascript', color:'blue', target: 'ES6',type:'leaf'},
        {source: 'Javascript', color:'blue', target: 'Typescript',type:'leaf'},
        {source: 'Javascript', color:'blue', target: 'UI'},
          {source: 'UI', color:'blue', target: 'React'},
            {source: 'React', color:'blue', target:  'Redux',type:'leaf'},
            {source: 'React', color:'blue', target:  'Jest',type:'leaf'},
          {source: 'UI', color:'blue', target: 'Vaadin',type:'leaf'},
          {source: 'UI', color:'blue', target: 'Angular2+',type:'leaf'},
          {source: 'UI', color:'blue', target: 'CSS3'},
            {source: 'CSS3', color:'blue', target:  'SCSS/SASS',type:'leaf'},
            {source: 'CSS3', color:'blue', target:  'Compass',type:'leaf'},
            {source: 'CSS3', color:'blue', target:  'BEM',type:'leaf'},
            {source: 'CSS3', color:'blue', target:  'CSS Modules',type:'leaf'},
        {source: 'Javascript', color:'blue', target: 'Node'},
          {source: 'Node', color:'blue', target: 'Express',type:'leaf'},
        {source: 'Javascript', color:'blue', target: 'CI'},
          {source: 'CI', color:'blue', target: 'Webpack',type:'leaf'},
          {source: 'CI', color:'blue', target: 'gulp',type:'leaf'},

    {source: 'Jason Turner' , target:  'Platform', color:'orange'},
      {source: 'Platform' , target:  'DevOps', color:'orange',type:'leaf'},
      {source: 'Platform' , target: 'Databases', color:'orange',type:'leaf'},
      {source: 'Platform' , target: 'Dev Ops', color:'orange',type:'leaf'},
        {source: 'Dev Ops' , target: 'Yeomon', color:'orange',type:'leaf'},
        {source: 'Dev Ops' , target: 'Team City', color:'orange',type:'leaf'},
        {source: 'Dev Ops' , target: 'Octopus Deploy', color:'orange',type:'leaf'},
        {source: 'Dev Ops' , target: 'Ansible', color:'orange',type:'leaf'},
        {source: 'Dev Ops' , target: 'Code Deploy', color:'orange',type:'leaf'},
      {source: 'Platform' , target:'Databases', color:'orange',type:'leaf'},
        {source: 'Databases' , target: 'RDBMS', color:'orange',type:'leaf'},
          {source: 'RDBMS' , target:  'MSSql', color:'orange',type:'leaf'},
          {source: 'RDBMS' , target:  'SSRS', color:'orange',type:'leaf'},
          {source: 'RDBMS' , target:  'My Sql', color:'orange',type:'leaf'},
          {source: 'RDBMS' , target:  'Postgressql', color:'orange',type:'leaf'},
        {source: 'Databases' , target: 'NoSQL', color:'orange',type:'leaf'},
          {source: 'NoSQL' , target: 'RethinkDB', color:'orange',type:'leaf'},
          {source: 'NoSQL' , target: 'CouchDB', color:'orange',type:'leaf'},
          {source: 'NoSQL' , target: 'ElasticSearch', color:'orange',type:'leaf'},
          {source: 'NoSQL' , target: 'ArangoDB', color:'orange' ,type:'leaf'}


];

var nodeList = [];

nodeList.push(<ForceGraphNode node={{ id: 'Jason Turner', label: 'Jason Turner' }} fill="black" />);

data.map((node, index) => {
  nodeList.push(<ForceGraphNode node={{ id: node.target, label: node.target }} fill={node.color} showLabel={node.type==='leaf'}  />);
});

var vertexList = [];
data.map((node, index) => {
  vertexList.push(<ForceGraphLink link={{ source: node.source, target: node.target }} />);
});
export class TechGraph extends React.Component {
  render() {
    return (
      <div>
      <InteractiveForceGraph
        simulationOptions={{ height: 300, width: 800, animate: true, radiusMargin:200 }}
        labelAttr="label"
        onSelectNode={(node) => console.log(node)}

        highlightDependencies>
        {nodeList}
        {vertexList}
      </InteractiveForceGraph>
      </div>
    );
  }
}
