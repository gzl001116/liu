// 简单的交互脚本
document.addEventListener('DOMContentLoaded', function() {
    console.log('博客页面加载完成');
    
    // 添加一个简单的交互功能
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});