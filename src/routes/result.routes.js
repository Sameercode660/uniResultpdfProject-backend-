import { Router } from "express";
import { getResult, setResult } from "../controllers/result.controller.js";

const router = Router()

router.route('/result').post(getResult)
router.route('/set-result').post(setResult)

export {router}