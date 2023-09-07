function loadData(searchBrand = 'samsung'){
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchBrand}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}
const displayPhones = phones => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = '';
  phones.forEach((phone) =>{
    console.log(phone);

    const phoneCard = document.createElement('div');
    phoneCard.classList = 'card bg-white shadow-xl';
    phoneCard.innerHTML = `
      <figure class="bg-slate-200 m-6 p-2 rounded-none"><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="text-lg font-bold text-center text-[#403F3F]">${phone.phone_name}</h2>
          <p class="text-center text-[#706F6F]">There are many variations of passages of available, but the majority have suffered</p>
          <h2 class="text-lg font-bold text-center text-[#403F3F]">$999</h2>
          <div class="card-actions justify-center">
            <button class="btn btn-primary bg-blue-700 w-44 h-12">Buy Now</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneCard);
  })
}

const search = () => {
  const searchfild = document.getElementById('search-field');
  const searchText = searchfild.value;
  loadData(searchText);
  console.log(searchText)
}

loadData();