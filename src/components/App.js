import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const props = this.props
        return (
            <React.Fragment>
                <div>value: {props.value}</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

const mapSateToProps = state => ({value: state.count.value})
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch.increment,
    decrement: () => dispatch.decrement
})

export default connect(mapSateToProps, mapDispatchToProps)(App)