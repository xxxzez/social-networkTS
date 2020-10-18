import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

type DialogType = {
    name: string;
    id: string;
};

type MessageType = {
    message: string;
};

const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message: React.FC<MessageType> = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Юля" id="1" />
                <DialogItem name="Влад" id="2" />
                <DialogItem name="Игорь" id="3" />
                <DialogItem name="Серега" id="4" />
                <DialogItem name="Путин" id="5" />
            </div>
            <div className={styles.messages}>
                <Message message="ну чо там" />
                <Message message="пау пау пау" />
                <Message message="хоп хей" />
            </div>
        </div>
    );
};

export default Dialogs;
