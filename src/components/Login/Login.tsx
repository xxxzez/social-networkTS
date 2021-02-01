import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
}

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name="login" component="input" />
            </div>
            <div>
                <Field
                    placeholder="password"
                    name="password"
                    component="input"
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input" />
                Remember
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
