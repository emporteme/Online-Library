# Online Library Frontend with Next.js

The Online Library Frontend is a user-friendly web app for browsing, searching, and reading books from a diverse collection. It is built with Next.js for a fast, responsive user interface and communicates with a Django REST API backend for book data, user accounts, comments, and ratings. This project offers a seamless and interactive reading experience for book enthusiasts.

## Features

- Book browsing and searching with filters
- Multi-format reading interface
- Bookmarks to save reading progress
- User account management
- Comments and ratings for books
- Responsive design for various devices

## Getting Started

These instructions will help you set up the frontend on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14+)

### Installation

1. Clone the frontend repository:
git clone https://github.com/username/online-library-frontend.git

2. Install dependencies:
cd online-library-frontend
npm install

3. Set up the environment variables for the backend API in the `.env.local` file:
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api

4. Run the development server:
npm run dev

## Deployment

Deploy the Next.js frontend to Vercel following their [official documentation](https://vercel.com/docs).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/username/online-library-frontend/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/username/online-library-frontend/blob/main/LICENSE.md) file for details.
