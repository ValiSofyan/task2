let celcius = 45
function temperatur (celcius) {
    let Fahrenheit =(celcius *( 9/5)) + 32
    return Fahrenheit
} 
console.log(temperatur(celcius));

// arrow function
let Fah = c=>  c *( 9/5) + 32
console.log(Fah(22));


//curryng function
function FahCel (a) {
    return (b) =>{
        return (c)=>{
            return a*b+c
        }

    }
}
console.log(FahCel(22)(1.8) (32));

