# Building Houses App: Components & Pages

This README provides an overview of the directories and files structured within the `components` and `pages` directories of the Building Houses App.

## Components

### 1. CarouselWithContent
- `CarouselWithContent.Component.jsx`

`CarouselWithContentComponent` is a functional React component rendering a customizable carousel slider using "@material-tailwind/react" components. It accepts images and styles through props and displays navigation arrows for user interactivity.

#### Key Features:

- **Props Customization:** Accepts `imageClassName`, `content`, and `carouselClassName` for styling and rendering.
- **Carousel Properties:** 
  - `autoplay` set to `false` prevents automatic sliding.
  - `loop` set to `true` enables continuous cycling.
  - `transition` with a duration of 1 for slide transition speed.
- **Navigation Arrows:** Custom arrows using `IconButton` component, with handlers for navigation.
- **Content Rendering:** Maps over the `content` prop to render each image with a unique key.

This component is ideal for displaying a series of images in a sliding format, with customizable styles and user-controlled navigation.


### 2. ComplexNavbar
- `ComplexNavbar.Component.jsx`

`ComplexNavbarComponent` is a React component rendering a complex navigation bar using the "@material-tailwind/react" library components and "@heroicons/react" for icons. It contains links rendered from `navListItems` and a dropdown menu generated from `navListMenuItems`.

#### Key Features:

- **Responsive Design:** The component displays navigation links and a menu, adjusting its layout for different screen sizes.
- **Dropdown Menu:** Renders a dropdown menu (`NavListMenu`) containing items from `navListMenuItems`.
- **Navigation Links:** Renders a list of navigation links (`NavList`) from `navListItems`, each with an icon and label.
- **Logo:** Includes a logo image linked to the home page.
- **Mobile Navigation:** Incorporates `MobileNav` for responsive navigation on smaller screens, toggled by an `IconButton`.
- **State Management:** Uses local state to manage the visibility of navigation for different screen sizes.

This component provides a versatile and responsive navigation solution, with a dropdown menu and navigation links that can be customized through the items lists.


### 3. ContactMap
- `ContactMap.Component.jsx`

`ContactMapComponent` is a React component designed to present contact information and a location map to the users.

#### Structure:

- **Title & Description:** Displays a title "Наши контактные данные", an underline, and a text paragraph informing users to use the contact information provided for any queries or additional information.
  
- **Map Display:** Features a full-width, height-constrained map embedded through an `iframe` sourced from Yandex, showcasing a specific location.

This component effectively combines textual contact information with a visual representation of the location, allowing for enhanced user interaction and accessibility.



### 4. Contacts
- `Contacts.Component.jsx`

`ContactsComponent` is a React component that displays contact information and provides a contact form for user inquiries. It utilizes UI elements from `@material-tailwind/react` and `@heroicons/react`.

#### Structure:
- **Contact Details**: Presents the phone number, email, and address with corresponding icons.
- **Contact Form**: Offers fields for name, phone, email, and message, along with a submit button.



### 5. ContactUs
- `ContactUs.component.jsx`

`ContactUsComponent` is a React component designed to gather user inquiries. It features an overlaid form on a background image, making use of the `@material-tailwind/react` library for UI elements.

#### Structure:
- **Background Image**: A darkened image covers the entire width, setting the visual mood.
- **Header**: A prominent title and subtitle instruct users to "write to us" and promise prompt answers to questions.
- **Contact Form**:
  - **User Details**: Fields to input name and phone number.
  - **Communication**: Fields for email and a message.
  - **Submit Button**: A green button inviting the user to send their inquiry.


### 6. FooterWithSocialLinks
- `FooterWithSocialLinks.Component.jsx`

`ContactUsComponent` is a visually appealing React component, meant to provide users with a means to reach out and make inquiries. It employs the `@material-tailwind/react` library for UI elements, ensuring a modern and responsive design.

#### Structure
##### Background Image
- A full-width, darkened background image sets a visually engaging mood for the component, establishing a thematic consistency.

##### Header
- Positioned at the top, the header comprises a bold title and a subtitle, encouraging users to "Write to Us" and reassuring them of prompt responses to their inquiries.

#### Contact Form
The form is the main interactive element, designed to collect user information and communication preferences.
##### User Details
- **Name Field**: Allows the user to input their name.
- **Phone Number Field**: A dedicated field for entering the contact number.
##### Communication
- **Email Field**: Designed for users to enter their email address.
- **Message Field**: A larger text area where users can type their message or inquiry.
##### Submit Button
- A visually striking green button positioned below the form fields, inviting users to send their inquiry.

#### Implementation
The component is implemented using React, making use of the react-router-dom library to handle navigation. The logo and any additional assets are imported at the beginning of the file for better asset management.



### 7. Portfolio
- `Portfolio.Component.jsx`

`PortfolioComponent` is a functional React component that serves to display a collection of houses in a portfolio. It leverages the `flex` display property to create a responsive and adaptable layout. Each individual house in the portfolio is represented using the `PortfolioCardComponent`.

#### Props
- **Houses**: An array of house objects that the component maps over to generate a series of `PortfolioCardComponent`s. Each house object should contain at least a `house_id` property to ensure that each component maintains a unique key.

#### Structure

##### PortfolioCardComponent
- For each house in the `Houses` prop, a `PortfolioCardComponent` is created and passed the individual house object as a prop. The `house_id` property of each house object is used as the `key` prop for each `PortfolioCardComponent`, ensuring the stability of the rendered list.

#### Implementation
The `PortfolioComponent` is defined as a functional component in React, receiving `Houses` as its props and mapping over them to render a `PortfolioCardComponent` for each house. The `PortfolioCardComponent` is imported at the beginning of the file, and the component is exported as the default export at the end of the file.

   - #### PortfolioCard
     - `PortfolioCard.Component.jsx`

`PortfolioCardComponent` is a React component responsible for displaying individual house data in a card format. It utilizes the `@material-tailwind/react` library for UI elements and includes a link to view more details about the house, leveraging React Router for navigation. Additionally, it fetches and displays an image from Firebase, corresponding to each house.

##### Props
- **house**: An object containing the details of a house. The object includes the `house_id`, `name`, `bedrooms`, `floors`, and `total_area` properties.

##### Structure
###### Card
- The main container for each individual house's data, styled with Tailwind CSS classes.

###### CardHeader
- **Image**: Displays an image fetched from Firebase using the `GetFireBaseImageComponent`, based on the `house_id`. The image features hover scaling and transition effects.

###### CardBody
- Contains details about the house, organized using flexbox.
  - **House Name**: Displays the name of the house.
  - **Details Link**: A link that navigates to more details about the house, using the `house_id` in the URL.
  - **House Details**: Displays the number of bedrooms, floors, and total area of the house in square meters.

##### CardFooter
- Not explicitly defined in this component, but can be added for additional information or actions.


### 8. Projects
- `Project.Component.jsx

`ProjectComponent` is a functional React component that serves to display a collection of projects, representing houses. It leverages the `flex` display property to create a responsive and adaptable layout. Each individual project is represented using the `ProjectCardComponent`.

#### Props
- **Houses**: An array of house objects that the component maps over to generate a series of `ProjectCardComponent`s. Each house object should contain at least a `house_id` property to ensure that each component maintains a unique key.

#### Structure
##### ProjectCardComponent
- For each house in the `Houses` prop, a `ProjectCardComponent` is created and passed the individual house object as a prop. The `house_id` property of each house object is used as the `key` prop for each `ProjectCardComponent`, ensuring the stability of the rendered list.

#### Implementation
The `ProjectComponent` is defined as a functional component in React, receiving `Houses` as its props and mapping over them to render a `ProjectCardComponent` for each house. The `ProjectCardComponent` is imported at the beginning of the file, and the component is exported as the default export at the end of the file.


   - #### ProjectCard
     - `ProjectCard.Component.jsx`

`ProjectCardComponent` is a React component responsible for displaying individual project data in a card format, representing houses. It utilizes the `@material-tailwind/react` library for UI elements and includes a link to view more details about the project, leveraging React Router for navigation. Additionally, it fetches and displays an image from Firebase, corresponding to each project.

##### Props
- **house**: An object containing the details of a house, representing a project. The object includes the `house_id`, `name`, `bedrooms`, `floors`, and `total_area` properties.

##### Structure
###### Card
- The main container for each individual project's data, styled with Tailwind CSS classes.

###### CardHeader
- **Image**: Displays an image fetched from Firebase using the `GetFireBaseImageComponent`, based on the `house_id`. The image features hover scaling and transition effects, and it is retrieved with the filename 'project.JPG'.

###### CardBody
- Contains details about the project, organized using flexbox.
  - **Project Name**: Displays the name of the project.
  - **Details Link**: A link that navigates to more details about the project, using the `house_id` in the URL and routing to the `/projects/house/` path.
  - **Project Details**: Displays the number of bedrooms, floors, and total area of the project in square meters.

###### CardFooter
- Not explicitly defined in this component, but can be added for additional information or actions.



### 9. Reviews
- `Reviews.Component.jsx`


### 10. useFirebaseImages
- `useFirebaseImagesHook.jsx`

`useFirebaseImages` is a custom React Hook designed to retrieve image URLs from a specified directory in Firebase Storage, filtering the images based on a given name pattern.

#### Parameters
- **dir**: A string representing the directory in Firebase Storage where the images are stored.
- **imageNamePattern**: A string pattern used to filter the image files by their names.

#### Working
##### useState
- Initializes the `imageUrls` state variable, which holds an array of image URLs.

##### useEffect
- Executes the `fetchImages` function whenever the `dir` or `imageNamePattern` parameters change.
- The `fetchImages` function is responsible for fetching and setting the image URLs:
  1. **Ref & ListAll**: Uses `ref` and `listAll` to get a reference to the directory and list all files in it.
  2. **Filtering**: Filters the images based on the `imageNamePattern`.
  3. **URLs Retrieval**: Maps over the filtered images, retrieves the download URLs using `getDownloadURL`, and updates the `imageUrls` state.

##### Return
- Returns an array of objects, each containing an `id` and `src` (the image URL).

##### Error Handling
- Logs any error encountered during the images fetching process to the console.


### 11. WhyUs
- `WhyUs.Component.jsx`

`WhyUsComponent` is a stateless functional component in React, designed to showcase the unique selling propositions of a construction company. It utilizes the `@material-tailwind/react` library for UI elements and `@heroicons/react` for displaying icons.

#### Structure
The component is divided into two main sections, the Header Section and the Cards Section.

##### Header Section
- **Title**: Displays a title, "Почему мы — ваш лучший выбор", indicating why the company is the best choice.
- **Subheading**: Provides a brief description of the company's superiority at every project stage.

##### Cards Section
- Renders a series of `Card` components based on the `tabs` array, each representing a unique selling proposition of the company.
- Each `Card` contains:
  - **Icon**: A corresponding icon from `@heroicons/react`, depicting the theme of the proposition.
  - **Title**: The title of the unique selling proposition.
  - **Description**: A detailed description explaining the proposition.

#### Data Structure
- The `tabs` array holds objects with the following properties:
  - `id`: A unique identifier for each card.
  - `icon`: The corresponding icon component.
  - `title`: The title of the proposition.
  - `description`: The description of the proposition.


## Pages

### 1. AdminPanel
- `AdminPanel.Page.jsx`
   - #### components
     - ##### HouseCard
       - `HouseCard.Component.jsx`

`HouseCardComponent` is a React functional component that renders details of a house. This component has two distinct states – viewing and editing. It allows the user to view house details, edit them, and submit the changes.

###### Props
- **house**: An object containing the details of a house.

###### State
- **isEditing**: A boolean that toggles between viewing and editing states.
- **updatedHouse**: An object that stores the house details, allowing modifications.

###### Functionalities
- **handleInputChange**: A function that handles the changes made to the input fields and updates the `updatedHouse` state.
- **handleEditClick**: A function that toggles `isEditing` to true, enabling the editing mode.
- **handleSubmitClick**: A function that handles the submission of the updated house details. It sends a PUT request to update the house details in the database. If successful, it toggles back to viewing mode, and logs errors to the console if encountered.

###### User Interface
- When **not in editing mode**, the component displays house details and an "Edit" button. Clicking the "Edit" button enables the editing mode.
- In **editing mode**, input fields and a textarea are displayed for modifying house details, and a "Submit" button is provided for submitting changes.


     - ##### HouseList
       - `HouseList.Component.jsx`

`HouseListComponent` is a React functional component that renders a list of house cards. The component fetches house and plan data from specified API endpoints and utilizes the `HouseCardComponent` to display each house's details.

###### State
- **houses**: An array of house objects, each representing individual house details.
- **plans**: An array of plan objects. (Note: This state is set but not utilized within the component.)

###### useEffect Hook
- On component mount, the `useEffect` hook initiates two API requests to fetch houses and plans data.
- Handles successful responses by converting them to JSON and updating the `houses` and `plans` state variables.
- Handles errors by logging them to the console.

###### Structure
- Utilizes a `flex` container to wrap around individual `HouseCardComponent` instances.
- Each `HouseCardComponent` receives a `house` prop, containing the details of a single house.

###### Error Handling
- Any errors encountered during the fetch operation, such as HTTP errors, are logged to the console for debugging.


     - ##### Login
       - `Login.Component.jsx`

`LoginComponent` is a React component designed to facilitate user login functionality. It uses the `@material-tailwind/react` library to render Input and Button elements with specific styling. This component maintains the state of `username` and `password` and triggers specific callback functions based on the success or failure of the login attempt.

###### Props
- **onLoginSuccess**: A callback function that is triggered when the login attempt is successful.
- **onLoginError**: A callback function that is triggered when the login attempt fails.

###### State
- **username**: A state variable holding the value of the username input field.
- **password**: A state variable holding the value of the password input field.

###### Functionality
###### handleLogin
- This function checks whether the entered `username` and `password` match a predefined set of credentials.
- If the credentials match, it triggers the `onLoginSuccess` prop, notifying the parent component of a successful login.
- If the credentials do not match, it triggers the `onLoginError` prop, notifying the parent component of a failed login attempt.

###### Structure
- The component renders a form with a title, two input fields for username and password, and a login button.
- The input fields are associated with the `username` and `password` state variables and update their respective state when the user types in them.
- The login button triggers the `handleLogin` function when clicked.


### 2. Contacts
- `Contacts.Page.jsx`

### 3. Home
- `Home.Page.jsx`

### 4. HouseDetail
- `HouseDetail.Page.jsx`

### 5. Portfolio
- `Portfolio.Page.jsx`

### 6. ProjectDetail
- `ProjectDetail.Page.jsx`

### 7. Projects
- `Projects.Page.jsx`

### 8. Reviews
- `Reviews.Page.jsx`
