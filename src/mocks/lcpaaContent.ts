import type { StudyDomain } from './studyTypes';
import { lcpaaDomainsPartA } from './lcpaaContentA';
import { lcpaaDomainsPartB } from './lcpaaContentB';
import { lcpaaDomainsPartC } from './lcpaaContentC';

// LCPAA study guide — built from 26 TAC Chapter 749 (Child-Placing Agencies), revised August 2026.
export const lcpaaDomains: StudyDomain[] = [...lcpaaDomainsPartA, ...lcpaaDomainsPartB, ...lcpaaDomainsPartC].sort((a, b) => a.number - b.number);
