import React from 'react';

import Loader from '../Loader';
import NotFound from '../NotFound';
import FineInfo from '../FineInfo';

export enum SearchResultValue {
    initial,
    searching,
    success,
    failed
}

interface SearchResultProps {
    result: SearchResultValue;
}

export default function SearchResult({ result }: SearchResultProps) {
    switch (result) {
        case SearchResultValue.searching:
            return <Loader size="1rem" />;

        case SearchResultValue.failed:
            return <NotFound uin="0355431010119102401042373" />;

        case SearchResultValue.success:
            return <FineInfo />;

        default:
            return null;
    }
}
