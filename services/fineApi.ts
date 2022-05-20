import { Fine } from '../assets/types';

class FineApi {
    async get(id: Fine['number']) {
        const response = await fetch(`/fines/${id}`);
        const fine: Fine = await response.json();
        return fine;
    }
}

export default new FineApi();
