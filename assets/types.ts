export interface Fine {
    number: string;
    bill_at: Date;
    amount: string;
    amount_to_pay: string;
    discount_at: Date | null;
    discount_size: string | null;
    payment_status: string;
    quittance: string;
    pay_status: string;
    is_revoked: string | null;
    name: string;
    koap_code: string;
    koap_text: string | null;
    location: string;
    doc_type: string;
    doc_number: string;
    reg_cert: string | null;
    violation_at: Date;
    violator_name: string;
    division_name: string;
    division_code: string | null;
    fssp_ip: string | null;
    fssp_uin: string | null;
    payee_username: string;
    payee_inn: string;
    payee_kpp: string;
    payee_oktmo: string;
    payee_bank_name: string;
    payee_bank_bik: string;
    payee_bank_account: string;
    kbk: string;
    docs: {
        type: string;
        number: string;
        main: boolean;
    }[];
    pics: [];
    is_cached: boolean;
}

export enum SearchResultValue {
    initial,
    pending,
    success,
    failed
}
