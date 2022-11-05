import React from 'react';


let e = React.createElement;


export default class ratebuttons extends React.Component{

  
    render(){
        return (
        e('div',{class:'btn btn-primary'}, '',
        e('button',{class:'btn btn-primary',id:'star1'}, '1'),
        e('button',{class:'btn btn-primary',id:'star2'}, '2'),
        e('button',{class:'btn btn-primary',id:'star3'}, '3'),
        e('button',{class:'btn btn-primary',id:'star4'}, '4'),
        e('button',{class:'btn btn-primary',id:'star5'}, '5')
        )
      )
    }
}