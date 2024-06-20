
export const validate = (values) => {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (!isNaN(values.name)) {
      errors.name = 'Name cannot be a number';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (isNaN(values.age) || values.age <= 0) {
      errors.age = 'Age must be a number greater than 0';
    }
  
    if (values.isAttendingWithGuest && !values.guestName) {
      errors.guestName = 'Guest Name is required';
    }else if (!isNaN(values.guestName)) {
      errors.guestName = 'Name cannot be a number';
    }
  
    return errors;
  };
  
