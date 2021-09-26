const getUserStatus = (state) => state.user;
const getUserInfo = ({ user }) => user?.user;
const getAllRecepies = ({ recepies }) => recepies.allRecepies;
const getRecepiesByAuthorId = ({ recepies }, authorId) => recepies.allRecepies.filter((recepie) => recepie.authorId === authorId);
const getRecepiesById = ({ recepies }, recepieId) => recepies.allRecepies.find((recipe) => recipe.id === recepieId);
const getAllBooks = ({ books }) => books.allBooks;
const getBookById = ({ books }, id) => books.allBooks.find(book => book.id === id);
const getComments = (state) => state.comments;

export { getUserStatus, getRecepiesByAuthorId, getAllBooks, getUserInfo, getRecepiesById, getComments, getAllRecepies, getBookById };