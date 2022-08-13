const demo = async (req, res) => {
  try {
    res.json({
      message: "Demo.",
    })
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error.",
      error,
    })
  }
}

module.exports = {
  demo,
}
