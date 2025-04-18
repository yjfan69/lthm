import React from 'react';
import { Logo } from './Logo';

export function About() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="flex items-center gap-4 mb-6">
        <Logo className="w-12 h-12 text-green-500 dark:text-green-400" />
        <h1 className="text-3xl font-bold m-0">About LTHM</h1>
      </div>
      
      <p>
        This is a viewer/archive for Yellowjackets Social Media AU (SMAU) <a href="https://twitter.com/kacchixx/status/1718691665047957965" target="_blank">"Love to Hate Me"</a> written by <a href="https://twitter.com/kacchixx" target="_blank" rel="noopener noreferrer">@kacchixx</a> on Twitter between the fall of 2023 and the spring of 2024.</p> 
        
        <p>It is lovingly known as "LTHM" in the Yellowjackets/JackieShauna fandom.
      </p>

      <h2>What is LTHM?</h2>
      <p>
        The official logline is: </p>
        <blockquote>Yellowjackets' vocalist, Shauna Shipman, is everyone's dream girl… except Jackie Taylor's apparently. After the actress outright rejects her in public, Shauna decides to do everything she can to exact revenge.</blockquote>

        <p>But LTHM quickly evolved from being a simple JackieShauna SMAU into so much more, with references to in-fandom drama and contemporarenous pop culture moments, crossovers with other popular TV shows ("Succession," "House of the Dragons," the "Scream" franchise, and more) and in-world paralells between the YJ/SMAU characters and their real-world stand-ins (Lottie as Taylor Swift, Yumi Heineken as Ariana Grande, etc.).</p> 
        
        <p>In some ways, LTHM is a time capsule of pop culture and the YJTwt fandom as it existed in Fall 2023 - Spring 2024.</p>

        <p>In short, LTHM isn't just an SMAU, it's a whole fucking vibe.
      </p>

      <h2>Why did you (Rachel) make this site?</h2>
      <p>
      As a longtime lurker of YJTwt, I loved reading LTHM in near real-time as it was posted. But at over 500 posts long, this Twitter thread is not easy to access, let alone archive.</p> 
      
      <p>And given that the owner of Twitter is a piece of shit with no sense of humor, and whose capricious and impulsive nature threatens the reliability of the platform, I wanted to preserve this fan work for the future. Because fuck you, Elon.</p>

      <p>Archiving the contents of thread was less difficult than I thought it would be -- thanks to a service I subscribe to (shout-out <a href="https://readwise.io/" target="_blank">Readwise,</a> you're the best!) -- but formatting the site in a readable way took some effort.</p>

      <p>I wanted the site to be readable and for each image to be naviable using a keyboard (if viewing on a desktop) and to replicate the overall Twitter thread experience as much as possible.</p>

      <p>My day job is as a product manager at a FAANG, so I used my React skills (along with AI to speed up the process) to put this together. The code is on GitHub but please don't judge me for it. I did this in my spare-time.</p>

<h2> Assorted Notes </h2>
      <p>Becuase this SMAU was written in a time of ephemera, not all links may work (RIP CuriousCat). I embedded screenshots of Twitter polls and other features that arent' easy to archive, with links to the original when available.</p>

      <p>Aside from adding "Interstitial" titles to some of the posts and choosing where and how to separate the SMAU arcs (when the cutoff might not be obvious), all of the content is exactly as it was written by <a href="https://twitter.com/kacchixx" target="_blank" rel="noopener noreferrer">@kacchixx</a> and presented in the same order.</p>

      <p>Because of the real-time and ephemeral nature of the story, all of the references might not make sense for new readers. Them's the breaks. The story is still fun even if you don't remember exactly what was happening on twt in February 2024!</p>
        
        <p>For the rest of us, please enjoy this archive of one of the coolest social media projects I've ever seen.
      </p>
          <p>If you do happen to notice any issues, you can file a note on <a href="https://github.com/yjfan69/lthm/issues" target="_blank">GitHub</a> and I'll try to fix it.</p>

          <h2>Credits</h2>
      <ul>
        <li>Story by <a href="https://twitter.com/kacchixx" target="_blank" rel="noopener noreferrer">@kacchixx</a></li>
        <li>Original SMAU: <a href="https://twitter.com/kacchixx/status/1718691665047957965" target="_blank" rel="noopener noreferrer">Read on Twitter</a></li>
        <li>Website design and archivng by Rachel (AKA <a href="https://x.com/pssngrprncss69" target="_blank" rel="noopener norefeferrer">pssngrprncss69</a> on Twitter)</li>
        <li>Hosted on GitHub Pages</li>
      </ul>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
        This viewer is a fan-made project created to enhance the reading experience of LTHM. 
        All story content belongs to their respective creators.
      </p>
    </div>
  );
}