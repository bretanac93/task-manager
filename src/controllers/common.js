function handleError(res, err) {
  return res.status(400).send({
    message: err.message,
  });
}

module.exports = {
  handleError,
};
