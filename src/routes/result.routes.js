import { Router } from "express";
import { getResult, setResult } from "../controllers/result.controller.js";
import { upload } from "../utils/multer.utils.js";
import { adminLogin } from "../controllers/admin.controller.js";

const router = Router()

router.route('/result').post(getResult)
router.route('/set-result').post(upload.fields([
    {
        name: 'resultFile',
        maxCount: 1
    }
]), setResult)
router.route('/admin-login').post(adminLogin)

export {router}