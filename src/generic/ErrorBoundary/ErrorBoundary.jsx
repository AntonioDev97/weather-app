import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // active: false,
            hasError: false
        }
    }

    /* componentDidMount() {
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
    */
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log("ErrorInfo", errorInfo)
    }
    render() {
        return (
            this.state.hasError ?
            (<h1>There is an error</h1>)
            :
            (this.props.children)
        )
    }
}

export default ErrorBoundary;