// ===== NESSA'S YEAR 1 CURRICULUM =====
// Age: 12–24 months | Barcelona, Spain
// Languages: English, Yoruba, Spanish, Catalan
// 7 Domains | 4 Phases | 52 Weeks
// This file is the AI's knowledge base — imported into app.js

const CURRICULUM = {
  meta: {
    child: 'Nessa',
    startAge: 12,
    endAge: 24,
    location: 'Barcelona, Spain',
    languages: ['English', 'Yoruba', 'Spanish', 'Catalan'],
    schedule: '5 activities/week — 3 weekday evenings + 2 weekend sessions',
  },

  // ===== PHASE 1: WEEKS 1–13 | AGE 12–15 MONTHS =====
  // Focus: Foundation — walking, first words, object exploration, imitation
  phases: [
    {
      phase: 1,
      weeks: '1–13',
      ageRange: '12–15 months',
      title: 'The Explorer',
      theme: 'Nessa is finding her feet — literally. She is beginning to walk, say first real words, point at things she wants, and imitate everything she sees. The world is one giant sensory playground.',
      parentNote: 'This phase is about being present, not perfect. Follow her lead. Narrate everything you do together out loud. The richer the language bath, the stronger the neural wiring.',
      domainFocus: {
        cognitive: {
          milestones: [
            'Object permanence mastery — finds hidden toys under 2 covers',
            'Begins simple cause-and-effect play (push button → sound)',
            'Points to 3+ body parts when named',
            'Matches similar objects (cup to cup)',
            'Follows 2-step instructions: "Pick up the ball and give it to me"',
          ],
          weeklyFocus: [
            'W1-3: Hide-and-find games with favourite toys',
            'W4-6: Stacking, nesting, and sorting by size',
            'W7-9: Simple shape sorters and posting boxes',
            'W10-13: Picture-to-object matching books',
          ],
          resources: [
            { name: 'Baby Sensory YouTube', url: 'https://www.youtube.com/@BabySensory' },
            { name: 'Montessori object permanence box', url: 'https://www.amazon.es/s?k=montessori+object+permanence+box' },
          ],
        },
        language: {
          milestones: [
            'First 5–10 intentional words across any language',
            'Combines signs with vocalisations (sign MORE + say "más")',
            'Responds to her name in all 4 languages',
            'Understands "no", "come", "look" in English and Yoruba',
            'Points to pictures in books when named',
          ],
          weeklyFocus: [
            'W1-3: Daily Yoruba body parts song — "Orí mi, ọwọ mi, esè mi" (my head, my hand, my foot)',
            'W4-6: Sign language expansion — MORE, MILK, EAT, SLEEP, PLEASE, THANK YOU',
            'W7-9: Spanish colour naming during play — "¿Dónde está el rojo?"',
            'W10-13: Catalan greetings routine — "Bon dia!" every morning',
          ],
          resources: [
            { name: 'Baby Signing Time (YouTube)', url: 'https://www.youtube.com/@signingtime' },
            { name: 'Lingokids — Spanish for toddlers', url: 'https://lingokids.com' },
            { name: 'Yoruba children songs playlist', url: 'https://www.youtube.com/results?search_query=yoruba+children+songs' },
          ],
        },
        emotional: {
          milestones: [
            'Shows affection spontaneously — hugs, kisses',
            'Recognises and names basic emotions in books/mirror',
            'Begins to manage mild frustration with parent support',
            'Develops preference for familiar caregivers (healthy attachment)',
            'Waves bye-bye with understanding of separation',
          ],
          weeklyFocus: [
            'W1-3: Mirror play — "Look at Nessa! Is she happy or sad?"',
            'W4-6: Emotion picture books — The Colour Monster',
            'W7-9: Comfort object introduction if not already present',
            'W10-13: Goodbye rituals — consistent, warm, brief departures for school',
          ],
          resources: [
            { name: 'The Colour Monster book (ES)', url: 'https://www.amazon.es/s?k=el+monstruo+de+colores' },
            { name: 'Daniel Tiger\'s Neighbourhood (emotions)', url: 'https://www.youtube.com/results?search_query=daniel+tiger+emotions' },
          ],
        },
        physical: {
          milestones: [
            'Independent walking — stable and confident',
            'Climbs onto low furniture',
            'Throws a ball forward with intent',
            'Stacks 4–6 blocks independently',
            'Turns board book pages one at a time',
            'Uses spoon with some success',
          ],
          weeklyFocus: [
            'W1-3: Obstacle course with cushions and tunnels',
            'W4-6: Ball rolling and catching game (seated, then standing)',
            'W7-9: Stacking and knocking towers (also teaches cause-effect)',
            'W10-13: Playdough — squeezing, rolling, poking (fine motor)',
          ],
          resources: [
            { name: 'Soft play tunnel (Amazon.es)', url: 'https://www.amazon.es/s?k=tunel+gateo+bebe' },
            { name: 'Playdough set (Amazon.es)', url: 'https://www.amazon.es/s?k=plastilina+bebe+12+meses' },
          ],
        },
        creativity: {
          milestones: [
            'First marks on paper with chunky crayons',
            'Engages in simple pretend play — feeds dolly, talks on toy phone',
            'Responds to music with movement — bouncing, swaying',
            'Explores different textures with curiosity not fear',
          ],
          weeklyFocus: [
            'W1-3: Finger painting — washable, sensory-rich',
            'W4-6: Music and movement — Yoruba drumming rhythms on pots and pans',
            'W7-9: Water play with containers, pouring, splashing',
            'W10-13: Simple pretend play kitchen/tea set',
          ],
          resources: [
            { name: 'Washable finger paint (Amazon.es)', url: 'https://www.amazon.es/s?k=pintura+dedos+bebe+lavable' },
            { name: 'Kindermusik (music for babies)', url: 'https://www.kindermusik.com' },
          ],
        },
        social: {
          milestones: [
            'Parallel play with other children — plays near, not yet with',
            'Imitates household tasks — "sweeping", "wiping"',
            'Offers toys to others — first sharing behaviour',
            'Responds to social games — peek-a-boo, chase, tickle',
          ],
          weeklyFocus: [
            'W1-3: Playdate at Parc de la Ciutadella — sandbox parallel play',
            'W4-6: Role play chores together — Nessa "helps" fold washing',
            'W7-9: Sharing games — pass the ball back and forth',
            'W10-13: Visit to a Barcelona library baby session (Biblioteques de Barcelona)',
          ],
          resources: [
            { name: 'Biblioteques de Barcelona baby sessions', url: 'https://www.barcelona.cat/biblioteques' },
            { name: 'Barcelona family parks guide', url: 'https://www.timeout.com/barcelona/kids/best-parks-in-barcelona-for-kids' },
          ],
        },
        cultural: {
          milestones: [
            'Recognises Yoruba music and shows positive response',
            'Hears Yoruba proverbs read aloud — begins pattern recognition',
            'Engages with Yoruba visual art or fabric colours',
            'Knows her name means something — "Nessa" introduced in all 4 languages',
          ],
          weeklyFocus: [
            'W1-3: Yoruba lullaby at bedtime every night — "Ìmọ̀lè òru" (moonlight)',
            'W4-6: Show Nessa Yoruba fabrics, Ankara prints — name colours in Yoruba',
            'W7-9: Nigerian/Yoruba food introduction — taste, smell, texture',
            'W10-13: Video call with Yoruba-speaking family members',
          ],
          resources: [
            { name: 'Yoruba lullabies playlist', url: 'https://www.youtube.com/results?search_query=yoruba+lullaby+baby' },
            { name: 'African baby books (Amazon.es)', url: 'https://www.amazon.es/s?k=libros+africa+bebes' },
          ],
        },
      },
    },

    // ===== PHASE 2: WEEKS 14–26 | AGE 15–18 MONTHS =====
    {
      phase: 2,
      weeks: '14–26',
      ageRange: '15–18 months',
      title: 'The Communicator',
      theme: 'Language explosion begins. Nessa may have 10–50 words and is starting to combine them. She understands far more than she can say. Her emotional world is getting richer — she feels pride, frustration, and empathy.',
      parentNote: 'Expand her vocabulary intentionally. Read the same book 10 times in a row — repetition builds neural pathways. Introduce Yoruba number counting and Spanish colour songs daily. Tantrums begin this phase — they are neurologically normal and a sign of healthy development.',
      domainFocus: {
        cognitive: {
          milestones: [
            '18–50 word vocabulary across all languages combined',
            'Begins sorting by colour and shape',
            'Completes 3–4 piece puzzles',
            'Understands "mine" and "yours" concept',
            'Points to pictures in books when named in any language',
          ],
          weeklyFocus: [
            'W14-16: Simple 3-piece wooden puzzles',
            'W17-19: Colour sorting games with household objects',
            'W20-22: Counting 1-5 in Yoruba — "ọ̀kan, èjì, ẹta, ẹrin, àrún"',
            'W23-26: Memory matching card game (simple, 4 pairs)',
          ],
          resources: [
            { name: 'Orchard Toys Simple Puzzle (Amazon.es)', url: 'https://www.amazon.es/s?k=puzzle+madera+bebe+18+meses' },
            { name: 'Starfall — early learning', url: 'https://www.starfall.com' },
          ],
        },
        language: {
          milestones: [
            'First word combinations: "more milk", "dada go", "big dog"',
            'Names 5+ body parts across languages',
            'Uses "no" purposefully and frequently (healthy!)',
            'Responds to simple questions: "Where is your shoe?"',
            'Yoruba: knows ẹ káàárọ̀ (good morning), ẹ káàbọ̀ (welcome)',
          ],
          weeklyFocus: [
            'W14-16: Daily bilingual book reading — one English, one Yoruba/Spanish',
            'W17-19: Expand sign vocabulary to 20+ signs',
            'W20-22: Spanish body parts song — "Cabeza, hombros, rodillas y pies"',
            'W23-26: Catalan counting — "u, dos, tres, quatre, cinc"',
          ],
          resources: [
            { name: 'Heads Shoulders Knees (Spanish)', url: 'https://www.youtube.com/results?search_query=cabeza+hombros+rodillas+pies+cancion' },
            { name: 'ASL Sign language dictionary', url: 'https://www.handspeak.com' },
            { name: 'Yoruba picture dictionary', url: 'https://www.youtube.com/results?search_query=yoruba+words+for+children' },
          ],
        },
        emotional: {
          milestones: [
            'Shows empathy — comforts others who are upset',
            'Experiences and expresses pride in achievements',
            'Begins to manage separation from parents more easily',
            'Names 4 basic emotions: happy, sad, angry, scared',
            'First signs of independence: "me do it!"',
          ],
          weeklyFocus: [
            'W14-16: Emotion charades — parent acts out feelings, Nessa guesses',
            'W17-19: Introduce "calming corner" with soft toy and comfort object',
            'W20-22: Celebrate her achievements verbally — "You did it! You must feel so proud!"',
            'W23-26: Storytime focused on feelings — "When Sophie Gets Angry"',
          ],
          resources: [
            { name: 'When Sophie Gets Angry book', url: 'https://www.amazon.es/s?k=when+sophie+gets+angry' },
            { name: 'Moodsters emotion toys', url: 'https://www.amazon.es/s?k=juguetes+emociones+bebes' },
          ],
        },
        physical: {
          milestones: [
            'Runs — though still falls often',
            'Kicks a ball forward',
            'Walks up stairs with hand held',
            'Builds tower of 6+ blocks',
            'Scribbles with intent — circular and back-and-forth marks',
            'Feeds self with spoon consistently',
          ],
          weeklyFocus: [
            'W14-16: Kicking practice — soft ball in Parc de la Ciutadella',
            'W17-19: Stair practice at home — always supervised',
            'W20-22: Threading large beads — fine motor precision',
            'W23-26: Painting with brushes — different sizes',
          ],
          resources: [
            { name: 'Large bead threading set (Amazon.es)', url: 'https://www.amazon.es/s?k=cuentas+enhebrar+bebe' },
            { name: 'Toddler art set (Amazon.es)', url: 'https://www.amazon.es/s?k=set+pintura+niños+2+años' },
          ],
        },
        creativity: {
          milestones: [
            'Pretend play becomes richer — sequences of actions',
            'Begins to "sing" along to familiar songs',
            'Makes representational marks: "this is mama"',
            'Dances with rhythm awareness',
          ],
          weeklyFocus: [
            'W14-16: Pretend play kitchen — cooking Yoruba food (jollof rice, ẹ̀fọ́)',
            'W17-19: Introduce simple percussion — shaker, drum, clapping rhythms',
            'W20-22: Nature art — collect leaves, sticks, flowers in Barcelona parks',
            'W23-26: First collage — tearing paper, gluing, sticking',
          ],
          resources: [
            { name: 'Toddler percussion set (Amazon.es)', url: 'https://www.amazon.es/s?k=instrumentos+musicales+bebes' },
            { name: 'Orff music for toddlers', url: 'https://www.youtube.com/results?search_query=orff+music+toddlers' },
          ],
        },
        social: {
          milestones: [
            'Begins simple cooperative play with familiar peers',
            'Imitates social roles — parent, doctor, cook',
            'Shows preference for certain friends',
            'Understands "take turns" with adult guidance',
          ],
          weeklyFocus: [
            'W14-16: Organised playdate — simple turn-taking game',
            'W17-19: Visit Museu de les Ciències (CosmoCaixa) baby area',
            'W20-22: Role play doctor — check "patient" toys with toy kit',
            'W23-26: Community helper discussion — "What does a doctor do?"',
          ],
          resources: [
            { name: 'CosmoCaixa Barcelona', url: 'https://cosmocaixa.org/es/cosmocaixa-barcelona' },
            { name: 'Doctor play set (Amazon.es)', url: 'https://www.amazon.es/s?k=maletín+médico+juguete+bebes' },
          ],
        },
        cultural: {
          milestones: [
            'Recognises Nigerian and Spanish flags',
            'Knows she has two cultural heritages — Yoruba and European',
            'Responds to Yoruba proverbs with familiarity',
            'Tastes and names foods from both cultures',
          ],
          weeklyFocus: [
            'W14-16: Cook simple Yoruba dish together — ẹ̀gúsí soup, tasting and naming',
            'W17-19: Show Barcelona landmarks in books — "This is where you live!"',
            'W20-22: Yoruba proverb of the week — "Ìmọ̀ ni ìmọ̀lẹ̀" (Knowledge is light)',
            'W23-26: Celebrate Nigerian Independence Day (Oct 1) or Catalan Diada (Sept 11)',
          ],
          resources: [
            { name: 'Nigerian children storybooks', url: 'https://www.amazon.es/s?k=nigerian+children+books' },
            { name: 'Barcelona for kids guide', url: 'https://www.barcelonaturisme.com/wv3/en/page/1698/families.html' },
          ],
        },
      },
    },

    // ===== PHASE 3: WEEKS 27–39 | AGE 18–21 MONTHS =====
    {
      phase: 3,
      weeks: '27–39',
      ageRange: '18–21 months',
      title: 'The Builder',
      theme: 'Nessa is now a confident walker and emerging talker. She combines 2–3 words, has strong opinions, and is beginning to understand the world has rules. Her memory is strengthening — she remembers events from days ago.',
      parentNote: 'This is a critical phase for language development. Use "sportscasting" — narrate what she is doing in real time across languages. Introduce structured creative activities but always follow her engagement. Do not force completion — the process is the learning.',
      domainFocus: {
        cognitive: {
          milestones: [
            '50+ word vocabulary, 2-word combinations',
            'Understands sequences: first, then, after',
            'Completes 5–6 piece puzzles independently',
            'Sorts objects by 2 attributes simultaneously (big red vs small blue)',
            'Begins to count objects 1–3 with one-to-one correspondence',
          ],
          weeklyFocus: [
            'W27-29: Introduction to counting with physical objects',
            'W30-32: Pattern making with duplo or coloured blocks',
            'W33-35: Simple sequencing cards — morning routine order',
            'W36-39: First number recognition 1–5 across 2 languages',
          ],
          resources: [
            { name: 'Duplo Lego starter set (Amazon.es)', url: 'https://www.amazon.es/s?k=duplo+lego+18+meses' },
            { name: 'Khan Academy Kids (free)', url: 'https://learn.khanacademy.org/khan-academy-kids/' },
          ],
        },
        language: {
          milestones: [
            'Two-word sentences in dominant language(s)',
            'Asks "what\'s that?" constantly — answer every time',
            'Follows 3-step instructions',
            'Uses pronouns: me, mine, you',
            'Yoruba: knows 10+ household object names',
            'Spanish: knows colours rojo, azul, verde, amarillo',
          ],
          weeklyFocus: [
            'W27-29: "I Spy" game in all 4 languages',
            'W30-32: Yoruba household object labelling — sticky notes with Yoruba names',
            'W33-35: Spanish colour mixing art activity',
            'W36-39: Catalan nursery rhymes — "Dansons la capeta"',
          ],
          resources: [
            { name: 'Gus on the Go — Spanish app', url: 'https://gusonthego.com' },
            { name: 'Yoruba vocabulary for toddlers', url: 'https://www.youtube.com/results?search_query=yoruba+vocabulary+toddlers' },
          ],
        },
        emotional: {
          milestones: [
            'Uses words for feelings: "sad", "happy", "mad", "scared"',
            'Begins to self-soothe with minimal parent support',
            'Shows concern for others — "Are you okay?"',
            'Understands consequences: "If you throw it, it might break"',
            'Navigates frustration with increasing vocabulary',
          ],
          weeklyFocus: [
            'W27-29: Feeling check-in ritual morning and evening — how is Nessa feeling?',
            'W30-32: Breathing exercise introduction — "smell the flowers, blow the candles"',
            'W33-35: Read "The Invisible String" — concept of connection even when apart',
            'W36-39: Create a family feelings book with photos',
          ],
          resources: [
            { name: 'The Invisible String book', url: 'https://www.amazon.es/s?k=the+invisible+string+book' },
            { name: 'Cosmic Kids Yoga (emotions)', url: 'https://www.youtube.com/@CosmicKidsYoga' },
          ],
        },
        physical: {
          milestones: [
            'Runs confidently with good balance',
            'Jumps with both feet off ground',
            'Walks up and down stairs alternating feet (with support)',
            'Cuts soft materials with toddler scissors',
            'Draws a circle when shown',
            'Undresses self partially — removes shoes, socks',
          ],
          weeklyFocus: [
            'W27-29: Jumping practice — cushion landing zone, trampoline if available',
            'W30-32: Toddler scissors practice — cutting playdough snakes',
            'W33-35: Outdoor obstacle course — climbing, crawling, jumping',
            'W36-39: Ball skills — throw, catch, kick with increasing accuracy',
          ],
          resources: [
            { name: 'Mini trampoline toddler (Amazon.es)', url: 'https://www.amazon.es/s?k=cama+elastica+niños+pequeños' },
            { name: 'Toddler scissors safety (Amazon.es)', url: 'https://www.amazon.es/s?k=tijeras+seguridad+niños' },
          ],
        },
        creativity: {
          milestones: [
            'Pretend play has narrative: "Baby is sick, I give medicine"',
            'Recognises and names 5+ colours',
            'Sings simple songs from memory',
            'Creates simple structures with blocks intentionally',
          ],
          weeklyFocus: [
            'W27-29: Storytelling with puppets — one Yoruba character, one Spanish',
            'W30-32: Build Barcelona landmarks with blocks — La Sagrada Família!',
            'W33-35: Introduction to African patterns — stamping with sponges',
            'W36-39: First scrapbook page — photos + drawings of the week',
          ],
          resources: [
            { name: 'Hand puppets set (Amazon.es)', url: 'https://www.amazon.es/s?k=marionetas+mano+niños' },
            { name: 'Sponge stamp art set (Amazon.es)', url: 'https://www.amazon.es/s?k=sellos+esponja+niños' },
          ],
        },
        social: {
          milestones: [
            'Engages in simple cooperative play',
            'Understands and follows simple rules in games',
            'Expresses preferences clearly: "I want to play with Maya"',
            'Shows kindness without prompting',
          ],
          weeklyFocus: [
            'W27-29: Simple board game — Orchard Toys shopping list',
            'W30-32: Community walk — greet neighbours in Spanish/Catalan',
            'W33-35: Kindness challenge — one act of kindness each weekend',
            'W36-39: Team activity with parent — bake something together',
          ],
          resources: [
            { name: 'Orchard Toys Shopping List game', url: 'https://www.amazon.es/s?k=orchard+toys+shopping+list' },
            { name: 'Kindness activities for toddlers', url: 'https://www.youtube.com/results?search_query=kindness+activities+toddlers' },
          ],
        },
        cultural: {
          milestones: [
            'Can say "I am Yoruba" and "I live in Barcelona"',
            'Recognises traditional Yoruba music instruments — gangan, bàtá',
            'Knows 3+ traditional Yoruba stories at a basic level',
            'Engages with Catalan traditions — Castellers, Sant Jordi',
          ],
          weeklyFocus: [
            'W27-29: Watch Castellers video together — discuss community and teamwork',
            'W30-32: Yoruba folktale of the month — "The Tortoise and the Birds"',
            'W33-35: Sant Jordi preparation — make a simple rose and book craft',
            'W36-39: Map activity — "Here is Nigeria, here is Spain, Nessa belongs to both"',
          ],
          resources: [
            { name: 'Yoruba folktales for children', url: 'https://www.youtube.com/results?search_query=yoruba+folktales+children' },
            { name: 'Castellers de Barcelona', url: 'https://www.castellersdebarcelona.cat' },
          ],
        },
      },
    },

    // ===== PHASE 4: WEEKS 40–52 | AGE 21–24 MONTHS =====
    {
      phase: 4,
      weeks: '40–52',
      ageRange: '21–24 months',
      title: 'The Thinker',
      theme: 'Nessa is approaching 2 years old. She has a vocabulary explosion, is forming 2–3 word sentences, has strong preferences and personality, and is beginning to understand abstract concepts like "yesterday" and "tomorrow". She is ready for pre-numeracy and pre-literacy foundations.',
      parentNote: 'Begin introducing pre-literacy skills — letter recognition in English and Yoruba tonal awareness. Keep activities joyful and play-based. At this age, 15 minutes of focused engagement is excellent. The goal is a love of learning, not performance.',
      domainFocus: {
        cognitive: {
          milestones: [
            '200–300 word vocabulary across all languages',
            '2–3 word sentences as default communication',
            'Recognises own name in print',
            'Counts objects 1–5 reliably',
            'Understands "same" and "different"',
            'Sorts by size, colour, and shape simultaneously',
          ],
          weeklyFocus: [
            'W40-42: Name recognition cards — "N-E-S-S-A" letter introduction',
            'W43-45: Counting in 3 languages simultaneously: English, Yoruba, Spanish',
            'W46-48: Introduction to patterns: AB, AAB, ABB',
            'W49-52: Simple science experiments — sink/float, mixing colours',
          ],
          resources: [
            { name: 'Endless Alphabet app (iOS/Android)', url: 'https://www.originatorkids.com/?p=573' },
            { name: 'Science experiments for toddlers', url: 'https://www.youtube.com/results?search_query=science+experiments+toddlers+2+years' },
          ],
        },
        language: {
          milestones: [
            'Tells simple stories about events: "I went park, I saw dog, I ran"',
            'Asks "why?" questions — answer every single one',
            'Knows alphabet song in English',
            'Knows Yoruba tonal distinctions — high, mid, low tones',
            'Has a Spanish "school vocabulary" — names friends, teacher, classroom objects',
            'Understands Catalan instructions from teacher at school',
          ],
          weeklyFocus: [
            'W40-42: Alphabet song daily — English and introduce Yoruba syllables',
            'W43-45: "Tell me about your day" ritual every evening — build narrative language',
            'W46-48: School vocabulary reinforcement — draw school friends and name them',
            'W49-52: First simple sentences written by parent, Nessa "reads" along',
          ],
          resources: [
            { name: 'Alphablocks (BBC, free YouTube)', url: 'https://www.youtube.com/@alphablocks' },
            { name: 'Yoruba tonal language guide', url: 'https://www.youtube.com/results?search_query=yoruba+tones+language+lesson' },
            { name: 'LeapFrog Letter Factory', url: 'https://www.youtube.com/results?search_query=leapfrog+letter+factory' },
          ],
        },
        emotional: {
          milestones: [
            'Manages mild frustration with words, not meltdowns (mostly!)',
            'Shows genuine empathy — "Are you sad? Do you want a hug?"',
            'Understands and follows household rules with reminders',
            'Expresses love verbally: "I love you, Mama"',
            'Beginning to understand fairness: "That\'s not fair"',
          ],
          weeklyFocus: [
            'W40-42: Gratitude ritual — 3 things Nessa is thankful for each evening',
            'W43-45: Problem-solving scenarios: "What would you do if...?"',
            'W46-48: Create a family kindness jar — add notes for kind acts',
            'W49-52: Year-end reflection — look through moments gallery together',
          ],
          resources: [
            { name: 'Kindness jar activity', url: 'https://www.youtube.com/results?search_query=kindness+jar+toddler+activity' },
            { name: 'Mindful breathing for toddlers', url: 'https://www.youtube.com/@CosmicKidsYoga' },
          ],
        },
        physical: {
          milestones: [
            'Jumps from low heights with control',
            'Pedals tricycle',
            'Draws recognisable shapes: circle, cross',
            'Walks on tiptoe when asked',
            'Handles small objects with finger-thumb precision',
            'Dresses self with minimal help',
          ],
          weeklyFocus: [
            'W40-42: Tricycle introduction — Parc de la Ciutadella paths',
            'W43-45: Drawing shapes practice — circle, cross, square',
            'W46-48: Threading activity with smaller beads (fine motor progression)',
            'W49-52: Dance routine — combine all the music from Year 1 in a celebration dance',
          ],
          resources: [
            { name: 'Toddler tricycle (Amazon.es)', url: 'https://www.amazon.es/s?k=triciclo+niños+2+años' },
            { name: 'Just Dance Kids (YouTube)', url: 'https://www.youtube.com/results?search_query=just+dance+kids+toddler' },
          ],
        },
        creativity: {
          milestones: [
            'Creates art with clear intent — "I am drawing a cat"',
            'Engages in 10+ minute independent pretend play sequences',
            'Invents simple songs or rhymes',
            'Uses materials creatively — cardboard boxes become houses',
          ],
          weeklyFocus: [
            'W40-42: First "art portfolio" — select favourite pieces from the year',
            'W43-45: Cardboard box construction — make a house, car, or boat',
            'W46-48: Compose a family song together — simple melody in any language',
            'W49-52: Year 1 celebration art project — Nessa\'s handprint art',
          ],
          resources: [
            { name: 'Process art for toddlers', url: 'https://www.youtube.com/results?search_query=process+art+toddlers+2+years' },
            { name: 'Cardboard box crafts toddlers', url: 'https://www.youtube.com/results?search_query=cardboard+box+crafts+toddlers' },
          ],
        },
        social: {
          milestones: [
            'Plays cooperatively with peers for 10+ minutes',
            'Negotiates — "Can I have that when you\'re finished?"',
            'Shows leadership qualities: organises play, suggests ideas',
            'Demonstrates understanding of community roles',
          ],
          weeklyFocus: [
            'W40-42: Cooperative building project with a friend',
            'W43-45: Visit Mercat de Santa Caterina — discuss community helpers',
            'W46-48: "Interview" a community helper with Nessa — baker, librarian',
            'W49-52: Year-end celebration — invite friends and family to see Nessa\'s portfolio',
          ],
          resources: [
            { name: 'Mercat de Santa Caterina Barcelona', url: 'https://www.mercatsantacaterina.com' },
            { name: 'Community helpers videos', url: 'https://www.youtube.com/results?search_query=community+helpers+toddlers' },
          ],
        },
        cultural: {
          milestones: [
            'Can tell a simple Yoruba folktale in her own words',
            'Knows her full name and its significance',
            'Understands she speaks more languages than most children her age',
            'Celebrates both Yoruba and Catalan/Spanish cultural moments with joy',
            'Can locate Nigeria and Spain on a simple map',
          ],
          weeklyFocus: [
            'W40-42: Make a "Who I Am" book — languages, foods, family, home',
            'W43-45: Yoruba cultural celebration — dress in Ankara, make Yoruba food',
            'W46-48: Learn a simple Catalan song — "El cant dels ocells"',
            'W49-52: Year 1 celebration — family gathering, share Nessa\'s journey',
          ],
          resources: [
            { name: 'Ankara fabric for children (Amazon.es)', url: 'https://www.amazon.es/s?k=tela+africana+ankara' },
            { name: 'El cant dels ocells — Catalan song', url: 'https://www.youtube.com/results?search_query=el+cant+dels+ocells' },
            { name: 'World map for toddlers (Amazon.es)', url: 'https://www.amazon.es/s?k=mapa+mundo+niños' },
          ],
        },
      },
    },
  ],

  // ===== AI PROMPT ENHANCEMENT SYSTEM =====
  // These are injected into the AI plan generator per week
  getPhaseForWeek(week) {
    if (week <= 13) return this.phases[0];
    if (week <= 26) return this.phases[1];
    if (week <= 39) return this.phases[2];
    return this.phases[3];
  },

  getAIPromptContext(week, ageMonths) {
    const phase = this.getPhaseForWeek(week);
    const domainSummaries = Object.entries(phase.domainFocus).map(([domain, data]) => {
      const weekRange = data.weeklyFocus.find(f => {
        const match = f.match(/W(\d+)-(\d+)/);
        if (match) {
          const start = parseInt(match[1]);
          const end = parseInt(match[2]);
          return week >= start && week <= end;
        }
        return false;
      }) || data.weeklyFocus[0];
      return `${domain.toUpperCase()}: ${weekRange}`;
    }).join('\n');

    return `
NESSA'S CURRICULUM CONTEXT — Week ${week} of 52

Phase ${phase.phase}: "${phase.title}" (${phase.ageRange})
Theme: ${phase.theme}
Parent note: ${phase.parentNote}

THIS WEEK'S DOMAIN FOCUS:
${domainSummaries}

KEY MILESTONES TO SUPPORT THIS PHASE:
${Object.entries(phase.domainFocus).map(([d, data]) =>
  `${d}: ${data.milestones.slice(0, 2).join('; ')}`
).join('\n')}

LANGUAGE FOCUS THIS WEEK:
${phase.domainFocus.language.weeklyFocus[Math.min(Math.floor((week - (phase.phase - 1) * 13 - 1) / 3), 3)]}

CULTURAL FOCUS THIS WEEK:
${phase.domainFocus.cultural.weeklyFocus[Math.min(Math.floor((week - (phase.phase - 1) * 13 - 1) / 3), 3)]}
    `.trim();
  },
};

// Export for use in app.js
if (typeof module !== 'undefined') module.exports = CURRICULUM;
