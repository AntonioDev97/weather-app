import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        console.log('El componente se a montado')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('El componente se a actualizado')
        console.log('estado previo', prevState)
        console.log('estado nuevo', this.state)
    }

    componentWillUnmount() {
        console.log('El componente se ha desmontado')
    }

    clickButtonHandler = () => this.setState({ active: true })

    render() {
        return (
            <div>
                <h1>Error Boundary {this.state.active ? 'active' : 'not active'}</h1>
                <button onClick={this.clickButtonHandler}>Change state</button>
            </div>
        )
    }
}

export default ErrorBoundary;