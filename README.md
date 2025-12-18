**My-Travel-Journal**

## Screenshots

### Home Page

![Home Page](screenshots/home-page.png)

### My Trips

![Trips Page](screenshots/journal-trips.png)

### Add a New Trip

![Add Trip](screenshots/add-new-trip.png)

### Trip Details

![My Trips Details - update - delete](screenshots/trip-details.png)

##Description##

**My Travel Journal** is a full-stack MEN Stack application that allows users to create and manage a personal travel journal.

After signing up and logging in, users can record their trips and store memories such as destinations, locations, trip types, dates, highlights, photo links, and ratings.  
Each user has access only to their own data, ensuring privacy and security.

This project was built as **Project 2** for General Assembly’s Software Engineering Immersive program.

## Features (MVP)

- User authentication (sign up, sign in, session-based authentication)
- Authorization to ensure only logged-in users can access trip data
- Full CRUD functionality for trips:
  - Create new trips
  - View all trips (Index)
  - View trip details (Show)
  - Edit trips
  - Delete trips
- Embedded Trip schema inside the User model using Mongoose
- RESTful routing
- Dynamic views using EJS templates

---

## Stretch Goals

- Filter trips by type (roadtrip, hiking, city, beach, etc.)
- Filter trips by rating
- Upload multiple photos using external services
- Display success and error messages during authentication
- Confirmation before deleting a trip
- Add image uploads instead of photo links
- Integrate a map (Google Maps API) to select locations
- Add more filtering and sorting options

---

## Stretch Features Implemented

### Trip Filters (By Type and Rating)

To improve usability as the number of trips grows, I implemented filtering functionality on the trips index page.

#### Filter by Trip Type
Users can filter trips by category such as:
- Roadtrip
- Hiking
- City
- Beach
- Other

This allows users to quickly find specific kinds of trips without scrolling through all entries.

#### Filter by Rating
Users can also filter trips by a minimum rating (e.g., 3 stars or higher).  
This helps users quickly rediscover their best travel experiences.

---
## Technical Highlights

- Embedded trip documents inside the User model using Mongoose
- Session-based authentication using `express-session`
- Middleware to protect routes and restrict access to authenticated users
- Query-based filtering using Express and JavaScript array methods
- Clean separation of concerns using controllers, models, views, and middleware

---
*Technologies Used*

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   EJS
-   CSS
-   Session-based authentication clon
-   Git & GitHub
-   Trello
-   JavaScript

*Proyect Links:*

Deployed App link: https://mytraveljournal-9e8323e47ea3.herokuapp.com/

GitHub Repository link: https://github.com/CristinaGVO/my-travel-journal.git

Trello planning link: https://trello.com/b/ySe8UN2v/proyect-2-my-travel-journal

## Author

**Cristina Gibney**  
Software Engineering Immersive Student  
General Assembly — 2025
