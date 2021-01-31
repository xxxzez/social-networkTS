import React, { ChangeEvent } from 'react'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <span onClick={this.activateEditMode}>
                            {this.state.status || '-----'}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            onBlur={this.deactivateEditMode}
                            type="text"
                            value={this.state.status}
                            autoFocus
                            onChange={this.onStatusChange}
                        />
                    </div>
                )}
            </div>
        )
    }
}
