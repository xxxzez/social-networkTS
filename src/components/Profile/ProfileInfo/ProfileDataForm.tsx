import React from 'react'
import { reduxForm } from 'redux-form'
import {
    createField,
    Input,
    Textarea,
} from '../../common/FormsControls/FormsControls'

const ProfileDataForm = ({ handleSubmit }: any) => {
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
                {/* {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    )
                })} */}
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(
    ProfileDataForm
)
