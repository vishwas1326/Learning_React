import React from 'react';
import { create } from 'istanbul-reports';

const Hello=()=>{
    return (
        <div className="dummy">
            <h1 id="hello">Hello World</h1>
        </div>
    )
    //return React.createElement('div',null,React.createElement('h1',null,'Hello World'));
}

export default Hello