import multer from "multer";
import multerConfig from "../../config/multerConfig";

import Userfoto from "../../models/user/Userfoto";
//import { fi } from "@faker-js/faker";

const upload = multer(multerConfig).single('foto');

class UserfotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors:[error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { userid } = req.body;

        await Userfoto.create({ originalname, filename, userid });

        return res.json(req.file);
      } catch {
        return res.status(400).json({
          errors: ['BACK -  Usuário não existe.']
        });
      }
    });
  }
}

export default new UserfotoController();
