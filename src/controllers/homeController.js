class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
//    res.send("olá mundo!!")
  }
}

export default new HomeController();
