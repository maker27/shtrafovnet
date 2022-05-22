const fs = require('fs');

import { Uin } from '../../assets/types';

const fineApi = {
    get: (uin: Uin) => {
        return new Promise((resolve, reject) => {
            fs.readFile(__dirname + `/${uin}.json`, 'utf8', (err: any, data: string) => {
                if (err) {
                    reject(err);
                }else{
                    resolve(JSON.parse(data));
                }
            });
        });
    }
};

export default fineApi;
