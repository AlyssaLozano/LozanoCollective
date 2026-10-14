import { Navigate, useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import GamesHub from '../games/GamesHub';
import SprintGame from '../games/Sprint';
import DeadlineDash from '../games/DeadlineDash';
import CitationCourt from '../games/CitationCourt';
import AdminShift from '../games/AdminShift';
import { isTrackId, tracks } from './config';

/** /:track/games */
export function TrackGamesHub() {
  const { track } = useParams();
  if (!isTrackId(track)) return <NotFound />;
  return <GamesHub track={tracks[track]} />;
}

/** /:track/games/:game */
export function TrackGame() {
  const { track, game } = useParams();
  if (!isTrackId(track)) return <NotFound />;
  const t = tracks[track];
  switch (game) {
    case 'admin-shift':
      return <AdminShift track={t} />;
    case 'deadline-dash':
      return <DeadlineDash track={t} />;
    case 'citation-court':
      return <CitationCourt track={t} />;
    case 'sprint':
      return <SprintGame track={t} />;
    default:
      return <Navigate to={`${t.basePath}/games`} replace />;
  }
}
