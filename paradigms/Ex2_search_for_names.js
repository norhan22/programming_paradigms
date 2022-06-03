/*
Get student name by the Id
 */

///////////////////////////
// Imperative Paradigms
///////////////////////////

// Procedural  paradigm
const students=[{id:1,name:'Ahmed'},{id:2,name:'Mohammed'},{id:3,name:'Mostafa'}]
var targetId = 3
var result=''


for(let i = 0 ;i<students.length;i++){
    const student = students[i]
    if(student.id === targetId) {
        result = student.name;
        break;
    }
}

// OOP ( Object-Oriented  Programming) Paradigm
class getStudent{
    constructor(students,targetId) {
        this.targetId=targetId
        this.students = students
    }
    get student(){
        return this.students.find((s)=>s.id === this.targetId)?.name || ''
    }
}

result = new getStudent(students,targetId).student



///////////////////////////
// Declarative Paradigms
///////////////////////////
// Functional paradigm
result = students.find((s)=>s.id === targetId)?.name || ''

