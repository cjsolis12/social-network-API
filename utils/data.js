const users = [
    { username: 'john_12', email: "john_doe123@gmail.com", friends: [{ _id: '648495499a0674d1ee813b34' }], },
    { username: 'starUser', email: "star@gmail.com" },
    { username: 'coder222', email: "email123@email.com" },
    { username: 'newUser', email: "gmail@gmail.com" },

]

const thoughts = [
    { thoughtText: 'I love to post on social media sites', username: 'starUser' },
    { thoughtText: 'This is my first time posting!', username: "coder222", userId: '6485f7f3f4148fe0b80d9dc5'},
    { thoughtText: 'hey everyone!', username: "newUser", userId: '6485f7f3f4148fe0b80d9dc6' },
    { thoughtText: 'hey', username: "newUser", reactions: [{ reactionBody: 'hey new user!', username: 'coder222' }] }
]


module.exports = { users, thoughts }