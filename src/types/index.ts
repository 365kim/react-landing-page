import { HTMLAttributes } from 'react';
import { SectionInfo } from '../constants';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  sectionInfo: SectionInfo;
  isCurrentSection: boolean;
  customHeight: number;
  heightRatio?: number;
}
