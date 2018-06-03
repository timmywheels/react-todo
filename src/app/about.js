var React = require('react');
var createReactClass = require('create-react-class');
require('./css/index.css');

import { Link } from 'react-router';

class About extends React.Component {
    render(){
        return(
            <div>
                <h2>I &hearts; coding.</h2>
                <Link class="link" to={'/'}>Home</Link>
                <a target="_blank" href="https://timwheeler.com"><img class="logo" src="https://timwheeler.com/wp-content/uploads/2017/11/tw-logo-white.svg" alt="TW Logo"></img></a>
            </div>
        );
    }
};

module.exports = About;