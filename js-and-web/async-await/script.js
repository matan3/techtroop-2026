// Exercise 1
async function getUserById(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }
}

getUserById(3);
getUserById(100);
getUserById("sdfsd");

// Exercise 2

// Starter code structure:
async function getUserWithPosts(userId) {
    const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!responseUser.ok) {
        throw new Error('User not found');
    }
    const user = await responseUser.json();
    if (!user.id) {
        throw new Error('User not found');
    }
    const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!responsePosts.ok) {
        throw new Error('Posts not found');
    }
    const posts = await responsePosts.json();
    return ({ user: user, posts: posts });
}

getUserWithPosts(3)
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(error => console.error(error.message));


// Exercise 3
function calculateTopUsers(users, posts, comments) {
    const userStats = {};

    users.forEach(user => {
        userStats[user.id] = {
            name: user.name,
            postCount: 0,
            commentCount: 0,
            postIds: new Set()
        };
    });

    posts.forEach(post => {
        if (userStats[post.userId]) {
            userStats[post.userId].postCount += 1;
            userStats[post.userId].postIds.add(post.id);
        }
    });

    comments.forEach(comment => {
        for (const userId in userStats) {
            if (userStats[userId].postIds.has(comment.postId)) {
                userStats[userId].commentCount += 1;
                break;
            }
        }
    });

    return Object.values(userStats)
        .map(user => ({
            name: user.name,
            postCount: user.postCount,
            commentCount: user.commentCount
        }))
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 3);
}


async function getDashboard() {
    const [resUsers, resPosts, resComments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    if (!resUsers.ok || !resPosts.ok || !resComments.ok) {
        throw new Error('Failed to fetch dashboard data');
    }

    const [users, posts, comments] = await Promise.all([
        resUsers.json(),
        resPosts.json(),
        resComments.json()
    ]);

    const summary = {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: posts.length / users.length,
        avgCommentsPerPost: comments.length / posts.length
    }
    const topUsers = calculateTopUsers(users, posts, comments);
    const recentPosts = [...posts]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

    return {
        summary: summary,
        topUsers: topUsers,
        recentPosts: recentPosts
    };

}

getDashboard()
  .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(error => console.error(error.message));
