import React, { createElement } from 'react';
//e('button',{class:'btn btn-primary',id:'reviewSubmit'}, 'Submit your review!')

let e = React.createElement;

var reviewArray = []

export default class sendReview extends React.Component{
  
  constructor(props) {
    super(props);
    // Created ref
    this.myInputRef = React.createRef(); //used later to attach to the textarea
    this.getInputValue = this.getInputValue.bind(this); //bind this to our function
}
getInputValue() {

  

    const inputValue = this.myInputRef.current.value;
   
    reviewArray.push(inputValue)
    console.log(inputValue)
    

    

    var submitReview = document.querySelector('#submittedReviews')
    
    for(var i=0; i < reviewArray.length; i++)
    submitReview.innerHTML += "<p>"+reviewArray[i]+"</p><br>";
    console.log('reviewArray')
    console.log(reviewArray)
    submitReview.textContent = reviewArray + "     " //changes the html text 
    document.getElementById('newReview').value = '' //clears the input form 
}
    
    render(){
      
        return (
          
            <>
              <div>
                <div id='submittedReviews'></div>
                <textarea id='newReview'type="text" placeholder='Share your review' ref={this.myInputRef} rows="4" cols="50"/>  
                <br></br>
                <button class='btn btn-primary' onClick={this.getInputValue}>Submit Review</button>
              </div>
            </>
          );
            
      
    }
}