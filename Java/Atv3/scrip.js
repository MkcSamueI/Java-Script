var now = new Date ()
var aniver = new Date ("2008/03/14")

var idade = now.getFullYear() - aniver.getFullYear()

if (now.getMonth() < aniver.getMonth()){
    idade--
}

else if (now.getMonth() == aniver.getMonth()){
    if (now.getDate() < aniver.getDate()){
        idade--
    }
}

console.log(idade)