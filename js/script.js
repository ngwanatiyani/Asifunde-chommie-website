const trendingTopics = [
    'How to prepare for exams effectively?',
    'Best resources for learning Python.',
    'Study tips for mastering math concepts.',
    'Effective ways to balance study and leisure.',
    'Understanding trigonometric basics.'
];

const recentDiscussions = [
    {
        title: 'What are the best tools for online collaboration?',
        author: 'Themba Shongwe',
        replies: 7
    },
    {
        title: 'Tips for improving writing skills.',
        author: 'Ntsako Lubisi',
        replies: 4
    },
    {
        title: 'How to manage time better as a student?',
        author: 'Tsepo Motsoeleng',
        replies: 9
    }
];

const trendingTopicsContainer = document.getElementById('trendingTopics');
const recentDiscussionsContainer = document.getElementById('recentDiscussions');

// Populate Trending Topics
trendingTopics.forEach(topic => {
    const div = document.createElement('div');
    div.classList.add('p-4', 'bg-gray-100', 'shadow', 'rounded', 'hover:bg-gray-200');
    div.innerText = topic;
    trendingTopicsContainer.appendChild(div);
});

// Populate Recent Discussions
recentDiscussions.forEach(discussion => {
    const li = document.createElement('li');
    li.classList.add('p-4', 'bg-white', 'shadow', 'rounded');

    const title = document.createElement('a');
    title.href = '#';
    title.classList.add('text-blue-600', 'font-semibold', 'hover:underline');
    title.innerText = discussion.title;

    const details = document.createElement('p');
    details.classList.add('text-sm', 'text-gray-500');
    details.innerText = `Started by ${discussion.author} • ${discussion.replies} replies`;

    li.appendChild(title);
    li.appendChild(details);
    recentDiscussionsContainer.appendChild(li);
});

// Search Functionality
document.getElementById('searchBar').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const discussions = document.querySelectorAll('#recentDiscussions li');

    discussions.forEach(discussion => {
        const text = discussion.innerText.toLowerCase();
        discussion.style.display = text.includes(query) ? 'block' : 'none';
    });
});