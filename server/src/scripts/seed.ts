import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedDatabase } from '../data/sampleData';

// Load environment variables
dotenv.config();

const seed = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Seed the database
    await seedDatabase();

    // Close connection
    await mongoose.connection.close();
    console.log('✅ Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seed();
