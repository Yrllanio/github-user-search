import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({text}:Props) => (

    <div>
        <button>
            <h5>{text}</h5>
        </button>
    </div>

);
export default ButtonIcon;