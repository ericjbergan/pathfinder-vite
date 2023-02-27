import { React, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pathfinderLogo from '../../assets/pathfinderLogo.jpg'
import NewChar from '../../pages/NewCharacter/NewCharacter'
import SavedChar from '../../pages/SavedCharacters/SavedCharacters'


export default function NavBar() {
    return (
        <div>
            <img src={pathfinderLogo} className='path-logo' alt='Pathfinder Logo' />
            <nav className='navbar'>
                <a href="/new-character">Create Character</a>
                <a href="/saved-characters">Load Character</a>
            </nav>
            <Router>
                <Switch>
                    <Route exact path='/new-character' component={ NewChar } />
                    <Route exact path='/saved-characters' component={ SavedChar } />
                </Switch>
            </Router>
        </div>
        
    )
}