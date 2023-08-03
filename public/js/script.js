
let form = document.getElementById('form1')
const data=document.getElementById("data")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // form.style.marginLeft="20px"
    // form.style.marginBottom="50px"
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const  longitude=document.getElementById('longtitude')
const latitude=document.getElementById('latitude')


let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            latitude.innerText=""
          longitude.innerText=""
           
        }
        else {
            locationF.innerText = data.location
            forecastF.innerText = data.forecast
            latitude.innerText=data.latitude
            longitude.innerText=data.longitude
           
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e)
    }
}

