import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/index'
import Video from '../video/index'
import GoldenFrog from '../goldenfrog/index'
import ClockWork  from '../clockwork/index'

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (
        React.createElement(component, finalProps)
    );
}

// create a HOC for passing props to components rendered by react-router
const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}

const ViewContainer = (props) => (
        <Switch>
            <PropsRoute exact path='/' component={Home}/>
            <PropsRoute  path='/video' {...props} loop={true} autoPlay={true} showControls={true} component={Video}/>
            <PropsRoute path='/goldenfrog' component={GoldenFrog}/>
            <PropsRoute path='/clockwork' {...props} component={ClockWork}/>
        </Switch>
)

export default ViewContainer
