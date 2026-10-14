import StudyGuide from '../tracks/StudyGuide';
import { tracks } from '../tracks/config';
import { lcpaaDomains } from '@/mocks/lcpaaContent';

export default function LCPAAStudyPage() {
  return <StudyGuide track={tracks.lcpaa} domains={lcpaaDomains} />;
}
