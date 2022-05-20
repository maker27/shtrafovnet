import Loader from '../Loader';
import NotFound from '../NotFound';
import FineInfo from '../FineInfo';
import { Fine, SearchResultValue, Uin } from '../../assets/types';

interface SearchResultProps {
    result: SearchResultValue;
    uin: Uin;
    fine?: Fine;
}

export default function SearchResult({ result, uin, fine }: SearchResultProps) {
    switch (result) {
        case SearchResultValue.pending:
            return <Loader size="1rem" />;

        case SearchResultValue.failed:
            return <NotFound uin={uin} />;

        case SearchResultValue.success:
            return <FineInfo fine={fine} />;

        default:
            return null;
    }
}
