require('dotenv').config();

// Client Urls
export const clientUrl = process.env.REACT_APP_CLIENT_URL_FULL;
export const clientFindName = `${clientUrl}/byname`;
export const clientAdd = `${clientUrl}/newclient`;
export const clientUpdate = `${clientUrl}/updatelient`;
export const clientDelete = `${clientUrl}/deletelient`;


// Company Urls
export const companyUrl = process.env.REACT_APP_COMPANY_URL_FULL;
export const companyAllIntervals = `${companyUrl}/intervals`;
export const companyHumanTime = `${companyUrl}/datareadabletime`;