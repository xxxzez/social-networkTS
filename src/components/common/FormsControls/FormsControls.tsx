import React from 'react'
import { Field } from 'redux-form'
import { FieldValidatorType } from '../../../utils/validators/validators'
import styles from './FormsControls.module.css'

type FormControlPropsType = {
    meta: {
        touched: boolean
        error: string
    }
    children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({
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
    placeholder: string | null,
    name: string,
    validators: FieldValidatorType[],
    component: string | React.Component | React.FC,
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
