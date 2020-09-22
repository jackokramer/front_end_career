function Commnet(comment){ // recusive example
    const hasNestedComments = comment.comments.lenght>0;
    return `
    <div class='nested-comments-${comment.level}>
    <p class=''comment-header>
    ${comment} | ${comment.time_ago}
    </p>
    ${comment.content}
    ${hasNestedComments ? comment.comments.map(comment => Commnet(comment)).join(''): ''}
    </div>
    `
}