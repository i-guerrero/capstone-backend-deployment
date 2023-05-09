const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
    console.log("name is ok");
  } else {
    res.status(400).json({ error: "required!" });
  }
};

module.exports = { checkName };
