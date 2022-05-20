import { Fine, Uin } from '../assets/types';

class FineApi {
    async get(id: Uin) {
        const response = await fetch(`/fines/${id}`);
        const fine: Fine = await response.json();
        return fine;
    }
}

export default new FineApi();
