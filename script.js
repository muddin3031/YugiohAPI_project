


function type12()
{
    
let input=document.getElementById('namecard');
let request= new XMLHttpRequest();
let url= "https://db.ygoprodeck.com/api/v4/cardinfo.php?name="+input.value;


request.open("GET", url, true);

request.onload=function()
{
    let data = JSON.parse(this.response);
    console.log(data);
    let type= document.getElementById('type');
    let name= document.getElementById('name');
    let defense= document.getElementById('');
    let attack= document.getElementById('attack');
    let level= document.getElementById('level');
    let description= document.getElementById('description');
    let img=document.getElementById('imgcd');
    if (request.status>= 200 && request.status < 400)
    {
        name.textContent = " "+data[0][0].name;
        type.textContent= " "+data[0][0].type;
        defense.textContent=" "+data[0][0].def;
        attack.textContent=" "+data[0][0].atk;
        description.textContent=" "+data[0][0].desc;
        level.textContent=" "+data[0][0].level
      img.src=data[0][0].image_url;
      console.log("test")
    }
};

request.send();



}