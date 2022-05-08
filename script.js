
var age = +prompt ('yoshingizni kiriting')
if(age > 0 && age <= 18){

alert('siz yoshsiz')
}else if (age> 18 && age<=50){
   alert ('ishlashingiz kerak') 
}else if (age> 50 && age <=60){
    alert ('sizga yaqinda nafaqaga')

}
    else if (age > 60 && age <150 ){

        alert('siz nafaqaxorsiz')
}
else{
    console.info('xato')
}