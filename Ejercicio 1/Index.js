let student = document.getElementById("name");
let subject = document.getElementById("subject");
let subjectValue = document.getElementById("subjectValue");
let subtotal = 0
let subjectValues = [];

const btnAdd = document.getElementById("btnAdd");
const btnCalculate = document.getElementById("btnCalculate");
const addElements = document.getElementById("addElements");

btnAdd.addEventListener("click", () => {
    subjectValues.push(subjectValue.value);    
    let p = document.createElement('p');
    p.innerText = "Materia: " + subject.value + " Valor: $" + subjectValue.value;
    addElements.append(p);
})

btnCalculate.addEventListener("click", () => {
    for (let i = 0; i < subjectValues.length; i++) {
       subtotal = subtotal + Number(subjectValues[i]);
    }

    let total = (subtotal * 0.98) + 20000 + 8000; 

    alert(student.value + " el valor total a pagar por las materias es de $ " + total);
})
