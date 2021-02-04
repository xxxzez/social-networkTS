import React from 'react'
import { Field } from 'redux-form'
import styles from './FormsControls.module.css'

const FormControl = ({ input, meta: { touched, error }, children }: any) => {
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

export const Textarea = (props: any) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}
export const Input = (props: any) => {
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
