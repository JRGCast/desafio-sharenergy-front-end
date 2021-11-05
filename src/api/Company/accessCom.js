require('dotenv').config();
const companyUrl = process.env.REACT_APP_COMPANY_URL_FULL;
const options = {
  methods: "GET,PUT,POST,DELETE",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": '*'
  },
};

const accessAllComData = async (setState) => {
  try {
    const fetching = await fetch(companyUrl, options);
    const jsoning = await fetching.json();
    const setTheState = setState(jsoning);
    console.log(jsoning);
    return setTheState;
  } catch (error) {
    console.log(error);
    return setState(JSON.stringify(error));
  }
};

const accessAllComDataWithRTime = async (setState) => {
  try {
    const fetching = await fetch(`${companyUrl}/datareadabletime`, options);
    const jsoning = await fetching.json();
    const setTheState = setState(jsoning);
    console.log(jsoning);
    return setTheState;
  } catch (error) {
    console.log(error);
    return setState(JSON.stringify(error));
  }
};

export { accessAllComData, accessAllComDataWithRTime };
