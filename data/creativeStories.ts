export interface CreativeStory {
  tag: string;
  time: string;
  image: string;
  title: string;
  snippet: string;
  note: string;
  paragraphs: string[];
  pullQuote: string;
}

export const CREATIVE_STORIES: CreativeStory[] = [
  {
    tag: "ESSAY • CULTURE & TECH",
    time: "8 MIN READ",
    title: "The Architecture of Solitude: Why We Stopped Building Things That Age Gracefully",
    image: "/images/1.png",
    snippet: "An inquiry into digital obsolescence versus enduring beauty in our online architecture.",
    note: "“A quiet meditation on patience and craft.”",
    pullQuote: "“When every digital room is engineered to self-destruct or rebrand within six weeks, our attention begins to mirror the furniture: restless, hyper-stimulated, and profoundly homeless.”",
    paragraphs: [
      "There is an old, stubborn wooden desk in my uncle’s house in Enugu that has outlived three regimes, four car models, and at least twenty-two different calendars...",
      "Nobody created that desk with a quarterly roadmap or planned obsolescence in mind. It was built because wood met an artisan who believed in tomorrow.",
      "Contrast this with the digital landscapes we inhabit from 8 AM to midnight. Modern interfaces exist in a perpetual state of nervous renewal...",
      "We are losing the quiet art of patina. Patina is the grace with which an object welcomes friction without breaking...",
      "In our headlong sprint to make everything frictionless, we removed the very friction that allows memories to stick."
    ],
  },
  {
    tag: "LITERARY REVIEW & ANALYSIS",
    time: "5 MIN READ",
    title: "Deconstructing Chimamanda Ngozi Adichie’s Sentence Economy",
    image: "/image/story-1.jpg",
    snippet: "A microscopic look at how deliberate restraint, domestic cadences, and pregnant pauses transform plain declarative statements into emotional depth charges.",
    note: "From my private reading journal",
    pullQuote: "“Great prose does not demand that the reader feel sad or frightened; it merely arranges the facts with such precision that feeling becomes involuntary.”",
    paragraphs: [
      "Most writers think authority comes from vocabulary. They pile up three-syllable adjectives like sandbags...",
      "Take this line from Purple Hibiscus: 'Things started to fall apart at home when my brother, Jaja, did not go to communion and Papa flung his heavy Catholic missal across the room and broke the figurines on the étagère.'",
      "There is no frantic theatricality here. Adichie understands that violence is heaviest when delivered with domestic detachment.",
      "This is what I call sentence economy. She leaves generous acreage around the nouns."
    ],
  },
  {
    tag: "HUMOR & OBSERVATION",
    time: "4 MIN READ",
    title: "The Anatomy of a Midnight Epiphany (And Why It Dies by 9 AM)",
    image: "/image/story-1.jpg",
    snippet: "A comedic autopsy of the brilliance that strikes you while staring at your ceiling at 2:14 AM.",
    note: "Personal diary entry & humor essay",
    pullQuote: "“The night grants us poetic licenses that the sunlight ruthlessly revokes.”",
    paragraphs: [
      "At 2:14 AM on a random Tuesday, I am without a doubt a philosophical genius. You are too.",
      "You scramble blindly in the dark for your phone and furiously type: 'Soup as social infrastructure. If we distribute bread via emotional liquidity, nobody gets lonely. Call Elon.'",
      "Then 9:07 AM arrives. You take a sip of lukewarm coffee, open the note, and stare at your handwriting as if inspecting the hieroglyphics of an escaped lunatic."
    ],
  },
  {
    tag: "CRITIQUE & MEMOIR",
    time: "6 MIN READ",
    title: "The Tragedy of the Over-Edited Memoir: Why Perfection Kills Empathy",
    image: "/image/story-1.jpg",
    snippet: "When vulnerability becomes a calculated growth loop, readers instinctively sense the choreography.",
    note: "Critical essay on modern storytelling",
    pullQuote: "“When every tear is polished like an Oscar statue before hitting the page, the reader doesn’t feel connection; they feel the calculation.”",
    paragraphs: [
      "Have you noticed how modern personal essays increasingly sound like LinkedIn press releases disguised as confessionals?",
      "We have sterilized vulnerability until it is completely hygienic—and therefore completely dead.",
      "The writers we return to across decades—James Baldwin, Joan Didion, Virginia Woolf—did not write to prove how maturely they processed their trauma. They wrote with the raw, trembling pulse of people still in the storm."
    ],
  },
];