import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom'


class TodoApp extends Component {

    render() {
        return (


            <div className="todoapp">

                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                        <Route path="/todos" component={ListTodosComponent}></Route>
                        <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>
            </div>
        );
    }

}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link></div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {id:1, description:'Learn to Dance', done:false,targetDate: new Date()},
                {id:2, description:'Become an expert in React', done:false,targetDate: new Date()},
                {id:3, description:'Visit India', done:false,targetDate: new Date()},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Is Done?</th>
                        <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                </tr>
        
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


class ErrorComponent extends Component {
    render() {
        return (
            <div>Wrong URL</div>
        )
    }
}
class HeaderComponent extends Component {
    render() {
        return (
            <div>Header</div>
        )
    }
}
class FooterComponent extends Component {
    render() {
        return (
            <div>Footer</div>
        )
    }
}


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'Harsh',
            password: '',
            loginSucess: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginCheck = this.loginCheck.bind(this)
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)

    }
    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    loginCheck(event) {
        console.log('logn clicked');
        if (this.state.username === 'Harsh') {
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({ loginSucess: true, loginFailed: false })
        }
        else
            this.setState({loginSucess: false })
    }
    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState ({username:event.target.value})
    // }
    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState ({password:event.target.value})
    // }


    render() {
        return (
            <div>
                <ShowLoginStatus loginSucess={this.state.loginSucess} ></ShowLoginStatus>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginCheck}>Login</button>
            </div>
        )
    }

}

function ShowLoginStatus(props) {
    if (props.loginSucess === true)
        return <div>Login Successful</div>
    else if (props.loginSucess === false)
        return <div>Login Failed</div>
    return null
}


export default TodoApp

