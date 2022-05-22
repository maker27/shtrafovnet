import { fireEvent, render, screen } from '@testing-library/react';

import Home from '../pages/index';
import { fineIds } from './mocks/fineIds';
import mockedFineApi from './mocks/fineApi';

// @ts-ignore
global.fetch = jest.fn(url => Promise.resolve({
    json: () => {
        const uin = url.toString().replace('/fines/', '');
        return mockedFineApi.get(uin);
    }
}));

describe('Home page', () => {
    beforeEach(() => {
        render(<Home />);
    });

    it('uses empty UIN', async () => {
        const findButton = screen.getByRole('button', {
            name: /найти/i
        });
        fireEvent.click(findButton);

        expect(await screen.findByText('Штраф не найден')).toBeTruthy();
    });

    it('appears hint after first typed number', async () => {
        const digit = '3';
        const input = screen.getByPlaceholderText('Введите УИН');
        fireEvent.change(input, { target: { value: digit } });
        expect(await screen.findByText(digit.padEnd(20, 'х'))).toBeTruthy();
    });

    it('searches fine info by Enter click', async () => {
        const uin = fineIds[0];
        const input = screen.getByPlaceholderText('Введите УИН');
        fireEvent.change(input, { target: { value: uin } });
        fireEvent.keyPress(input, {
            key: 'Enter',
            code: 'Enter',
            charCode: 13
        });
        expect(await screen.findByText(`Постановление #${uin}`)).toBeTruthy();
    });
});
