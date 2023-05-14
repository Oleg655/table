const baseUrl = process.env.REACT_APP_BASE_URL;

const rows = '1000';
const idDigits = 'number|1000';
const description = 'lorem|32';
const firstName = 'firstName';
const delay = '3';
const lastName = 'lastName';
const email = 'email';
const phone = 'phone|(xxx)xxx-xx-xx';
const address = 'addressObject';

export const getUrlBigData = (): string => {
    return `${baseUrl}?rows=${rows}&id={${idDigits}}&firstName={${firstName}}&delay=${delay}&lastName={${lastName}}&email={${email}}&phone={${phone}}&address={${address}}&description={${description}}`;
};

// http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}
