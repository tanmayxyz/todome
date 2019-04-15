import React from 'react';
import {Jumbotron} from 'reactstrap'

const AppBar =(props) => {
    return (
        <div>
            <Jumbotron style={{backgroundColor:'#FFEBEE'}}>
                <h1 className='display-4'>Todome</h1>
                <div className="lead">Here we shedule work you should do</div>
            </Jumbotron>
        </div>
    )
}

export default AppBar;