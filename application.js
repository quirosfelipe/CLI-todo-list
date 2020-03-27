// This is the State class that should manage the
// entire state of your application.

class State {
  // Called from program.js to create an instance
  // of the application state.
  constructor(filePath) {
    this.categories = [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ];
    this.filePath = filePath;
    this.todos = [];

  }
  // adds new note instance to todos array
  addNote(text) {
    const note = new Note(text, false)
    this.todos.push(note);
  }

  // adds new task instance to todos array
  addTask(title, description, categoryIndex) {
    const task = new Task(title, description, categoryIndex, false)
    this.todos.push(task);
  }

  getCategoryByIndex(index) {
    return this.categories[index];
  }

  getCategoryCount() {
    return this.categories.length;
  }

  getItemByIndex(index) {
    return this.todos[index];
  }

  getItemCount() {
    return this.todos.length;
  }

  // checks if item at index has been completed
  getItemIsIncomplete(index) {
    return !this.todos[index].completed;
  }

  // gets the text of item at index
  getItemListText(index) {
    const listItem = this.todos[index];
    if (listItem instanceof Note) {
      const { text, completed } = this.todos[index];
      return ["Note", text, completed];
    }
    else if (listItem instanceof Task) {
      const { title, description, categoryIndex, completed } = this.todos[index];
      return ["Task", description, completed];
    };
  }
  // loads data from tasks.json file if it exists, and maps it into 
  // state instances' variables (categories and todos)
  loadFromJson(json) {

  }

  // uses fs.writeFile() to create / recreate this.filepath
  save() {

  }

  // searches todos for match
  searchByTerm(term) {

  }

  setCategory(index, value) {
    this.categories[index] = value;
  }
}
// TODO: Any other initialization that you need.
class Note {
  constructor(text, completed) {
    this.text = text;
    this.completed = completed;
    completed = false;
  }


  complete() {
    this.completed = true;
  }

  getShortText() {

  }

  matches(term) {

  }
}

class Task {
  constructor(title, description, categoryIndex, completed) {
    this.title = title;
    this.description = description;
    this.categoryIndex = categoryIndex;
    this.completed = completed;
    completed = false;
  }

  complete() {
    this.completed = true;
  }

  getShortText() {

  }

  matches(term) {

  }

}



module.exports = {
  State,
  Note,
  Task,
};
