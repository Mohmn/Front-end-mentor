import ActiveParagraph from "../ActiveParagraph"
import Profile from "../Profile";
import style from './index.module.css'
import globalstyle from '../global.module.css'

type Props = {
    profileUrl: string;
    username: string;
    body?: string;
    generaltext: string;
    notificationTime: string
    highlightMessage?: string
    secondProfile?: string
    message?: string;
}

export default function Notification(props: Props) {
    const {
        profileUrl, username, body, notificationTime,
        highlightMessage, generaltext, message,
        secondProfile } = props;
    return (
        <div className={style.notification}>
            <Profile url={profileUrl} />
            <div className={style.notificationTimeDiv}>
                <div className={style.notificationHeader}>
                    {/* <ActiveParagraph name={username} />&nbsp;{generaltext}&nbsp;{highlightMessage && <ActiveParagraph name={highlightMessage} />}
                         */}
                    <p className={style.m0}>
                        <ActiveParagraph name={username} />&nbsp;{generaltext}&nbsp;{highlightMessage && <ActiveParagraph name={highlightMessage} />} <sub className={style.circle}></sub>
                    </p>
                </div>
                <sub className={style.notificationTime}>{notificationTime}</sub>
                {message &&
                    <div className={style.message}>
                        {message}
                    </div>
                }
            </div>
            {
                body &&
                <div className={style.notificationContent}>{body}</div>
            }

        </div>
    )
}