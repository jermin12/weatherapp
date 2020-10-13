const api = {
	key:"5600e7a708acb0745dd5f4d6e3d8c666",
	url:"https://api.openweathermap.org/data/2.5/"

}

const Search = document.querySelector('.Search');

Search.addEventListener('keypress', typing);

function typing (ev)
{
	if(ev.keyCode==13)
{
	console.log(Search.value);
   lookingupcity(Search.value);
}
}

function lookingupcity(city)
{
	fetch(`${api.url}weather?q=${city}&units=metric&APPID=${api.key}`)
	.then( weather =>{ return weather.json();})
	.then(ShowOnDisplay);
}

function ShowOnDisplay( weather)
{
	console.log(weather);
	const body = document.getElementsByTagName('body')[0];
	let updatecity= document.querySelector('.location .city');
updatecity.innerText= `${weather.name}, ${weather.sys.country}`;


let d= new Date();
let updateDate= document.querySelector('.location .date');
updateDate.innerText= setdate(d);

let updatetemp= document.querySelector('.current .temp');
updatetemp.innerText=`${Math.round(weather.main.temp)} ° C `;

let updateweather= document.querySelector('.current .weather');
updateweather.innerText=`${weather.weather[0].main}`;


switch (updateweather.innerText) {
  case "Clouds":
    body.style.backgroundImage = "url('images/cloudy.jpg')";
    break;
  case "Rain":
     body.style.backgroundImage = "url('images/rain.jpg')";
    break;
  case "Sunny":
      body.style.backgroundImage = "url('images/sunny.jpg')";
    break;
  case "Clear":
     body.style.backgroundImage = "url('images/clear.jpg')";
    break;
case "Mist":
    body.style.backgroundImage = "url('images/mist.jpg')";
    break;
default:  
body.style.backgroundImage = "url('images/bg.jpg')"
}

let updatehilow= document.querySelector('.current .hi-low');
updatehilow.innerText=`${Math.round(weather.main.temp_max) } ° C / ${Math.round(weather.main.temp_min) } ° C `;
}


function setdate(d)
 {

 const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let day= week[d.getDay()];
	let date = d.getDate();
	let month= months[d.getMonth()];
	
	let year= d.getFullYear();
	return `${day} ${date} ${month} ${year}` ;
 }