import {jsPDF} from 'jspdf'
import { Grade } from './Grade.utils.js'

export function FySem2ResultPdf(result) {
        const totalMarks = ( Number(result.HRM) + Number(result.FianancialAccounting) + Number(result.BussinessMathematics) + Number(result.RDBMS) + Number(result.webTechnology) + Number(result.AdvanceC))
        const percentage = (totalMarks / 600 * 100)

        const pdf = new jsPDF()
        console.log(result)
        pdf.setFont('helvetica', 'bold')

        pdf.setFontSize(25)
        pdf.text('Dr. DY. Patil ACS College Akurdi', 40, 20)
        
        pdf.setFontSize(16)
        
        pdf.setFont('helvetica', 'normal')
        pdf.text('--------------------------------------------------------------------------------------------------', 10, 23)
        pdf.text(`Student Name: ${String(result.studentName)}`, 10, 30)
        pdf.text(`Mother Name: ${String(result.motherName)}`, 10, 40)
        pdf.text(`RollNumber : ${String(result.rollNumber)}`, 10, 50)
        pdf.text(`Course Name : ${String(result.courseName)}`, 10, 60)
        pdf.text('--------------------------------------------------------------------------------------------------', 10,70)
        
        pdf.setFont('helvetica', 'bold')
        
        pdf.text('Subjects', 10, 80)
        pdf.text('Marks', 100, 80)
        
        pdf.setFont('helvetica', 'normal')
        pdf.text('HRM', 10, 90)
        pdf.text(result.HRM, 100, 90)
        
        pdf.text('Fianancial Accounting', 10, 100)
        pdf.text(result.FianancialAccounting, 100, 100)
        
        pdf.text('Bussiness Mathematics', 10, 110)
        pdf.text(result.BussinessMathematics, 100, 110)
        
        pdf.text('Relational Database', 10, 120)
        pdf.text(result.RDBMS, 100, 120)
        
        pdf.text('Web Technology', 10, 130)
        pdf.text(result.webTechnology, 100, 130)
        
        pdf.text('Advance C', 10, 140)
        pdf.text(result.AdvanceC, 100, 140)
        
        pdf.text('--------------------------------------------------------------------------------------------------', 10,145)
        
        pdf.setFont('helvetica', 'bold')
        
        pdf.text('Total', 10, 150)
        pdf.text(totalMarks.toString(), 100, 150)
        pdf.text('Percentage', 10, 160)
        pdf.text(percentage + '%', 100, 160)
        pdf.text('Grade', 10, 170)
        pdf.text(Grade(percentage), 100, 170)
        
        pdf.setFont('helvetica', 'normal')
        pdf.text('--------------------------------------------------------------------------------------------------', 10,180)
        
        pdf.setFontSize(10)
        pdf.setTextColor('red')
        pdf.text('This document is not authorized by the organization because this is an ', 10, 185)
        pdf.text('electronic document and can be manipulated so if any issue arises please', 10, 190)
        pdf.text('contact to management', 10, 195)
        pdf.setTextColor('black')
        pdf.setFontSize(16)

        return pdf.output()
}