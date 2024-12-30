class HomeController {
  index(req, res) {
    res.send("olá mundo!!")
  }
}

export default new HomeController();
