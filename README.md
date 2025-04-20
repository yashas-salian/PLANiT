# Planit 🎉

**Planit** is an event management web application designed to simplify event and venue booking. Whether you're planning a party, conference, or workshop, Planit helps you book venues, manage your events, and stay organized with calendar views and email notifications.

## 🚀 Features

- 📝 **Event Booking**: Create and manage your events with ease.
- 📅 **Calendar View**: Visualize upcoming and completed events in a calendar layout.
- 🏛️ **Venue Booking**: Browse and book venues from all over the country.
- 📍 **Venue Listing**: View venue details, availability, and pricing.
- ✅ **User-Friendly UI**: Built with React and Tailwind CSS for a clean and responsive experience.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Hono.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT 

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yashas-salian/PLANiT.git
cd PLANIT

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your database URL and email credentials

# Push Prisma schema to the database
npx prisma db push

# Start the development server
npm run dev
