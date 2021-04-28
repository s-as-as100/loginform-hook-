import React from 'react'



class ClassSize extends React.Component {
    state = {  
        count : 0
    }

      increment = (() => {
          this.setState({count:this.state.count+1})
      })
    
    render() { 
        return ( 
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment} >Increment</button>

            </div>
         );
    }
}
 
export default ClassSize;
