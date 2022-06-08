const apiController = {
  getAll(req, res) {
    return res.status(200).json({
      message: "ok",
      data: "test api",
    });
  },
};

export default apiController;
