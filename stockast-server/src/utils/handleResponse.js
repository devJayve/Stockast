const handleResponse = (response, res) => {
  if (!response.success) {
    console.error("Error:", response.message);
    return res.status(500).json(response);
  }
  return response.result;
};

module.exports = handleResponse;
