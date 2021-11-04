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
  const fetching = await fetch(companyUrl, options);
  const jsoning = await fetching.json();
  const setTheState = setState(jsoning);
  return setTheState;
};

const accessAllComDataWithRTime = async (setState) => {
  const fetching = await fetch(`${companyUrl}/datareadabletime`, options);
  const jsoning = await fetching.json();
  const setTheState = setState(jsoning);
  return setTheState;
};

export { accessAllComData, accessAllComDataWithRTime };
