const prompt = require("prompt-sync")({ sigint: true });

// Get user input for basic salary
let basicSalary = parseFloat(prompt("Enter your basicSalary: "));
let bonus = 0;
let allowances = 0;
let relief = 5000 + 9000 + 2400;

// Function to calculate PAYE based on different salary brackets
function calculatePaye(basicSalary) {
    if (basicSalary <= 24000) return basicSalary * 0.1;
    else if (basicSalary <= 32333) return basicSalary * 0.25;
    else if (basicSalary <= 500000) return basicSalary * 0.3;
    else if (basicSalary <= 800000) return basicSalary * 0.325;
    else return basicSalary * 0.35;
}

let payeResult = calculatePaye(basicSalary);

// Function to calculate NHIF deduction based on salary brackets
function calculateNhifDeduction(basicSalary) {
    const nhifBrackets = [750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];
    for (let i = 1; i <= nhifBrackets.length; i++) {
        if (basicSalary <= i * 5000) return nhifBrackets[i - 1];
    }
    return nhifBrackets[nhifBrackets.length - 1];
}

let nhifDeductionsResult = calculateNhifDeduction(basicSalary);

// Function to calculate NSSF deductions (fixed at 6%)
function calculateNssfDeductions(basicSalary) {
    return basicSalary * 0.06;
}

let nssfDeductionsResult = calculateNssfDeductions(basicSalary);

// Calculate gross salary
let grossSalary = basicSalary + bonus + allowances;

// Calculate net salary
let netSalary = grossSalary - relief - payeResult - nhifDeductionsResult - nssfDeductionsResult;

// Output the results
console.log("PAYE Deduction:", payeResult);
console.log("NHIF Deduction:", nhifDeductionsResult);
console.log("NSSF Deduction:", nssfDeductionsResult);
console.log("Gross Salary:", grossSalary);
console.log("Net Salary:", netSalary);
