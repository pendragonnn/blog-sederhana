// const ArticleStatus = ({ isNew }) => {
//   return isNew && <span>-- Baru !!!</span>
// }

const NewArtikel = () => {
  return <span>-- Baru !!!</span>
}

function Article(props) {
  return (
    // react fragment
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        {/* <ArticleStatus isNew={props.isNew}/> */}
        {props.isNew && <NewArtikel/>}
      </small>
    </>
  );
}

export default Article;