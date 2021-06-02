var datainventory = [

    
    {fname: 'Brianna', balance: -54.99, rate: 2.7,},
    {fname: 'Dillon', balance: 1014.94, rate: 5.1,},
    {fname: 'Dmitri', balance: 0, rate: 7.2,},
    {fname: 'Hazel', balance: 0, rate: 7.2,},
    {fname: 'Isaiah', balance: 224.99, rate: 5.1},
    {fname: 'Laura', balance: -213.40, rate: 2.5},
    {fname: 'Matias', balance: -12.06, rate: 3.1},
    {fname: 'Monique', balance: 2220.54, rate: 7.2},
    {fname: 'Petra', balance: 500.35, rate: 4.9},
    {fname: 'Reggie', balance: 0, rate: 7.2} 
]
function createMessage(person){
console.log (person)
if (person.balance < 0 ){
    console.log ("Because you are such a great customer, we're lowering your interest rate to 3.1%")

}
else if(person.balance > 0){
    console.log("this is an attempt to collect a debt from CashMoney Bank. Your account is past due by the amount of")
}
else if(person.balance == 0){
console.log("greetings from CashMoney Bank. Your balance is current. No need for action until next month.")
}
}
for(var i = 0; i < datainventory.length; i++){
    createMessage(datainventory[i])
}
