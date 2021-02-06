import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { RootStateType } from '../../Types'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import styles from '../common/FormsControls/FormsControls.module.css'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm = ({ handleSubmit, error, captchaUrl }: any) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {
                type: 'password',
            })}
            {createField(
                null,
                'rememberMe',
                [],
                Input,
                { type: 'checkbox' },
                'Remember'
            )}
            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl &&
                createField(
                    'Symbols from image',
                    'captcha',
                    [required],
                    Input,
                    {}
                )}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<{}, LoginFormOwnProps>({ form: 'login' })(
    LoginForm
)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        )
    }
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export const ConnectedLogin = connect(mapStateToProps, { login })(Login)
