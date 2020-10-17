import React from "react";
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    Юля
                </div>
                <div className={styles.dialog}>
                    Влад
                </div>
                <div className={styles.dialog}>
                    Игорь
                </div>
                <div className={styles.dialog}>
                    Андрей
                </div>
                <div className={styles.dialog}>
                    Сергей
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>wosap</div>
                <div className={styles.message}>Scrrrrrrrr</div>
                <div className={styles.message}>Welcome home </div>
            </div>
        </div>
    );
}

export default Dialogs;
