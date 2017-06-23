import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName="Augusto">
            <Member name="Diego"/>
            <Member name="Joao"/>
            <Member name="Giovana"/>
        </Family>
    </div>
    , document.getElementById('app'));


