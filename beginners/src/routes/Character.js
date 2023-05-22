import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl, mutation } from "../utils";
import styles from "./Character.module.css";
import Layout from "../components/Layout";
import Li from "../components/Li";

const Character = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  const getCharacter = async () => {
    setResults(await mutation(apiUrl.character(id)));
  };

  useEffect(() => {
    getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout backBtn>
      {results &&
        results.map((result) => (
          <div key={result.id} className={styles.container}>
            <img
              className={styles.detailImg}
              src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
              alt={result.name}
            />
            <h1
              style={{
                padding: "0 0 0 20px",
              }}
            >
              {result.name}
            </h1>

            {result.description && (
              <p className={styles.description}>{result.description}</p>
            )}

            {result.comics.items && (
              <Li title="Comics" items={result.comics.items} />
            )}

            {result.series.items && (
              <Li title="Series" items={result.series.items} />
            )}

            {result.stories.items && (
              <Li title="Stories" items={result.stories.items} />
            )}
          </div>
        ))}
    </Layout>
  );
};

export default Character;
