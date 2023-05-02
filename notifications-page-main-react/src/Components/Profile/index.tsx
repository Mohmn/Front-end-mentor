
import globalstyle from '../global.module.css'
import style from './profile.module.css'

type Props = {
    url: string;
}

export default function Profile(props: Props) {

    return (
        <img className={globalstyle.removePadding + " " + style.image}src={props.url}></img>
    )
}