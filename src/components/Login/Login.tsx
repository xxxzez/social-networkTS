import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

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
                <Field
                    validate={[required]}
                    placeholder="login"
                    name="login"
                    component={Input}
                />
            </div>
            <div>
                <Field
                    validate={[required]}
                    placeholder="password"
                    name="password"
                    component={Input}
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input} />
                Remember
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
