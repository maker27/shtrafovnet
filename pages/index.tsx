import React, { useEffect, useState } from 'react';

import SearchForm from '../components/SearchForm';
import PageLayout from '../components/PageLayout';
import SearchResult, { SearchResultValue } from '../components/SearchResult';

export default function Home() {
    const [searchResult, setSearchResult] = useState<SearchResultValue>(
        SearchResultValue.initial
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSearchResult(lastSearchResult =>
                lastSearchResult >= 3 ? 0 : lastSearchResult + 1
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <PageLayout title="Информация о штрафах">
            <SearchForm />
            <SearchResult result={searchResult} />
        </PageLayout>
    );
}
