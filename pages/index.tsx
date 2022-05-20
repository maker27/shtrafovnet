import { useCallback, useState } from 'react';

import SearchForm from '../components/SearchForm';
import PageLayout from '../components/PageLayout';
import SearchResult from '../components/SearchResult';
import { Fine, SearchResultValue, Uin } from '../assets/types';
import FineApi from '../services/fineApi';

export default function Home() {
    const [searchResult, setSearchResult] = useState<SearchResultValue>(
        SearchResultValue.initial
    );
    const [uin, setUin] = useState<Uin>('');
    const [fine, setFine] = useState<Fine>();

    const onSearch = useCallback((fineId: Uin) => {
        setSearchResult(SearchResultValue.pending);
        FineApi.get(fineId)
            .then(fine => {
                setFine(fine);
                setSearchResult(SearchResultValue.success);
            })
            .catch(() => {
                setUin(fineId);
                setSearchResult(SearchResultValue.failed);
            });
    }, []);

    return (
        <PageLayout title="Информация о штрафах">
            <SearchForm onSearch={onSearch} />
            <SearchResult result={searchResult} uin={uin} fine={fine} />
        </PageLayout>
    );
}
