# HTTP JSON API Node.js Time Server

Welcome to my project! Check out [Google Slide](https://docs.google.com/presentation/d/1TGvQU8hEKbImAfVEsfP0-Kom2cULA8VBMqT5zWjXO6M/edit#slide=id.g2686859d630_0_80) for more information.


## Overview
This project involves creating a time_server.js Time Server. The server responds to client requests, providing current time information in a specified JSON format.

## Project Structure
- **Step 1: Install Node.js on Mac**
  - Follow the instructions to install Node.js on your Mac machine.

- **Step 2: Study Time Server**
  - Understand the Time Server's role in handling time-related functionalities.

- **Step 3: Study JSON**
  - Familiarize yourself with JSON (JavaScript Object Notation) and its significance in data exchange.

- **Step 4: Study HTTP JSON API Server**
  - Learn about HTTP, JSON, and API servers in the context of web development.

- **Step 5: Modify HTTP JSON API Server**
  - Update the time_server to support the `/api/currenttime` endpoint.

## Modified Endpoint
- The server now supports the `/api/currenttime` endpoint.
- Clients can make a GET request to `http://localhost:8000/api/currenttime`.

## Expected Response
```json
{
  "year": 2021,
  "month": 09,
  "date": 24,
  "hour": 16,
  "minute": 09
}
```

## Running the Server
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open a terminal and run the command: `node time_server_modify.js 8000`.

## Testing
- Open your web browser and go to `http://localhost:8000/api/currenttime`.
- Ensure the browser displays the expected JSON response.

## Dependencies
- Node.js

## Contributing
Feel free to contribute to the project by opening issues or creating pull requests.

