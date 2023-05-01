import React from 'react';
import './App.scss';
import {Header} from './Header/Header';
import {Nav} from './Header/Nav/Nav';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {MyProjects} from './MyProjects/MyProjets';
import {JobOptions} from './JobOptions/JobOptions';
import {Feedback} from './Feedback/Feedback';
import {Footer} from './Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <JobOptions/>
            <Feedback/>
            <Footer/>
        </div>
    );
}

export default App;
