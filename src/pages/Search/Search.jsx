import { Link } from "react-router-dom";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

import { PostDetails } from "../../components/PostDetail/PostDetails";

import "./Search.scss";

export const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className="Search">
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className="Search__noPosts">
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">
              Voltar
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};
