**🌍 My-Travel-Journal**

## Home Page

![Home Page](screenshots/home-page.png)

## My Trips

![Trips Page](screenshots/journal-trips.png)

## Add a New Trip

![Add Trip](screenshots/add-new-trip.png)

## Trip Show

![My Trips Details - update - delete](screenshots/trip-details.png)

My Travel Journal is a full-stack application that allows users to create a personal travel journal.
After signing up, users can record, view, update, and delete their trips — storing memories such as destination, location, trip type, dates, notes, photos links, and ratings.

This project was created as part of General Assembly’s Software Engineering Immersive (Project 2).

_Features (MVP)_

-   User authentication (sign up, sign in, session-based auth)
-   Authorization (only logged-in users can manage their trips)
-   CRUD functionality for trips:
    -   Create a new trip
    -   View all trips (Index)
    -   View trip details (Show)
    -   Edit a trip
    -   Delete a trip
-   Embedded Trip schema inside the User model using Mongoose
-   EJS templates for views
-   RESTful routing structure

_Stretch Goals_

-   Filter trips by type (roadtrip, hiking, city, beach, etc.)
-   Filter or sort trips by rating
-   Upload multiple photos using external services
-   Add messages for success and errors when the user tries to create a new account or log in.
-   Add a verification step so that when the user wants to delete a trip, they are asked: "Are you sure you want to delete this trip?"
-   Add images to the application, not just links.
-   Add a map so that people can select the exact location they visited, for example, by using a Google Maps API.
-   Add more filtering options.

_Stretch Goals I did:_ As part of improving my project, I added a some filtering feature for the trips page.

Trip Filters (By Type and Rating)

_Filter by Trip Type_

I wanted users to quickly find specific kinds of trips—like only beach trips, only city trips, or only hiking adventures.
So I added a dropdown menu where the user can choose a trip type, and the page will show only the trips that match.

Examples: Show only beach trips - Show only roadtrip adventures.

This makes the list easier to navigate when many trips are saved.

_Filter by Rating_

I also added the option to filter trips by the minimum rating.

Example: Show trips rated 4 stars or higher - Show trips rated 3+

This helps the user find their best experiences quickly.

_Technologies Used_

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

_Proyect Links:_

Deployed App link:

GitHub Repository link: https://github.com/CristinaGVO/my-travel-journal.git

Trello planning link: https://trello.com/b/ySe8UN2v/proyect-2-my-travel-journal

Cristina Gibney 2025 - Student General Assemmbly
