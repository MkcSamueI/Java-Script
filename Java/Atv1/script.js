const nums = [1,2,3,4,5,6]

let total = 0

function SomaDosPares(){
    for (let i = 0; i < nums.length; i++){
        if (nums[i]%2 == 0){
            total += nums[i]
        }
    }
}

SomaDosPares()
console.log(total)