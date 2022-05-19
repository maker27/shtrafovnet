export default function calculateCheckingDigit(uin: string) {
    const getWeightsSum = (offset = 0) => {
        return uin.split('').reduce((s, n, i) => {
            const digitWeight = (((i % 10) + offset) % 10) + 1;
            return s + Number(n) * digitWeight;
        }, 0);
    };

    let checkingDigit = getWeightsSum() % 11;

    if (checkingDigit === 10) {
        checkingDigit = getWeightsSum(2) % 11;
        if (checkingDigit === 10) checkingDigit = 0;
    }

    return checkingDigit.toString();
}
