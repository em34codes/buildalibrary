// Task 1: Create an empty class called Media.
class Media {
  
  // Task 2: create a constructor() method that takes 1 parameter: title.
  //Task 3: set the Media properties: Book, CD, & movie. Prepend all properties with an underscore. Set _title to title, _isCheckedOut to false, & _ratings to an empty array.
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Task 4: set getters for title, isCheckedOut, and ratings. Each getter should return the values saved to the matching property.
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }

  // Task 5: create a setter for the isCheckedOut property.
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  // Task 6: create a toggleCheckOutStatus method that changes the saved value to the _isCheckedOut property. If it's true, change it to false. If it's false, change it to true.
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  // Task 7: return the average value of the ratings array. Use reduce method to find the sum of the ratings aray. Divide this sum by the length of the ratings array and return the result.
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating, 0);
    return ratingsSum / this.ratings.length;
  }

  // Task 8: add a method called addRating that accepts 1 arcuement and uses .push() to add it to the end of the ratings array.
  addRating(value) {
    this.ratings.push(value);
  }
}

// Task 9: create a Book class that extends Media.
class Book extends Media {
  
  // Task 10: create a constructor that accepts 3 arguements: author, title, pages. These arguements are used to set properties that do not have default values.
  constructor(author, title, pages) {
    // Task 11: call super on the 1st linek of the Book constructor method. Pass it any arguments that the parent constructor (Media) uses.
    super(title);
    
    // Task 12: use the remaining arguments to set the author and pages in Book
    this._author = author;
    this._pages = pages;
  }

    // Task 13: add 2 new getters to the Book class. Each getter should return the value saved to its matching property. (Book inherits Media's properties & getters so, only 2 new getters need to be created.)
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
}

// Task 14: create the Movie class that extends Media. Create a constructor that accepts director, title, and runtime arguements. On the 1st line of the constructor, call super and pass it title. Then, set the _director and _runTime properties. Under the constructor, create getters for director & runTime. Each should return the value saved to that property.
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

// Task 15: create a Book instance w/the following properties: Author: 'Bill Bryson', Title: 'A Short History of Nearly Everything', Pages: 544. Save the instance to a constant variable: historyOfEverything
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', '544');

// Task 16: call the .toggleCheckOutStatus() on historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();

// Task 17: log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut);

// Task 18: call .addRating() 3 times on the historyOfEverything with inputs 4, 5, & 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Task 19: call .getAverageRating() on the historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());

// Task 20: create a Movie instance with the following properties: director: 'Jan de Bont', Title: 'Speed', runTime: 116. Save the instance to a constant variable: speed.
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Task 21: call .toggleCheckOutStatus on the speed instance.
speed.toggleCheckOutStatus();

// Task 22: log the value saved to isCheckedOut property in the speed instance.
console.log(speed.isCheckedOut);

// Task 23: call .addRating() 3 times on speed with the inputs, 1, 1, & 5.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Task 24: call the .getAverageRating() on speed & log the result to the console.
console.log(speed.getAverageRating());