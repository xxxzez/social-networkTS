import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/store'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import styles from '../common/FormsControls/FormsControls.module.css'

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
type LoginFormOwnProps = {
    captchaUrl: string | null
}
const LoginReduxForm = reduxForm<{}, LoginFormOwnProps>({ form: 'login' })(
    LoginForm
)

const Login: React.FC<PropsType> = (props) => {
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
type MSTPType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MDTPType = {
    login: any
}
type PropsType = MSTPType & MDTPType

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export const ConnectedLogin = connect(mapStateToProps, { login })(Login)
