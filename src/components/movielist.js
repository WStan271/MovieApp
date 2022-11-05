import React from 'react';
import Movie from './movie';

let e = React.createElement;

export default class movieList extends React.Component{
    render(){
        return e('div',
        {class: 'container'},
        
        e(Movie,{},null)
       
        
        );
    }
}