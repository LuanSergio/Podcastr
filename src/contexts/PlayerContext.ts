import { createContext } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  play: (episode: Episode) => void;
  isPlaying: boolean;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
  // hasPrevious: boolean;
  // hasNext: boolean;
  // isLooping: boolean;
  // isShuffling: boolean;
  // toggleShuffle: () => void;
  // toggleLoop: () => void;
  // playList: (list: Episode[], index: number) => void;
  // playNext: () => void;
  // playPrevious: () => void;
  // clearPlayerState: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);
