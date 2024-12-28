import User from "../models/user";

class HomeController {
  async index(req, res) {
    const novoUser = await User.create({
      name: 'Paulo',
      lastname: 'Araújo',
      alias: 'ptarsoneves',
      email: 'ptarsoneves@gmail.com',
    });
    res.json(novoUser);
  }
}

export default new HomeController();
