@echo off
echo 🚀 Setting up Full-Stack Portfolio Application
echo ==============================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...

REM Install root dependencies
npm install

REM Install server dependencies
echo 📦 Installing server dependencies...
cd server
npm install
cd ..

REM Install client dependencies
echo 📦 Installing client dependencies...
cd client
npm install
cd ..

echo ✅ Dependencies installed successfully!

REM Create environment files
echo 📝 Creating environment files...

REM Server environment
if not exist "server\.env" (
    copy "server\env.example" "server\.env"
    echo ✅ Created server\.env file
    echo ⚠️  Please update server\.env with your configuration
) else (
    echo ℹ️  server\.env already exists
)

REM Client environment
if not exist "client\.env" (
    copy "client\env.example" "client\.env"
    echo ✅ Created client\.env file
    echo ⚠️  Please update client\.env with your configuration
) else (
    echo ℹ️  client\.env already exists
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Update environment variables in server\.env and client\.env
echo 2. Start MongoDB (if using local installation)
echo 3. Run 'npm run dev' to start both frontend and backend
echo 4. Visit http://localhost:3000 to see your portfolio
echo 5. Run 'cd server && npm run seed' to populate with sample data
echo.
echo 🔧 Available commands:
echo   npm run dev          - Start development servers
echo   npm run build        - Build for production
echo   npm run start        - Start production server
echo   npm run install:all  - Install all dependencies
echo.
echo 📚 Documentation: See README.md for detailed instructions
pause
