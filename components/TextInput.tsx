import { ChangeEvent, FC, KeyboardEvent, memo, useCallback } from 'react';

interface TextInputProps {
    value: string;
    className?: string;
    id?: string;
    placeholder?: string;
    autoComplete?: boolean;
    onEnter: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<TextInputProps> = ({
    value,
    className,
    id,
    placeholder,
    autoComplete = true,
    onEnter,
    onChange
}) => {
    const handleKeyPress = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key == 'Enter') {
                onEnter();
            }
        },
        [onEnter]
    );

    return (
        <input
            id={id}
            type="text"
            className={className}
            placeholder={placeholder}
            autoComplete={autoComplete ? '' : 'off'}
            onChange={onChange}
            onKeyPress={handleKeyPress}
            value={value}
        />
    );
};

export default memo(TextInput);
