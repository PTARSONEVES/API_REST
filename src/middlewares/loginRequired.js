import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, idcontinente, email} = dados;
    req.userId = id;
    req.continenteId = idcontinente;
    req.userEmail = email;
    return next();
  } catch {
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
