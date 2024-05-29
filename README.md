# Installation and Usage Guide

## Installation

Follow the steps below to install and run the project locally:

1. **Clone the repository**:
```bash
   git clone https://github.com/your-username/your-repository.git
```

Navigate to the project directory:

```bash
cd your-repository
```

Install the dependencies:

```bash
cd npm install
```

Start the development server:
```bash
npm run dev
```

Access the application in the browser:

Open your browser and go to http://localhost:3000



## How the Site Works

### Features
**Search Bar:** Allows users to search for gifs in the Giphy database via API.

**Results Display:** Displays gifs in thumbnails arranged in a grid layout.

**Pagination:** Results are paginated to improve performance. Users can load more results using pagination buttons.

**Clear Search:** Allows users to clear the current search results.

## Usage
**Searching for Gifs:**

Enter a keyword in the search bar centered on the page.
Click the "Search" button to search for related gifs.
Results will be displayed in a grid layout below the search bar.

**Navigating Results:**

Use the "Previous" and "Next" buttons to navigate through the results pages.
The "Previous" button will be disabled when on the first page.
The "Next" button will be disabled when there are no more results to load.

**Clearing Results:**

Click the "Clear Search" button to clear the search results and reset the search bar.

## Notes

**Pagination:** The application loads 50 gifs per page. Use the pagination buttons to navigate through the pages.

**Form Handling:** Form submission does not reload the page. It fetches data based on user input.

**Performance:** The grid layout ensures efficient rendering of gifs. Pagination helps manage large datasets efficiently.

**Browser Compatibility:** The application was developed and tested using Chrome/Chromium for optimal performance and compatibility.

## Technologies Used
**Vue.js:** JavaScript framework for building user interfaces.

**Pinia:** State management library for Vue.js.

**Axios:** Library for making HTTP requests.

**Giphy API:** API used to search for gifs.

**Nuxt.js:** For SSR
