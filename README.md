# Full-Stack Portfolio

A modern, responsive portfolio website built with cutting-edge technologies.

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Hook Form** for form handling
- **Axios** for API calls

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Bcrypt** for password hashing
- **CORS** for cross-origin requests
- **Helmet** for security
- **Express Rate Limit** for API protection

## 📁 Project Structure

```
portfolio-fullstack/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
├── server/                # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   └── utils/         # Utility functions
└── shared/                # Shared types and utilities
```

## 🛠️ Installation

### Quick Setup (Recommended)

**For Windows:**
```bash
setup.bat
```

**For macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-fullstack
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   - Copy `server/env.example` to `server/.env`
   - Copy `client/env.example` to `client/.env`
   - Fill in your configuration values (see Configuration section below)

4. **Start MongoDB** (if using local installation)
   ```bash
   # macOS with Homebrew
   brew services start mongodb-community
   
   # Ubuntu/Debian
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```

6. **Seed the database with sample data** (optional)
   ```bash
   cd server
   npm run seed
   ```

7. **Visit your portfolio**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Beautiful animations and interactions
- **Project Showcase**: Display your work with images and descriptions
- **Skills Section**: Highlight your technical abilities
- **Contact Form**: Secure contact form with email integration
- **Admin Panel**: Manage portfolio content (optional)
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized for speed and Core Web Vitals

## ⚙️ Configuration

### Server Environment Variables (`server/.env`)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio
MONGODB_TEST_URI=mongodb://localhost:27017/portfolio_test

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Email Configuration (for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@yourportfolio.com

# CORS
CLIENT_URL=http://localhost:3000

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=uploads/
```

### Client Environment Variables (`client/.env`)

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# App Configuration
VITE_APP_NAME=Portfolio
VITE_APP_DESCRIPTION=Full-Stack Developer Portfolio

# Contact Information
VITE_CONTACT_EMAIL=your.email@example.com
VITE_CONTACT_PHONE=+1 (555) 123-4567
VITE_CONTACT_LOCATION=San Francisco, CA

# Social Links
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_TWITTER_URL=https://twitter.com/yourusername
```

## 🚀 Deployment

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000
   - MongoDB: localhost:27017

### Cloud Deployment

**Frontend (Vercel/Netlify):**
1. Connect your GitHub repository
2. Set build command: `cd client && npm run build`
3. Set output directory: `client/dist`
4. Add environment variables

**Backend (Railway/Heroku):**
1. Connect your GitHub repository
2. Set build command: `cd server && npm run build`
3. Set start command: `cd server && npm start`
4. Add environment variables
5. Connect MongoDB Atlas database

**Database:**
- Use MongoDB Atlas for cloud database
- Update `MONGODB_URI` in your backend environment variables

### Environment Variables for Production

Make sure to update these for production:
- `NODE_ENV=production`
- `JWT_SECRET` (use a strong, random secret)
- `MONGODB_URI` (use MongoDB Atlas connection string)
- `CLIENT_URL` (your frontend domain)
- Email configuration for contact form

## 📝 License

MIT License - feel free to use this template for your own portfolio!
