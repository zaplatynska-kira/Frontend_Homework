const list = document.getElementById('userList');
const details = document.getElementById('userDetails');

async function asycAndAwaid(){
    try{
        const response=await fetch ('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        users.forEach(user => {
            const li= document.createElement('li');
            li.classList.add('li');
            li.textContent=user.name;
            li.addEventListener('click',() =>displayUserDetails (user));
            list.appendChild(li);
        });
    }catch (error){
        const li=document.createElement('li');
        li.textContent=error;
        li.appendChild(li);
    } finally{
        console.log('Finisch')
    }loadPostsBtn.addEventListener('click', async () => {
        
        await fetchAndDisplayUsers();
    });
    

    }
    


function displayUserDetails({name, email, phone, website, company: {name: brand}, address: {city, street, suite}}) {
    details.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Phone: </strong>${phone}</p>
        <p><strong>Website: </strong>${website}</p>
        <p><strong>Company: </strong>${brand}</p>
        <p><strong>Address: </strong>${city} ${street} ${suite}</p>
    `;
}loadPostsBtn.addEventListener('click', async () => {
    
    await asycAndAwaid ();
});

