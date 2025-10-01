const fullName = "LapTruong";
const birthYear = 2004;
const isStudent = true;
const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;
console.log(`
    Ten: ${fullName}
    Tuoi: ${age}
    La sinh vien: ${isStudent}`);