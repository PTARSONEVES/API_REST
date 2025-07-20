import User from "../models/user/User";
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = ''} = req.body;

    if (!email || !password) {
      return res.status(400).json({
        errors: ['BACK - Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        errors: ["BACK - Usuário não existe!"],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({
        errors: ["BACK - Senha inválida"],
      })
    }

    const { id } = user;
    // eslint-disable-next-line no-undef
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
    // eslint-disable-next-line no-undef
      expiresIn: process.env.TOKEN_EXPIRATION,
    });



    return res.json({ token, user: { name: user.name, id, email } });
  }
}

export default new TokenController();
