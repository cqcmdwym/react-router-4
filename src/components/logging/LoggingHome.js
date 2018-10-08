import React from 'react';
import LoggingDefaultMessage from './LoggingDefaultMessage';
import { Link, Route } from 'react-router-dom';
import LoggingLink from './LoggingLink';

const LoggingHome = ({match}) => {
    return (
        <div>
            <h1>Logging Home</h1>
            <h4>
                <LoggingLink to={`${match.url}/lorem/7fd2aof4-29ea-4650-803a-67418b597090`}>Link 1</LoggingLink>
                {' | '}
                <LoggingLink to={`${match.url}/lorem/1842a9f0-449d-499f-bd19-36105da591fa`}>Link 2</LoggingLink>
            </h4>

            <Route path={`${match.url}`} component={LoggingDefaultMessage} exact />
        </div>
    );
};

export default LoggingHome;