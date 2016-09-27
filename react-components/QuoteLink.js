import React from 'react';
import {Link} from 'react-router';
import QuoteButton from './QuoteButton'

const QuoteLink = React.createClass({
   
   render:function(){
       return(
           <a
               
               onClick={() => {
               window.location = '/quote?symbol='+this.props.value;
                // $.ajax({
                //     method: "Get",
                //     url:"https://www.quandl.com/api/v3/datasets/YAHOO/"+this.props.value+".json?api_key=DidYBR8VH-_jy236M4zz",
                //     success: function(data){
                //         // var id  = data.dataset.id;
                //         var element = $('#tradingview_b631d-wrapper');
                //         var newElement = $('<p>');
                //         element.append(newElement)
                //     }
                // })
              }}
           >
               <QuoteButton />
           </a>
       )
   }
});

export default QuoteLink