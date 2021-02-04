import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { RootStateType } from '../../Types'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
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

const LoginForm = ({ handleSubmit, error }: any) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember')}
            {error && <div className={styles.formSummaryError}>{error}</div>}
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
