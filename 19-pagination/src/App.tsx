import Card from "./components/Card/Card";
import typography from "./assets/style/typography.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [since, setSince] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    console.log(since);

    (async () => {
      try {
        const usersData: any = await axios
          .get("https://api.github.com/users", {
            params: {
              per_page: 8,
              since: since,
            },
          })
          .then((response) => {
            console.log(response.data);

            return response.data;
          });

        setData(usersData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [since]);

  return (
    <>
      <div style={{ margin: "20px" }} className={elevation.LightElevationThird}>
        <h1
          className={typography.DisplayMedium}
          style={{ textAlign: "center" }}
        >
          Custom Pagination
        </h1>
        {loading ? (
          <RotatingLines
            width="30"
            visible={true}
            strokeWidth="5"
            strokeColor="black"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        ) : (
          <div className="grid">
            {data.map((item) => {
              console.log(item);

              return (
                <Card
                  key={item.id}
                  avatar_url={item.avatar_url}
                  login={item.login}
                  html_url={item.html_url}
                />
              );
            })}
          </div>
        )}
        <Pagination
          next={() => {
            setSince(since - 8);
            setPage(page - 1);
          }}
          page={page + 1}
          prev={() => {
            setSince(since + 8);
            setPage(page + 1);
          }}
        />
      </div>
    </>
  );
}

export default App;
