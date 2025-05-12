import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({
  show,
  selectedEpisode,
  setSelectedEpisode,
}) {
  if (!show) return <p>Please select a show above.</p>;
  console.log(selectedEpisode);
  return (
    <div className="show-details">
      <EpisodeList
        episodes={show.episodes}
        name={show.name}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
