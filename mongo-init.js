// MongoDB initialization script
db = db.getSiblingDB('portfolio');

// Create collections
db.createCollection('projects');
db.createCollection('skills');
db.createCollection('contacts');
db.createCollection('users');

// Create indexes for better performance
db.projects.createIndex({ "featured": 1, "createdAt": -1 });
db.projects.createIndex({ "category": 1 });
db.projects.createIndex({ "status": 1 });

db.skills.createIndex({ "category": 1, "proficiency": -1 });
db.skills.createIndex({ "featured": 1 });

db.contacts.createIndex({ "status": 1, "createdAt": -1 });
db.contacts.createIndex({ "email": 1 });

db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "username": 1 }, { unique: true });

print('✅ Portfolio database initialized successfully!');
