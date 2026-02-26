const king = { name: 'alvi', age: 14, country: "bangladesh" ,religion: 'islam'};
// Object.freeze(king);
Object.seal(king)
delete king.religion;
delete king.country;
delete king.name
king.name = 'Sohail';
king.queen = 'sheikh hasina'
console.log(king);