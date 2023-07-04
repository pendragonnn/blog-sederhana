function Article(props) {
  return (
    // react fragment
    <>
      <h3>{props.title}</h3>
      <small>Date : {props.date}</small>, tags: {props.tags.join(", ")}
    </>
  )
}

export default Article;