import { loveToHateMe } from './introductions';
import { arc1 } from './arc-1';
import { arc2 } from './arc-2';
import { arc3 } from './arc-3';
import { arc4 } from './arc-4';
import { arc5 } from './arc-5';
import { epilogue } from './epilogue';

export interface Thread {
  id: string;
  title: string;
  description?: string;
  content: string;
  order: number;
}

export const threads: Thread[] = [
  {
    id: 'love-to-hate-me',
    title: 'Introductions',
    description: 'Meet the main characters in this crazy SMAU!',
    content: loveToHateMe,
    order: 1
  },
  {
    id: 'arc-1',
    title: 'Arc 1',
    description: "Yellowjackets' vocalist, Shauna Shipman, is everyone's dream girl… except Jackie Taylor's apparently. After the actress outright rejects her in public, Shauna decides to do everything she can to exact revenge.",
    content: arc1,
    order: 2
  },
  {
    id: 'arc-2',
    title: 'Arc 2',
    description: "With the YJs put on hiatus after the KYSGate, Shauna is jobless. But that doesn't mean she has nothing else to do. Her goal? Wipe that smug grin off Jackie's face by starring alongside her in a new film. Her only problem? Lottie Matthews is gunning for the same role.",
    content: arc2,
    order: 3
  },
  {
    id: 'arc-3',
    title: 'Arc 3',
    description: "It's the season to release new music and as the stans try to win the charting battles, Jackie decides to feature in a music video. For someone who is intent on her lil revenge plan, Shauna is definitely not ready when one day, Jackie just arrives in the YJ studio.",
    content: arc3,
    order: 4
  },
  {
    id: 'arc-4',
    title: 'Arc 4',
    description: "PR relationships are no joke, especially when you are dealing with confusing crushes and doomed croomfships. As Jackie grapples with her growing feelings for her fake girlfriend, Shauna continues her crusade to win her estranged croomf back...",
    content: arc4,
    order: 5
  },
  {
    id: 'arc-5',
    title: 'Arc 5',
    description: "Jackie and Shauna are so back, Lottie is finally free and their friends have paired up and are getting laid. And oh yeah, they got away with murder too. But there's still one thing left to resolve: when the hell is YJ3 coming out? The answer is as convoluted as usual",
    content: arc5,
    order: 6
  },
  {
    id: 'epilogue',
    title: 'Epilogue',
    description: "The actual epilogue. Find out how everything turned out!",
    content: epilogue,
    order: 7
  }
];