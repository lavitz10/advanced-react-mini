import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import PokemonContainer from './components/Presentational/PokemonContainer';
import Pokemon from './components/HOC/Pokemon';
import DataFetcher from './components/RenderProps/DataFetcher';
import PokemonRender from './components/RenderProps/PokemonRender';
import PropTypes from './components/PropTypes/ParentPropType';

export default <Switch>
    {/* Presentational */}
    <Route
        exact path='/'/>
    {/* HOC */}
    <Route
        path='/pokemon-hoc'/>
    {/* Render Props */}
    <Route
        path='/pokemon-renderprops'/>
    {/* PropTypes */}
    <Route path='/prop-types' component={PropTypes}/>
</Switch>