const loginController = (data, request) => {
  let counter;
  const dataF = data.some((userObj, count) => {
    if (
      request.body.email === userObj.email &&
      request.body.password === userObj.password
    ) {
      counter = count;
      return true;
    }
  });
  return { userAuthF: dataF, userAuthC: counter };
};

module.exports = loginController;
