import React, { useState } from 'react'
import classes from './AnimalList.module.css'

const AnimalList = () => {
    const date = new Date().toLocaleDateString();
    const [animals, setAnimals] = useState([
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
    ]);
    const animalSector = ["Dog", "Cat", "Rabbit", "Hedgehog", "Lion", "Parrot"];
    const [species, setSpecies] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [sector, setSector] = useState('');


    const speciesHandler = (event) => {
        setSpecies(event.target.value)
    }
    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const dateOfBirthHandler = (event) => {
        setDateOfBirth(event.target.value)
    }

    const addAnimalHandler = (event) => {

        event.preventDefault();

        setSpecies('')
        setName('')
        setDateOfBirth();

        if (species.trim().length === 0 && name.trim().length === 0 && dateOfBirth.trim().length === 0) {
            return alert('All fealds required!')
        }

        return setAnimals([...animals, { species, name, dateOfBirth: date,sector, id: Math.random() }]);
    }

    return (
        <div>
            <form className={classes.form} onSubmit={addAnimalHandler}>
                <label htmlFor="animalSpecies">Animal species</label>
                <input
                    type="text"
                    id="animalSpecies"
                    value={species}
                    onChange={speciesHandler}
                />
                <label htmlFor="animalName">Animal nasme</label>
                <input
                    type="text"
                    id="animalName"
                    value={name}
                    onChange={nameHandler}
                />
                <label htmlFor="animalDateOfBirth">Date of birth</label>
                <input
                    type="date"
                    id="animalDateOfBirth"
                    value={dateOfBirth}
                    onChange={dateOfBirthHandler}
                />
                <select
                    onChange={(e) => {
                        {
                            setSector(e.target.value);
                        }
                    }}
                >
                    {animalSector.map((sector) => {
                        return <option>{sector}</option>;
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Sector</th>

                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) =>
                    (
                        <tr key={animal.id}>
                            <td>{animal.species}</td>
                            <td>{animal.name}</td>
                            <td>{animal.dateOfBirth ? animal.dateOfBirth : "Unknown"}</td>
                            <td>{animal.sector ? animal.sector: "Unknown"}</td>
                            <td>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setAnimals(
                                            animals.filter(
                                                (removedAnimal) => removedAnimal.id !== animal.id
                                            ));
                                    }}
                                >
                                    Remove
                                </button>
                            </td>

                            <td>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setAnimals(
                                            animals.reduce((prev, curr) => {
                                                return animal.id === curr.id
                                                    ? [curr, ...prev]
                                                    : [...prev, curr];
                                            }, [])
                                        );
                                    }}
                                >
                                    Move to top
                                </button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )

}

export default AnimalList
