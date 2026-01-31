
import React from 'react';
import { Project, Skill, Education } from './types';

export const COLORS = {
  primaryLight: '#FDFCF8',
  primaryDark: '#0B1015',
  primaryInk: '#2E4057',
  accentTradition: '#D4AF37',
  accentFuture: '#00FFFF',
};

export const EDUCATION: Education[] = [
  {
    period: '2020 - 2023',
    school: 'THCS&THPT Lương Thế Vinh',
    major: 'Lớp Chuyên Toán',
    description: 'Specialized Mathematics Class'
  },
  {
    period: '2023 - Hiện tại',
    school: 'Posts and Telecommunications Institute of Technology (PTIT)',
    major: 'Information Technology',
    description: 'Học viện Công nghệ Bưu chính Viễn thông'
  }
];


export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Transparent Ebook Reader',
    japaneseTitle: '透明な電子書籍リーダー',
    description: 'A window application for reading ebooks.',
    image: '/hashi-portfolio/projects/ebook_reader.png',
    tags: ['Electron', 'React', 'TypeScript'],
    link: 'https://github.com/hashi173/Transparent-Ebook-Reader',
  },
  {
    id: '2',
    title: 'Habit Flare',
    japaneseTitle: '習慣フレア',
    description: 'A smart habit tracker to ignite your potential.',
    image: '/hashi-portfolio/projects/habit_flare.png',
    tags: ['React', 'TypeScript', 'Productivity'],
    link: 'https://github.com/hashi173/Habit-Flare',
  },
  {
    id: '3',
    title: 'Mangadex Downloader',
    japaneseTitle: 'マンガデックスダウンローダー',
    description: 'A tool to download manga chapters from Mangadex.',
    image: '/hashi-portfolio/projects/mangadex_download.png',
    tags: ['Python', 'API', 'Automation'],
    link: 'https://github.com/hashi173/Mangadex-Downloader',
  },
  {
    id: '4',
    title: 'Flappy Bird WPF',
    japaneseTitle: 'フラッピーバード WPF',
    description: 'A clone of the famous Flappy Bird game using WPF (C#).',
    image: '/hashi-portfolio/projects/flappy_bird.png',
    tags: ['C#', 'WPF', 'Game Dev'],
    link: 'https://github.com/hashi173/Flappy-Bird-WPF',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Creativeness', level: 95 },
  { name: 'Web Development', level: 75 },
  { name: 'App Development', level: 45 },
  { name: 'Java', level: 60 },
  { name: 'Python', level: 70 },
];

export const LOGO_SVG = (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
    <text x="0" y="30" style={{ font: 'italic 32px Shippori Mincho', fontWeight: 700 }}>Hashi</text>
  </svg>
);
