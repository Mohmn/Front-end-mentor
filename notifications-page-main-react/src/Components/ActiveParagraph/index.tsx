import styles from '../global.module.css'

type Props = {
    name: string;
}

export default function ActiveParagraph(props: Props) {
    const { name } = props;

    return (
        <a className={styles.activeP}>{name}</a>
    )
}