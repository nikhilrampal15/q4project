import React from 'react';
import {Link} from 'react-router';
import QuoteButton from './QuoteButton'

const QuoteLink = React.createClass({
   
   render:function(){
       return(
           <Link
               to="/Quote"
               onClick={() => {
                $.ajax({
                    method: "Get",
                    url:"https://www.quandl.com/api/v3/datasets/YAHOO/"+this.props.value+".json?api_key=DidYBR8VH-_jy236M4zz",
                    success: function(data){
                        console.log(data.dataset.id)
                    }
                })
              }}
           >
               <QuoteButton />
           </Link>
       )
   }
});

export default QuoteLink