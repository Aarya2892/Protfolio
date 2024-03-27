import './Heroimg2style.css'
import React,{Component} from 'react';

class Heroimage2 extends Component {
    render(){
        return (
            <div className='Heroimg2'>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          );
    }
 
}

export default Heroimage2;
