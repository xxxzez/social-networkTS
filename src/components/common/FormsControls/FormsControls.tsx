import React from 'react'
import { Field } from 'redux-form'
import styles from './FormsControls.module.css'

const FormControl: React.FC<any> = ({
    input,
    meta: { touched, error },
    children,
}) => {
    const hasError = touched && error
    return (
        <div
            className={
                styles.formControl + ' ' + (hasError ? styles.error : '')
            }
        >
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}
export const Input: React.FC<any> = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (
    placeholder: any,
    name: string,
    validators: any[],
    component: any,
    props: any = {},
    text: string = ''
) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />
        {text}
    </div>
)
