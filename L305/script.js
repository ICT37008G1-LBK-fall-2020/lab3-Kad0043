// დაწერეთ სკრიპტი, რომელიც მომხმარებლის მიერ შეტანილი სტუდენტების სიიდან (წინა დავალების ანალოგიურად)
// გამოიტანს სტუდენტების სიას დალაგებულს ანბანის მიხედვით
let raodenoba = prompt('შეიყვანეთ სტუდენტების რაოდენობა:', '');

let studentebi = [];
for (let i=0; i < raodenoba; i++)
{
    let studenti = prompt('შეიყვანეთ სტუდენტის სახელი:', '');
    studentebi.push(studenti);
}
let studenttasia = studentebi.join(', ');
let anbanurad_dalagebuli = studentebi.sort();
alert ('თქვენ შეიყვანილი სახელებია:\n'+anbanurad_dalagebuli); 