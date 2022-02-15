import { Maybe, Nothing, Some } from '../MaybeHelpers';

const getValue = <U>(obj: Record<string | number, U>, key: string | number): Maybe<U> => {
    const valueExists = obj[key];

    if (valueExists) {
        return Some(valueExists);
    } else {
        return Nothing;
    }
};

export const ObjectHelpers = {
    getValue
};
