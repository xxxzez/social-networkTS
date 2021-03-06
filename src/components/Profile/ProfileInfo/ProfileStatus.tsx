import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            <b>Status:</b>
            {!editMode && (
                <span onClick={activateEditMode}>{status || '--------'}</span>
            )}
            {editMode && (
                <div>
                    <input
                        onBlur={deactivateEditMode}
                        type="text"
                        value={status}
                        autoFocus
                        onChange={onStatusChange}
                    />
                </div>
            )}
        </div>
    )
}
