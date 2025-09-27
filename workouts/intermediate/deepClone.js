// Write a function to deep clone a nested object (without using structuredClone or libraries).
const nestedObject = {
  name: "Alice",
  age: 28,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    location: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  hobbies: [
    "reading",
    "gaming",
    {
      type: "sports",
      list: ["football", "tennis", { indoor: "badminton" }],
    },
  ],
  contact: {
    email: "alice@example.com",
    phones: {
      home: "123-456-7890",
      work: "987-654-3210",
    },
  },
};

const deepClone = (value) => {
  if (Array.isArray(value)) {
    return value.map(deepClone);
  } else if (value && typeof value === "object") {
    const clone = {};

    for (const key in value) {
      clone[key] = deepClone(value[key]);
    }

    return clone;
  }

  return value;
};

const deep = deepClone(nestedObject);
console.log(deep);