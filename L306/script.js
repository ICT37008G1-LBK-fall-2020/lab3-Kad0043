let tvla = 0;
let studentebi = [];
let saxeli = '';
while (tvla < raodenoba)
{
    saxeli = prompt('შეიყვანე სტუდენტის სახელი:');
    studentebi.push(saxeli);
    tvla++;
}
let SadzieboSityva = prompt('მოსაძებნად შეიყვანეთ სტუდენტის სახელი:', '');
let ModzebniliStudSaxelebi = [];
for (let i = 0; i < studentebi.length; i++)
{
    if (studentebi[i].indexOf(SadzieboSityva) > -1)
    {
        ModzebniliStudSaxelebi.push(studentebi[i]);
    }
}