require('dotenv').config();
// Client Urls
// const clientUrl = process.env.REACT_APP_CLIENT_URL_FULL;

// Company Urls
// const companyUrl = process.env.REACT_APP_COMPANY_URL_FULL;
// const companyHumanTime = `${companyUrl}/datareadabletime`;

const options = {
  methods: "GET,PUT,POST,DELETE",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": '*'
  },
};

const accessApi = async (url) => {
  try {
    const fetching = await fetch(url, options);
    const jsoning = await fetching.json();
    return jsoning;
  } catch (error) {
    console.log(error);
    return (JSON.stringify(error.message));
  }
};

export { accessApi, };
