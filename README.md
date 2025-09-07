# Newspaper Aggregator App (MERN Stack)

A modern newspaper aggregator application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.  
The app provides personalized access to the latest news across categories, secured by authentication.  

---

## Features

- **User Authentication:** Secure login and signup using JWT (JSON Web Tokens).  
- **Password Security:** User passwords hashed with Bcrypt.  
- **News Aggregation:** Fetches and displays news using the [GNews API](https://gnews.io/).  
- **Category-based Filtering:** Users can browse news by category (Technology, Business, Sports, Health, etc.).  

---

## Technologies Used

- **Frontend:** React.js, React Router, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens), Bcrypt (for password hashing)  
- **External API:** [GNews API](https://gnews.io/) (for fetching live news articles)  

---

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v22.2.0 or later recommended)  
- MongoDB (local or MongoDB Atlas)  
- GNews API Key (sign up at [gnews.io](https://gnews.io/))  

---

## Installation

**Clone the repository**
<pre>git clone https://github.com/Varuncc891/The-Hours.git</pre>

**Navigate into the project folder**
<pre>cd The-Hours</pre>

**Install backend dependencies**
<pre>cd backend
npm install</pre>

**Install frontend dependencies**
<pre>cd ../frontend
npm install</pre>

**Running the Application** 

<pre>
  # Run the backend (from /backend)
  cd backend
  node server.js</pre>

<pre>
  # Run the frontend (from /frontend)
cd ../frontend
npm run dev
</pre>

**.env file to be created in the backend folder.**
<pre>
  PORT=
  DB_URL=
  JWT_SECRET=
  GNEWS_KEY= 
</pre>
