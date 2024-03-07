
class Post {
    constructor(username, caption, imageUrl) {
        this.username = username;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.likes = 0;
        this.comments = [];
    }

    addLike() {
        this.likes++;
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}


const posts = [];


function createPost(username, caption, imageUrl) {
    const post = new Post(username, caption, imageUrl);
    posts.push(post);
}

function likePost(index) {
    posts[index].addLike();
}   

function commentOnPost(index, comment) {
    posts[index].addComment(comment);
}   

function getPosts() {
    return posts;
}

createPost('user1', 'caption1', 'image1.jpg');
createPost('user2', 'caption2', 'image2.jpg');
likePost(0);
commentOnPost(0, 'comment1');