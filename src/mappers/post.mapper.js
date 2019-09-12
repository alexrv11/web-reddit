
export const postsMapper = (posts) => {
  if (posts.length === 0) {
    return [];
  }

  return posts.map(item => {
    let post = {
      id: item.data.id,
      title: item.data.author,
      description: item.data.title,
      image: item.data.thumbnail,
      comments: item.data.num_comments,
      createdAt: item.data.created,
    }

    return post
  })
}