import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFechDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

import "./EditPost.scss";

export const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (e) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
    if (!title || !image || !tags || !body) {
      setFormError("Por favor preencha todos os campos.");
    }

    if (formError) return;

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    navigate("/dashboard");
  };

  return (
    <div className="EditPost">
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input
                type="text"
                name="title"
                required
                placeholder="Pense em um bom título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              <span>URL da imagem:</span>
              <input
                type="text"
                name="image"
                required
                placeholder="Insira uma imagem que representa o seu post"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <div className="Preview">
              <h4>Preview da imagem atual:</h4>
              <img
                className="Preview__image"
                src={post.image}
                alt={post.title}
              />
            </div>
            <label>
              <span>Conteúdo</span>
              <textarea
                name="body"
                required
                placeholder="Insira o conteúdo do post"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </label>
            <label>
              <span>Tags</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Insira as tags separadas por vírgula"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
            {!response.loading && <button className="btn">Salvar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}
          </form>
        </>
      )}
    </div>
  );
};
