export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function isValidEmail(message = 'Please provide a valid email') {
    return (v) => EMAIL_REGEX.test(v) || message;
}

export function isRequired(message = 'This field is required') {
    return (v) => !!v || message;
}
