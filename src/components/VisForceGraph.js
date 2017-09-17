import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


export class TechGraph extends React.Component {

  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.setState(this.getInitialState());
  }
  getInitialState = () => {
    let state = {};
    state.data = [
      {source: 'Jason Turner' , target: 'Techniques'},
        {source: 'Techniques' , target:  'Management'},
          {source: 'Management', target: 'Waterfall'},
          {source: 'Management', target: 'Agile' },
        {source: 'Techniques' , target:  'Architecure'},
          {source: 'Architecure', target: 'CQRS'},
          {source: 'Architecure', target: 'CAP Theorem'},
          {source: 'Architecure', target: 'Eventual Consistency'},
          {source: 'Architecure', target: 'OWASP'},
          {source: 'Architecure', target: 'Functional'},
          {source: 'Architecure', target: 'Object Oriented'},
      {source: 'Jason Turner' , target:  'Tools'},
        {source: 'Tools', target: 'CI/CD'},
        {source: 'Tools', target: 'Development'},
      {source: 'Jason Turner' , target: 'Language & Framework'},
        {source: 'Language & Framework', target:'.Net'},
          {source: '.Net', target: 'Data'},
            {source: 'Data', target: 'Dapper'},
            {source: 'Data', target: 'EF',},
            {source: 'Data', target: 'NHibernate'},
        {source: 'Language & Framework', target: 'Javascript'},
          {source: 'Javascript', target: 'ES6'},
          {source: 'Javascript', target: 'Typescript'},
          {source: 'Javascript', target: 'UI'},
            {source: 'UI', target: 'React'},
              {source: 'React', target:  'Redux'},
              {source: 'React', target:  'Jest'},
            {source: 'UI', target: 'Vaadin'},
            {source: 'UI', target: 'Angular2+'},
            {source: 'UI', target: 'CSS3'},
              {source: 'CSS3', target:  'SCSS/SASS'},
              {source: 'CSS3', target:  'Compass'},
              {source: 'CSS3', target:  'BEM'},
              {source: 'CSS3', target:  'CSS Modules'},
          {source: 'Javascript', target: 'Node'},
            {source: 'Node', target: 'Express'},
          {source: 'Javascript', target: 'CI'},
            {source: 'CI', target: 'Webpack'},
            {source: 'CI', target: 'gulp'},
      {source: 'Jason Turner' , target:  'Platform'},
        {source: 'Platform' , target:  'DevOps'},
        {source: 'Platform' , target: 'Databases'},
        {source: 'Platform' , target: 'Dev Ops'},
          {source: 'Dev Ops' , target: 'Yeomon'},
          {source: 'Dev Ops' , target: 'Team City'},
          {source: 'Dev Ops' , target: 'Octopus Deploy'},
          {source: 'Dev Ops' , target: 'Ansible'},
          {source: 'Dev Ops' , target: 'Code Deploy'},
        {source: 'Platform' , target:'Databases'},
          {source: 'Databases' , target: 'RDBMS'},
            {source: 'RDBMS' , target:  'MSSql'},
            {source: 'RDBMS' , target:  'SSRS'},
            {source: 'RDBMS' , target:  'My Sql'},
            {source: 'RDBMS' , target:  'Postgressql'},
          {source: 'Databases' , target: 'NoSQL'},
            {source: 'NoSQL' , target: 'RethinkDB'},
            {source: 'NoSQL' , target: 'CouchDB'},
            {source: 'NoSQL' , target: 'ElasticSearch'},
            {source: 'NoSQL' , target: 'ArangoDB'}
        ];

    state.colourLightPrimary = "#06AED5"
    state.colourLightSecondary = "#E2DBBE"
    state.colourDarkPrimary = "#F0B67F"
    state.colourDarkSecondary = "#FE5F55"
    state.colourAltPrimary = "#D6D1B1"
    state.colourList = [state.colourLightPrimary,state.colourLightSecondary,state.colourDarkPrimary,state.colourDarkSecondary,state.colourAltPrimary];

    state.data.map( x=> x.color = 'red');
    // colour each node appropriate to the branch that they are on
    state.data.filter(x=> x.source === "Jason Turner").map((x, index) => {
      x.color = state.colourList[index % state.colourList.length];
    });

    for(var i =0; i< 5; i++){
      state.data.filter(x => x.color !=='red').map((x, index) => {
        state.data.filter(y => y.source == x.target).map( z => {
          z.color = x.color;
        });
      });
    }

    state.nodeList = [];
    state.nodeList.push(<ForceGraphNode key='-1' node={{ id: 'Jason Turner', label: 'Jason Turner' }} fill="black" />);

    state.data.map((node, index) => {
      state.nodeList.push(<ForceGraphNode key={index}  node={{ id: node.target, label: node.target }} fill={node.color}  />);
    });

    state.vertexList = [];
    state.data.map((node, index) => {
      state.vertexList.push(<ForceGraphLink key={index+100} link={{source: node.source, target: node.target }} />);
    });
    return state;
  }
  nodeSelected = (node) => {
    let state = this.state;
    // TODO: Re-colour based on the selection or do something else funky.
    state.nodeList.filter(x=>x.source === node.source || x.target === node.source).map((y, index)=>{

    });
    this.setState(state);

    this.setState(this.state);

  }

  render() {
    if(!this.state){
      return (<div> </div>);
    }
    return (
      <div>
      <InteractiveForceGraph
        simulationOptions={{ height: 500, width: 500, animate: true, alphaTarget:0.9, alphaDecay:1.1, velocityTarget:6, strength:{ x:0.02,y:0.02} }}
        labelAttr="label"
        onSelectNode={this.nodeSelected}
        highlightDependencies
        showLabels >
        {this.state.nodeList}
        {this.state.vertexList}
      </InteractiveForceGraph>
      </div>
    );
  }
}
