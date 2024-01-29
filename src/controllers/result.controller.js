
import { Result } from "../models/result.models.js";
import {jsPDF} from 'jspdf'

const getResult = async (req, res)=> {
    try {
        if(!req.body) {
            res.status(400).json({message: 'Empty body is sent'})
        }

        const {rollNumber, motherName} = req.body
        
        const result = await Result.findOne({$and : [{rollNumber}, {motherName}]})

        const pdf = new jsPDF()
        console.log(result)
        pdf.text(`Student Name: ${String(result.studentName)}`, 10, 20)
        pdf.text(`Mother Name: ${String(result.motherName)}`, 10, 30)
        pdf.text(`RollNumber : ${String(result.rollNumber)}`, 10, 40)
        pdf.text(`Course Name : ${String(result.courseName)}`, 10, 50)
        // pdf.addImage('https://dpu.edu.in/img/logo.png', 'PNG', 10, 60, 50, 50)
        const pdfBuffer = pdf.output()

        // res.status(200).json({data: result})
        res.send(pdfBuffer)

    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'Unable to run the code of getResult'})
    }
}

const setResult = async (req, res) => {
    try{
        if(!req.body) {
            res.status(400).json({message: 'Empty body is sent'})
        }

        const {rollNumber, motherName, studentName, courseName} = req.body

        const data = {
            rollNumber,
            motherName: motherName.toLowerCase(), 
            studentName, 
            courseName
        }

        const response = await Result.create(data)

        if(!response) {
            res.status(400).json({message: 'Unable to create the result'})
        }

        res.status(200).json({data: response})

    }catch(error) {
        console.log(error)
        res.status(400).json({message: 'Unable to run the code of setResults'})
    }
}

export {
    getResult, 
    setResult
}