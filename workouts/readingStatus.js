// Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.

const library = [ 
    {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true,
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
    }
];

const displayBookStatus = (library) => {
    console.log("\n" + "Book status: " + "\n");

    for (let i = 0; i < library.length; i++) {
        let book = library[i];

        if (book.readingStatus) {
            console.log(`${i + 1}. Already read the book "${book.title}" by author ${book.author}.`);
        } else {
            console.log(`${i + 1}. You still need to read the book "${book.title}" by ${book.author}.` + "\n");
        }
    }
};

displayBookStatus(library);