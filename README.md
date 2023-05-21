Family Tree

The Family Tree App is a web application built with React that allows users to create and visualize their family tree. Users can add family members as nodes, connect them, and provide relevant information such as names, birthdates, and family relationships. The app provides an intuitive interface for managing family relationships and navigating the family tree.

Technologies Used:

React: A JavaScript library for building user interfaces. React's component-based architecture enables the development of reusable and modular UI components.
Node.js: A JavaScript runtime environment that allows server-side execution of JavaScript code. It provides the backend functionality for the Family Tree App.
Material-UI: A popular UI library for React that provides pre-built components with a modern and visually appealing design.
CSS: Cascading Style Sheets (CSS) are used to style the components and layout of the app.
JavaScript: The primary programming language used to write the logic and functionality of the app.
HTML: The markup language used to structure the web app.

Process:

Setting up the project: The project is initialized using React and the necessary dependencies are installed. The file structure is organized to separate components and assets.

Creating the components: The app consists of several components such as the main App component, Header, Footer, Node, CreateArea, and NodeConnection. Each component is responsible for a specific part of the app's functionality.

Managing state: The app uses React's useState hook to manage the state of the nodes and other variables. The useState hook allows the app to update and rerender components based on changes in state.

Adding and deleting nodes: The App component manages the state of the nodes array. When a user adds a new node, the addNode function is called, which updates the state and triggers a rerender of the nodes. Similarly, when a user deletes a node, the deleteNode function is called, which removes the node from the state.

Updating nodes: The updateNode function is responsible for updating the name and content of a node. When a user edits a node, the updated values are passed to the updateNode function, which updates the node in the state.

Connecting nodes: The NodeConnection component is responsible for rendering the connections between nodes. It calculates the positions of the start and end points based on the node index and uses CSS styles to draw the connection lines.

User interaction: The app provides user-friendly interactions such as editing nodes, deleting nodes, and adding new nodes. Users can click on the edit icon to edit the name and content of a node, click on the delete icon to remove a node, and use the CreateArea component to add new nodes.

Styling and UI: Material-UI components and custom CSS styles are used to create an attractive and responsive user interface. The app is designed to be visually appealing and easy to use.
