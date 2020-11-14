// დაწერეთ სკრიპტი რომელიც მომხმარებლის მიერ შეტანილ
// სტუდენტების სიას გამოიტანს შებრუნებული თანმიმდევრობით

let raodenoba = prompt('შეიყვანეთ სტუდენტების რაოდენობა:', '');

let studentebi = [];

for (let i=0; i<raodenoba; i++)
{
    let studenti = prompt('შეიყვანეთ სტუდენტის სახელი:', '');
    studentebi.push(studenti);
}


document.write(studentebi.reverse());