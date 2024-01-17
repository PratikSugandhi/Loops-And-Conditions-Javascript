let marks=45;
let grade;
if(marks>90)
{
    grade='A';
}
else if(marks>70 && marks<=90)
{
    grade='B';
}
else if(marks>50 && marks<=70)
{
    grade='C';
}
else
{
    grade='F';
}

console.log(`The grade of student according mark obtain is ${grade}`);