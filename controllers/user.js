import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const addUser = (req, res) => {
    let user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`The user details of ${user.firstName} is stored in the dummy database.`);
}

export const getUserById = (req, res) => {
    let { id } = req.params;

    let locateUser = users.find((user) => user.id == id);

    res.send(locateUser); 
}

export const deleteUser = (req, res) => {
    let { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`User with the id number ${id} has been deleted`); 
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;

    let user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`The user with the id ${id} has altered information.`)
}
 