
import { useContext } from "react";
import { GlobalContext } from "../context";

// const ArticleStatus = ({ isNew }) => {
//   return isNew && <span>-- Baru !!!</span>
// }

const NewArtikel = () => {
  return <span>-- Baru !!!</span>
}

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    // react fragment
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags: {props.tags.join(", ")}{" "}
        {/* <ArticleStatus isNew={props.isNew}/> */}
        {props.isNew && <NewArtikel/>}
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;