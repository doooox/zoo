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
        }
    ];
    console.log(animals);
    return (
        <div>
            <table >
                {animals.map((animal) =>
                (
                    <tr key={animal.id}>
                        <td>{animal.species}</td>
                        <td>{animal.name}</td>
                        <td>{animal.dateOfBirth}</td>
                    </tr>
                )
                )}
            </table>
        </div>
    )


}

export default AnimalList