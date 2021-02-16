import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Search = () => (

    <div>
        <form className="form-search">
            <h1 className="title-position">Encontre um perfil Github</h1>
            <input type="text" className="input-position"/>
            <Link to="/search" className="button-position-search">
                <ButtonIcon text="Encontrar"/>
            </Link>
        </form>
        
    </div>
);

export default Search;