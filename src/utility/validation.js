import validator from 'validator';

export const checkValidity = (newValue, config) => {
    const rules = config.validation;
    const label = config.label;
    let error = '';
    let isValid = true;

    if (rules.required) {
        const isEmpty = !validator.isEmpty(newValue);
        isValid = isEmpty && isValid;
    }

    if (rules.minLength) {
        const isMinLength = validator.isLength(newValue, {min: rules.minLength}) && isValid;
        error = isMinLength
            ? ''
            : `The ${label} must have at least ${rules.minLength} characters.`;
        isValid = isMinLength && isValid;
    }

    if (rules.maxLength) {
        const isMaxLength = validator.isLength(newValue, {max: rules.maxLength}) && isValid;
        error = isMaxLength
            ? ''
            : `The ${label} must have at most ${rules.maxLength} characters.`;
        isValid = isMaxLength && isValid;
    }

    if (rules.isEmail) {
        const isEmail = validator.isEmail(newValue) && isValid;
        error = isEmail
            ? ''
            : `The ${label} must be a email.`;
        isValid = isEmail && isValid;
    }

    return {isValid, error}
}