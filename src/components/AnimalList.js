import React from 'react'

const AnimalList = () => {
    const date = new Date().toISOString().toString();
    const animals = [
        {
            id: 1,
            species: "Dog",
            name: "Rex",
            dateOfBirth: date
        },
        {
            id: 2,
            species: "Cat",
            name: "Snowball",
            dateOfBirth: date
        },
        {
            id: 3,
            species: "Rabbit",
            name: "Fluffy",
            dateOfBirth: date
        },
        {
            id: 4,
            species: "Hedgehog",
            name: "Needle",
            dateOfBirth: date
        },
        {
            id: 5,
            species: "Lion",
            name: "Simba",
            dateOfBirth: date
        },
        {
            id: 6,
            species: "Parrot",
            name: "Wings",
            dateOfBirth: ''
        },
    ];
    console.log(animals);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>species</th>
                        <th>name</th>
                        <th>Date of Birth</th>
            
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) =>
                    (
                        <tr key={animal.id}>
                            <td>{animal.species}</td>
                            <td>{animal.name}</td>
                            <td>{animal.dateOfBirth ? animal.dateOfBirth : "Nepoznat"}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default AnimalList