let data = [
    {id: '1', password: '1', name: 'Said', age: 18, address: 'Tashkent', branch: 'Yunusabad'},
    {id: '2', password: '12', name: 'Polat', age: 15, address: 'Tashkent', branch: 'Yunusabad'},
    {id: '3', password: '123', name: 'Ibrohim', age: 18, address: 'Tashkent', branch: 'Yunusabad'},
    {id: '4', password: '1234', name: 'Abdurahmon', age: 17, address: 'Tashkent', branch: 'Yunusabad'},
    {id: '5', password: '12345', name: 'Kamronbek', age: 18, address: 'Tashkent', branch: 'Yunusabad'},
    {id: '6', password: '123456', name: 'Jafar', age: 18, address: 'Tashkent', branch: 'Yunusabad'}
];

data.forEach(user => {
    let userData = document.createElement('div');
    userData.innerHTML = `
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Password: ${user.password}</p>
        <p>Age: ${user.age}</p>
        <p>Address: ${user.address}</p>
        <p>Branch: ${user.branch}</p>
        <hr>
    `;
    document.body.appendChild(userData);
});