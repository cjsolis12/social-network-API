const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    try {
      // Delete the collections if they exist
      await Thought.deleteMany();
      await User.deleteMany();
  
      // Create and insert users
      const createdUsers = await User.insertMany(users);
  
      // Create thoughts with associated user IDs
      const thoughtsWithUserIds = thoughts.map((thought) => {
        const user = createdUsers.find((user) => user._id && user._id.toString() === thought.userId);
        thought.userId = user ? user._id : null;
        return thought;
      });
  
      // Insert thoughts
      await Thought.create(thoughtsWithUserIds);
  
      console.log('Data seeded successfully!');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      // Close the connection
      connection.close();
    }
})
