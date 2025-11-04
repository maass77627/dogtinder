🐾 FurFriend — Dog Tinder Matching App

FurFriend is a full-stack matchmaking app for dogs, inspired by Tinder.
Owners can create dog profiles, browse other pups, and swipe to match their pets with the perfect playmate or companion.

Built with a React frontend and Ruby on Rails API backend, FurFriend demonstrates modern full-stack development, user interaction, and relationship-based data modeling.

🐕 Core Features

✅ Create a dog profile (name, breed, image, bio, interests)

✅ Swipe cards to like or pass

❤️ If two dogs like each other → It’s a match!

💬 Matches list for keeping track of connections

👤 User login & authentication (Owner Accounts)

🏷 Interests / personality tags to improve matching

A fun project showcasing relationships, swiping interactions, and dynamic UI behavior.

🛠️ Tech Stack
Layer	Tools & Libraries
Frontend	React, React Router, CSS
Backend	Ruby on Rails API
Database	PostgreSQL
Auth	Rails sessions / JWT (depending on your version)
State & Logic	React Hooks, Controlled Forms
Other	Fetch API, RESTful Routes
🧠 Concepts Demonstrated

Modern React component architecture

Rails API with controllers, serializers, validations

Database relationships (Dog has_many interests through dog_interests)

Conditional rendering / UI state

Swipe gesture logic

Persistent “likes” & match logic

RESTful CRUD functionality

🚀 Getting Started
Clone the repo
git clone <your-repo-url>
cd furfriend

🐶 Backend Setup (Rails API)
cd backend
bundle install
rails db:create db:migrate db:seed
rails s


Seeds generate demo dogs & interests

💻 Frontend Setup (React)
cd frontend
npm install
npm start

🎮 How It Works

Sign up / log in as a dog owner

Create a profile for your dog

Browse available dogs

Swipe right (like) or left (pass)

If both dogs like each other → match appears in Matches page

View & manage matches from profile

Optional UI features you included (list whichever apply):

🟡 Visual swipe effect / button indicators

🌟 Highlight liked dogs

🐶 Dog cards with images + badges

🔍 Filter by breed / size / personality tags

📸 Screenshots / Demo (add later)
Screen	Screenshot Suggestions
Home Swipe Deck	Dog cards + like/dislike UI
Profile Page	Dog form + image
Matches Page	List of matched pups
Signup/Login	Clean UI demo
🔮 Future Improvements

📍 Location-based matching

💬 Dog owner chat / play-date scheduling

🧠 Machine-learning based match scoring

📱 Mobile version / drag-swipe UI on touch devices

📸 Upload photos from device

📊 Stats (likes received, matches, top interests)

📬 Contact

Kelly Maass
📧 kmaass77627@gmail.com
