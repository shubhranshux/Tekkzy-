"use client";

import React, { useState, useEffect } from "react";

const PROMPTS = [
  {
    q: "Build a support agent that triages tickets",
    a: "Wiring your helpdesk, spinning up retrieval, deploying to the edge. Live in minutes.",
  },
  {
    q: "Summarise ten thousand contracts overnight",
    a: "Fanning out across workers, extracting clauses, queueing edge cases for human review.",
  },
  {
    q: "Ship AI search for our docs",
    a: "Indexing content, tuning embeddings, adding citations. Live on your domain.",
  },
];

export default function HeroAiBadge() {
  const [index, setIndex] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [answerWords, setAnswerWords] = useState<string[]>([]);
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    async function runLoop() {
      let i = 0;
      while (!isCancelled) {
        const item = PROMPTS[i % PROMPTS.length];
        setIndex(i);
        setQuestionText("");
        setAnswerWords([]);
        setTokens(0);

        await sleep(500);
        if (isCancelled) break;

        // Type question character by character
        for (let j = 0; j < item.q.length; j++) {
          if (isCancelled) break;
          setQuestionText(item.q.slice(0, j + 1));
          await sleep(24 + Math.random() * 26);
        }

        await sleep(450);
        if (isCancelled) break;

        // Stream answer word by word
        const words = item.a.split(" ");
        const currentWords: string[] = [];
        for (let w = 0; w < words.length; w++) {
          if (isCancelled) break;
          currentWords.push(words[w]);
          setAnswerWords([...currentWords]);
          setTokens(w + 1);
          await sleep(40 + Math.random() * 70);
        }

        await sleep(2800);
        i++;
      }
    }

    runLoop();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="hero-ai-widget" aria-hidden="true">
      <div className="hero-ai-header">
        <i className="hero-ai-pulse" />
        <span className="hero-ai-brand">tekkzy ai</span>
        <span className="hero-ai-tokens">{tokens} tokens</span>
      </div>
      <div className="hero-ai-query">
        <span className="hero-ai-prompt-sym">›&nbsp;</span>
        {questionText}
      </div>
      <div className="hero-ai-answer">
        <span>{answerWords.join(" ")}</span>
        <span className="hero-ai-cursor" />
      </div>
    </div>
  );
}
