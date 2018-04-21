import React from 'react';
import axios from'axios';
import Suggestion from './Suggestion';
import './Search.css';
export default class Search extends React.Component{
   constructor(props){
       super(props);
       this.state={
           query:'',
           results:[],
           showSuggestion:true
       }
   }
   getInfo=()=>{

       axios.get('http://demo8310883.mockable.io/feedendpoint').then(response =>{
           this.setState({
               results:response.data.results
           });
       })
   }

handleChange=()=>{
this.setState({
    query:this.search.value
},()=>{
    if(this.state.query && this.state.query.length>1){
        if(this.state.query.length % 2 === 0){
            this.getInfo()
        }
    }else if (!this.state.query) {
        this.setState({
            results:['']
        })
    }
}
)
}
    render(){
        return(
            <div>
            <form>
            <input type="text" placeholder="search" ref={(input)=>this.search=input} onChange={this.handleChange}/>
        </form>
               <div className="result_sug">
               {this.state.showSuggestion && <Suggestion results={this.state.results}/>}

               </div>
</div>
        )
    }
}