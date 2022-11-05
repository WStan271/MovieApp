import React from 'react';
import ratebuttons from './ratingbutton';
import sendReview from './submitReview';

let e = React.createElement

export default class Movie extends React.Component{
    render(){
        return e('div',
            {class: 'card w-75'},
            e('div',
            {class: 'card-header bg-success text-white'},
            'Name of Movie'),
            e('div',
             {class: 'card-body'},
             'image, synopsis, rating'),
            e('div',
            {class: 'card-footer'},
                e(ratebuttons,{}, null),
            ),
            
            e(sendReview,{},null)
            

            



    
            
        );
    }
}