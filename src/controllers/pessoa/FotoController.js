import multer from "multer";
import multerConfig from "../../config/multerConfig";

import Foto from "../../models/pessoa/Foto";
//import { fi } from "@faker-js/faker";

const upload = multer(multerConfig).single('foto');

class FotoController {
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

        await Foto.create({ originalname, filename, userid });

        return res.json(req.file);
      } catch {
        return res.status(400).json({
          errors: ['BACK -  Essa pessoa não existe.']
        });
      }
    });
  }
}

export default new FotoController();
