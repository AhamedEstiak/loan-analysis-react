export const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const validPhoneRegex = RegExp(/^\+8801[3-9]\d{8}$/);

export const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export const personalInfoValidator = (name, value, errors) => {
    let newErrors = errors;

    switch (name) {
        case 'name':
            newErrors.name = value.length < 2 ? 'Name must be at least 2 characters long!' : '';
            break;
        case 'email':
            newErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
            break;
        case 'phone':
            newErrors.phone = validPhoneRegex.test(value) ? '' : 'Phone number is not valid';
            break;
        default:
            break;
    }

    return newErrors;
}
