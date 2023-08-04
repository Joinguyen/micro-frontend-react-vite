export interface IOption {
    value: string | number,
    label: string | number
}

const renderArrayNumber = (start: number = 1, stop: number = 5, step: number = 1): IOption[] => {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => ({ value: String(start + index * step), label: String(start + index * step) })
    );
};

const ARRAY_NUMBER_PEOPLE: IOption[] = renderArrayNumber(3, 200, 1);

const ARRAY_CATEGORY = [
    { value: 'chocolate', label: '도레미1' },
    { value: 'strawberry', label: '도레미2' },
    { value: 'vanilla', label: '도레미3' }
];

const ARRAY_HASHTAG = [
    { value: 'chocolate', label: '도레미1' },
    { value: 'strawberry', label: '도레미2' },
    { value: 'vanilla', label: '도레미3' }
];

export { ARRAY_NUMBER_PEOPLE, ARRAY_CATEGORY, ARRAY_HASHTAG };