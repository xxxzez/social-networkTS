import React from 'react'
import { reduxForm } from 'redux-form'
import {
    createField,
    Input,
    Textarea,
} from '../../common/FormsControls/FormsControls'
import s from './ProfileInfo.module.css'


const ProfileDataForm = ({ handleSubmit, initialValues, error }: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => {}}>Save</button>
            </div>

            <div>
                <b>Full name:</b>
                {createField('Full name', 'fullName', [], Input)}
            </div>

            <div>
                <b>Looking for a job?</b>
                {createField('', 'lookingForAJob', [], Input, {
                    type: 'checkbox',
                })}
            </div>

            <div>
                <b>My professional skills:</b>
                {createField(
                    'My professional skills',
                    'lookingForAJobDescription',
                    [],
                    Textarea
                )}
            </div>

            <div>
                <b>About me: </b>
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b>:
                {Object.keys(initialValues.contacts).map((key) => {
                    return (
                        <div className={s.contact} key={key}>
                            <b>
                                {key}:{' '}
                                {createField(key, 'contacts.' + key, [], Input)}
                            </b>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(
    ProfileDataForm
)
