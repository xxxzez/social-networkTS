import React from 'react'
import { NavLink } from 'react-router-dom'
import { DialogType } from '../../../Types'
import s from './DialogItem.module.css'

export const DialogItem: React.FC<DialogType> = React.memo((props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
})
