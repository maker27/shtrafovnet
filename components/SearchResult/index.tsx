import Loader from '../Loader';
import NotFound from '../NotFound';
import FineInfo from '../FineInfo';
import { Fine, SearchResultValue } from '../../assets/types';

interface SearchResultProps {
    result: SearchResultValue;
    fine?: Fine;
}

export default function SearchResult({ result, fine }: SearchResultProps) {
    switch (result) {
        case SearchResultValue.pending:
            return <Loader size="1rem" />;

        case SearchResultValue.failed:
            return <NotFound uin="0355431010119102401042373" />;

        case SearchResultValue.success:
            return <FineInfo fine={fine} />;

        default:
            return null;
    }
}
