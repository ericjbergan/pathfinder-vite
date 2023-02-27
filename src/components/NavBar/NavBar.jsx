import { React, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pathfinderLogo from '../../assets/pathfinderLogo.jpg'
import App from '../../App'
import NewChar from '../../pages/NewCharacter/NewCharacter'
import SavedChar from '../../pages/SavedCharacters/SavedCharacters'
import './NavBar.css'


export default function NavBar() {
    return (
        <div className='main'>
            <img src={pathfinderLogo} className='path-logo' alt='Pathfinder Logo' />
            <nav className='navbar'>
                <a href='home'>Home</a>
                <a href="/new-character">Create Character</a>
                <a href="/saved-characters">Load Character</a>
            </nav>
            <Router>
                <Switch>
                    <Route exact path='home' component={ App } />
                    <Route exact path='/new-character' component={ NewChar } />
                    <Route exact path='/saved-characters' component={ SavedChar } />
                </Switch>
            </Router>
        </div>
        
    )
}