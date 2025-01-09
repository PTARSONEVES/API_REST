import multer from "multer";
import multerConfig from "../config/multerConfig";

import Userfoto from "../models/Userfoto";
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

        const foto = await Userfoto.create({ originalname, filename, userid });

        res.json(req.file);
      } catch(e) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }
    });
  }
}

export default new UserfotoController();
