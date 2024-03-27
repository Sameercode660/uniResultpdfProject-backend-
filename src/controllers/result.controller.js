import { FySem1Result } from "../models/fySem1_result.model.js";
import { FySem2Result } from "../models/fySem2_result.model.js";
import { Result } from "../models/result.models.js";
import { SySem1Result } from "../models/sySem1_result.model.js";
import { SySem2Result } from "../models/sySem2_result.model.js";
import { TySem1Result } from "../models/tySem1_result.model.js";
import { TySem2Result } from "../models/tySem2_result.model.js";
import { FySem1ResultPdf } from "../utils/FySem1Result.utils.js";
import { FySem2ResultPdf } from "../utils/FySem2Result.utils.js";
import { SySem1ResultPdf } from "../utils/SySem1Result.utils.js";
import { SySem2ResultPdf } from "../utils/SySem2Result.utils.js";
import { TySem1ResultPdf } from "../utils/TySem1Result.utils.js";
import { TySem2ResultPdf } from "../utils/TySem2Result.utils.js";
import XLSX from "xlsx";

const getResult = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Empty body is sent" });
    }

    const { rollNumber, motherName, course } = req.body;

    console.log(rollNumber, motherName, course)

    if (course == "fybba(ca)sem-I") {
      var result = await FySem1Result.findOne({
        $and: [{ rollNumber }, { motherName }],
      });
      if (!result) {
        console.log("Result is not found");
      }
      var pdfBuffer = FySem1ResultPdf(result);
    } else if (course == "fybba(ca)sem-II") {
      var result = await FySem2Result.findOne({
        $and: [{ rollNumber }, { motherName }],
      });
      var pdfBuffer = FySem2ResultPdf(result);
      if (!result) {
        console.log("Result is not found");
      }
    } else if (course == "sybba(ca)sem-I") {
      var result = await SySem1Result.findOne({
        $and: [{ rollNumber }, { motherName }],
      });
      var pdfBuffer = SySem1ResultPdf(result);
      if (!result) {
        console.log("Result is not found");
      }
    } else if (course == "sybba(ca)sem-II") {
      var result = await SySem2Result.findOne({
        $and: [{ rollNumber }, { motherName }],
      });
      var pdfBuffer = SySem2ResultPdf(result);
      if (!result) {
        console.log("Result is not found");
      }
    } else if (course == "tybba(ca)sem-I") {
      var result = await TySem1Result.findOne({
        $and: [{ rollNumber }, { motherName }],
      });
      var pdfBuffer = TySem1ResultPdf(result);
      if (!result) {
        console.log("Result is not found");
      }
    } else if (course == "tybba(ca)sem-II") {
      var result = await TySem2Result.findOne({
        $and: [{ rollNumber }, { motherName }],
      });
      var pdfBuffer = TySem2ResultPdf(result);
      if (!result) {
        console.log("Result is not found");
      }
    }

    // res.status(200).json({data: result})
    res.send(pdfBuffer);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to run the code of getResult" });
  }
};

const setResult = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Empty body is sent" });
    }

    const { course } = req.body;

    const file = req.files.resultFile[0].path;

    const workbook = XLSX.readFile(file);

    const sheetName = workbook.SheetNames[0];

    const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    if (course == "fybba(ca)sem-I") {

        if(await FySem1Result.exists()) {
            await FySem1Result.deleteMany({})
            var response = await FySem1Result.insertMany(excelData)
        } else {
            var response = await FySem1Result.create(excelData);
        }
    } else if (course == "fybba(ca)sem-II") {

      var response = await FySem2Result.create(excelData);
      
    } else if (course == "sybba(ca)sem-I") {

      var response = await SySem1Result.create(excelData);

    } else if (course == "sybba(ca)sem-II") {

      var response = await SySem2Result.create(excelData);

    } else if (course == "tybba(ca)sem-I") {

      var response = await TySem1Result.create(excelData);

    } else if (course == "tybba(ca)sem-II") {

      var response = await TySem2Result.create(excelData);

    }

    if (!excelData) {
      return res.status(400).json({ message: "failed" });
    }
    return res.status(200).json({ message: "success", response });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to run the code of setResults" });
  }
};

export { getResult, setResult };

/*
 fybba(ca)sem-I
 fybba(ca)sem-II
sybba(ca)sem-I
sybba(ca)sem-II
tybba(ca)sem-I
tybba(ca)sem-II
*/
