import React from 'react'

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
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
    }
    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <span onClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            onBlur={this.deactivateEditMode}
                            type="text"
                            value={this.props.status}
                            autoFocus
                        />
                    </div>
                )}
            </div>
        )
    }
}
