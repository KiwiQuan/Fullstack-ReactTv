import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";
import { useState } from "react";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows, setShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          setSelectedShow={setSelectedShow}
          setSelectedEpisode={setSelectedEpisode}
        />
      </header>
      <main>
        <ShowDetails
          show={selectedShow}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </main>
    </>
  );
}
