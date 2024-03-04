import HyperRef from '../hyperRef';
import Section from '../section';

const first = [
  `Counselling and psychotherapy are types of talking therapy* in which you can explore
  your feelings, emotions, and thoughts in a non-judgemental, safe, and confidential
  environment. Counselling can offer you that space for a shorter period of time, whilst
  psychotherapy will most definitely take place over a longer period of time. The latter
  tends to focus on deep rooted difficulties and the impact of past experiences on who
  we are, which takes time to uncover and explore.`,
  `Healing, change, recovery - these are all things that you can achieve through talking
  therapies. Whilst your therapist may not be able to give you direct advice, they can
  support you in finding out what feels right for you, in a safe manner, at your pace. In
  counselling and psychotherapy, we can begin to observe ourselves through someone
  else's lens - a lens much clearer than ours. This can bring reassurance, and a huge sense
  of hope.`,
  `My aim is to work collaboratively with you to find out how we can enrich your wellbeing, 
  given your unique life circumstances. My training
  allows me to provide both counselling and/or psychotherapy.`,
]

const second = [
  // <>
  //   <span className="italic">
  //     'An integrative counsellor aims to build a trusting and non-judgmental relationship that
  //     helps you develop self-awareness. When you understand the causes of your concerns or
  //     triggers for your behaviour, you can confidently set goals and develop new behaviours to
  //     improve your satisfaction with life.'
  //   </span>
  //   &#160; Source - BACP (British Association of Counselling and Psychotherapy)
  // </>,
  `I use an integrative approach in my work with clients, focusing on building a trusting 
  and non-judgemental relationship with you as a client. My main approach is "Person-Centred Therapy". 
  Briefly explained, this form of therapy is based on the belief that everyone is able to grow, if they are in the
  right supportive environment.`,
  `As an integrative practitioner however, I tailor our work for your unique experiences. I often bring 
  techniques and exercises that focus on identifying strengths, values, and developing self-compassion, as clients found 
  these truly beneficial. These are informed by my traiing and other modalities, such as Solution Focused Therapy (SFT), Compassionate Focused Therapy (CFT), 
  and Cognitive Behavioural Therapy (CBT).`,
  `I strongly believe there isn't a "one size fits all" type of therapy, and that it has to work for you. 
  If you are looking for a space to talk and learn about yourself, I am here to support you.`,
  // <>&#8226;&#160; Solution Focused Therapy (SFT), which can bring a focus on your strengths to
  // identify how you can get closer to the therapeutic goals that we set out together, to
  // improve your wellbeing.</>,
  // <>&#8226;&#160; Cognitive Behavioural Therapy (CBT), which aims to help you identify and
  // understand any interactions between your thinking &amp; behaviour patterns that may
  // influence your wellbeing.</>,
]

const third = [
  `During our first session we will use the space to find out what brings you to therapy.
  Depending on what is going on for you, we will identify together
  areas you wish to work on, which will be reviewed throughout our work together.
  Above all, I want you to be in control of your growth.`,
  `There are times we need to talk things through and sometimes a therapeutic space
  can be just what we need to overcome the difficulties we face, to feel heard, and share
  how we feel with someone who is able and willing to sit with us in that vulnerable space.`,
  `I work from a genuine and caring place, and often bring elements of
  psychoeducation - This process aims to help your understanding of all those bits of
  you that make you who you are and understand your relationship(s). In my practice so far, this has been a key element to
  help my clients to make sense of their feelings and experiences. This allowed them
  to create a calmer and more enjoyable experience for themselves.`,
  `That being said, the counselling sessions are guided by what brings you to therapy
  and we will work together to explore what is happening for you at your pace.`
]

const fourth = [
  `Counselling sessions usually last 50 minutes each and take place weekly. 
  There is no obligation for you to continue our work if you feel I am not the
  right counsellor for you, or if you feel that you wish to take a break from self-
  exploration.`,
  `The number of sessions you will have depends on what you wish to explore. Some
  people find that a few sessions can provide them with enough insight to return to their
  daily life activities, with a different mindset. Others find it more benecifial to extend 
  their support and work on their difficulties for longer`,
  `We often find it difficult to trust others, once we've experienced a loss (of a loved one,
  of our old selves, of something very dear to us). We also may find it difficult to let
  others in, once we experienced a traumatic event - this could seem insignificant to
  others, and yet it has tremendous implications on our wellbeing. We all experience
  sadness, loss, trauma, happiness, joy - everything - in our own way and at our pace. 
  Your wellbeing and recovery doesn't have a set number of sessions. It is unique to you.`,
  `As your counsellor, I endeavour to be there for you, to provide a safe space where you
  can begin to build that trust and discover yourself. If this resonates with
  you, feel free to contact me, to discuss your circumstances.`
]

const fifth = [
  `Therapy Sessions are £60 per session. I have limited availability for reduced rates for students, unemployed, and low income earners. Please contact me to discuss this.`,
]

const sixth = [
  <>If you feel that you are experiencing a mental health crisis where are concerned about
  your own safety or someone else's, please see <HyperRef link='/emergency#header' value='Emergency Contact'/>.</>,
  `Counselling is a type of talking therapy that can support you when you are not in
  immediate danger to yourself or to/from others.`
]

const seventh = [
  `Each counselling session is confidential, between yourself (or yourselves) and your counsellor. The
  only instance in which this confidentiality will be breached is if:`,
  `- Your safety or someone else's is at immediate risk;`,
  `- The safety of Children/Young Adults/ Vulnerable Adults is at risk, in accordance with
  Safeguarding Policies;`,
  `- Something mentioned in the sessions breaches The Terrorism Act (2006) or Drug
  Trafficking Act (1994)`,
  `In each of these instances your counsellor will try to discuss breaching confidentiality
  with you prior to this occurring.`,
  `I also keep regular notes of our sessions, to keep track of our work together. However,
  these will not have your contact details, or any identifiable information attached to
  them. They are also securely kept in accordance with GDPR (General Data Protection
  Regulation) Act (2018). Counsellors sometimes use their notes for purposes of case
  work evaluation with their supervisor. This is to ensure your work with them is safe
  Again, these notes will not contain any identifiable information.`
]

export const eighth = [
  `Online Therapy Sessions can be booked on
   Tuesday - Thursdays.`,
  `Face-to-face Counselling Sessions can only be booked Fridays in M21 (Manchester, Chorlton-cum-Hardy).`
]

export default [
  {
    header: "What is counselling and/or psychotherapy?",
    content: <Section paras={first}/>
  },
  {
    header: "What type(s) of counselling can you offer?",
    content: <Section paras={second} />
  },
  {
    header: "What can I expect from my counselling sessions with you?",
    content: <Section paras={third} />
  },
  {
    header: "How many sessions do I need?",
    content: <Section paras={fourth} />
  },
  {
    header: "How much does it cost?",
    content: <Section paras={fifth} />
  },
  {
    header: "What if I need to talk to someone urgently?",
    content: <Section paras={sixth} />
  },
  {
    header: "Is this confidential?",
    content: <Section paras={seventh} />
  },
  {
    header: "What is your availability?",
    content: <Section paras={eighth} />
  },
]