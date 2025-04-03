function extractNameAndStreet(person) {
    // Destructure the name and street from the nested object
    const { name, address: { street } } = person;

    // Return an object containing the name and street
    return { name, street };
}

// Example usage:
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Elm St",
        city: "Springfield",
        zip: "12345"
    }
};

const result = extractNameAndStreet(person);

console.log(result);  // Output: { name: 'John Doe', street: '123 Elm St' }
