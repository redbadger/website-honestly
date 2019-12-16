const inputTypes = {
  email: {
    fullName: 'Email address',
    validator: email => {
      // from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
  phone: {
    fullName: 'Phone number',
    validator: number => {
      const re = /^[0-9]*$/;
      return re.test(String(number).toLowerCase());
    },
  },
};

export default inputTypes;
