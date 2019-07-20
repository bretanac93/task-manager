module.exports = (req, res, next) => {
  const response = res.json;
  res.json = (data) => {
    const final = [{ ...data, ...{ success: true } }];
    response.call(this, final);
  };
  next();
};
