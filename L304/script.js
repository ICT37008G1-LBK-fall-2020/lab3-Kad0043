// დაწერეთ სკრიპტი, რომელიც ჯერ კითხავს მომხმარებელის რამდენი სტუდენტის შეყვანა სურს,
// ხოლო შემდეგ შეატანინებს იმდენ სახელს რამდენი სტუდენტის შეყვანაც მოისურვა მომხმარებელმა
let raodenoba = prompt('შეიყვანეთ სტუდენტების რაოდენობა:', '');

let studentebi = [];
for (let i=0; i < raodenoba; i++)
{
    let studenti = prompt('შეიყვანეთ სტუდენტის სახელი:', '');
    studentebi.push(studenti);
}
let studenttasia = studentebi.join(', ');
alert ('თქვენ შეიყვანილი სახელებია:\n'+studenttasia); 