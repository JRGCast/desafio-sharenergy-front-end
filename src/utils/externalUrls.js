require('dotenv').config();

// Client Urls
// export const clientUrl = process.env.REACT_APP_CLIENT_URL_FULL;
export const clientUrl = 'http://localhost:28060/clients'
export const clientFindName = `${clientUrl}/byname`;
export const clientAdd = `${clientUrl}/newclient`;
export const clientUpdate = `${clientUrl}/updateclient`;
export const clientDelete = `${clientUrl}/deleteclient`;


// Company Urls
export const companyUrl = process.env.REACT_APP_COMPANY_URL_FULL;
export const companyAllIntervals = `${companyUrl}/intervals`;
export const companyHumanTime = `${companyUrl}/datareadabletime`;