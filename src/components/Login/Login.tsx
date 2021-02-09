import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/store'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormsControls'
import styles from '../common/FormsControls/FormsControls.module.css'

const LoginForm: React.FC<
    InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> &
        LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>(
                'Email',
                'email',
                [required],
                Input
            )}
            {createField<LoginFormValuesTypeKeys>(
                'Password',
                'password',
                [required],
                Input,
                {
                    type: 'password',
                }
            )}
            {createField<LoginFormValuesTypeKeys>(
                undefined,
                'rememberMe',
                [],
                Input,
                { type: 'checkbox' },
                'Remember'
            )}
            {captchaUrl && <img src={captchaUrl} alt="" />}
            {captchaUrl &&
                createField<LoginFormValuesTypeKeys>(
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

type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login',
})(LoginForm)

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ) => void
}
type PropsType = MSTPType & MDTPType

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export const ConnectedLogin = connect(mapStateToProps, { login })(Login)
