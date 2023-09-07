const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
function loadData(){
  fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}
const displayPhones = phones => {
  phones.forEach((phone) =>{
    console.log(phone);
  })
}

loadData();