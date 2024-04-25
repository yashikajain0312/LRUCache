# LRUCache Assignment

This repository contains the implementation of an LRU (Least Recently Used) Cache system, along with a frontend component to interact with the cache through a RESTful API.

## Introduction

LRUCacheAssignment is a project developed for managing a cache system using the LRU algorithm. It provides functionalities to add, retrieve, and delete key-value pairs from the cache.

## Features

- Add key-value pairs to the cache with an optional expiration time.
- Retrieve values associated with keys from the cache.
- Delete specific key-value pairs from the cache.
- View the current state of the cache.

## Technologies Used

- Go (Golang) for backend implementation
- Gin web framework for building RESTful APIs in Go
- React.js for frontend development
- Axios for making HTTP requests from the frontend

## Setup Instructions

### Prerequisites

- Go 1.16 or higher installed on your machine
- Node.js and npm installed (for running the frontend)

### Backend Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yashikajain0312/LRUCacheAssignment.git

2. Navigate to the backend directory:
   cd controller

3. Run the backend server:
   go run .

## Frontend Setup

1. Navigate to the frontend directory:
   cd component

2. Run the frontend application:
   npm start
