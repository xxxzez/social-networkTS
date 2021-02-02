import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { RootStateType } from '../../Types'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import styles from '../common/FormsControls/FormsControls.module.css'

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required]}
                    placeholder="email"
                    name="email"
                    component={Input}
                />
            </div>
            <div>
                <Field
                    validate={[required]}
                    placeholder="password"
                    name="password"
                    type="password"
                    component={Input}
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input} />
                Remember
            </div>
            {props.error && (
                <div className={styles.formSummaryError}>{props.error}</div>
            )}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
})

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
export const ConnectedLogin = connect(mapStateToProps, { login })(Login)
