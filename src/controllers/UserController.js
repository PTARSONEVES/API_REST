import User from "../models/user";

class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      name: 'Paulo',
      lastname: 'Araújo',
      alias: 'ptarsoneves',
      email: 'ptarsoneves@gmail.com',
      password: 'DeT@rso',
    });

    res.json(novoUser);
  }
}

export default new UserController();
