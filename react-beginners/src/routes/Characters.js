import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl, mutation } from "../utils";
import styles from "./Characters.module.css";
import Layout from "../components/Layout";

const Characters = () => {
  const [results, setResults] = useState([]);

  const getCharacters = async () => {
    setResults(await mutation(apiUrl.characters));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        {results &&
          results.map((result) => (
            <div key={result.id} className={styles.item}>
              <Link to={`/character/${result.id}`}>
                <img
                  src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                  alt={result.id}
                />
                <div>
                  <h1 className={styles.name}>
                    {result.name.length > 10
                      ? result.name.slice(0, 10) + "..."
                      : result.name}
                  </h1>
                  <div className={styles.card}></div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Characters;
