const header = {
  homepage: 'https://walerick.github.io/cleanfolio/',
  title: 'Home',
}

const about = {
  name: 'Bakare Adewale',
  role: 'Front End Engineer',
  description:
    "Hy there!!\nI'm Adewale Bakare, a FrontEnd Engineer. I am passionate about my work because I believe that competence builds confidence. This motivates me always to strive for excellence in all. \n I play video games in my free time, funny enough this helps me shape the way I tackle problems in real life. \n Life is like a video-game, you need to learn how to play so you can win.",
  resume:
    'https://drive.google.com/open?id=1DgTylioeeCeA7YCknKYcRc55jjdY_TSQ&usp=drive_fs',
  social: {
    linkedin: 'https://www.linkedin.com/in/adewaletegar/',
    github: 'https://github.com/walerick',
  },
}

const projects = [
  {
    name: 'Cowrywise',
    description:
      'Cowrywise web clone.\n - Mobile resposive.\n -Deployed in netlify.',
    stack: ['JavaScript', 'React', 'SQL'],
    sourceCode: 'https://github.com/Cowrywise',
    livePreview: 'https://cowrywlse.netlify.app',
  },
  {
    name: 'Movie-Box',
    description:
      'A movie web application that allows users to search for movies, view details about them and save their favorites.',
    stack: ['JavaScript', 'React', 'Api'],
    sourceCode: 'https://github.com/walerick/hng_movie_task',
    livePreview: 'https://moviesbocks.vercel.app/',
  },
  {
    name: 'Simplify',
    description:
      'A web application that simplifies complex sentences for users using ReactJS and OpenAI API. ',
    stack: ['OpenAI', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/walerick/simplify',
    livePreview: 'https://simplify-eta.vercel.app/',
  },
  {
    name: 'National Population Commission',
    description:
      'NPC web app that allows authorised user to register and print National Certificates.\n-Added user authentication.',
    stack: ['JavaScript', 'Java', 'SQL'],
    sourceCode: 'https://github.com/walerick/npc-frontend',
    livePreview: 'https://github.com',
  },
  {
    name: 'Advice-generator',
    description:
      'An advice generator app using the Advice Slip API -Generate a new piece of advice by clicking the dice icon',
    stack: ['html', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  'Python',
  'Go',
  'Git',
  'SQL',
]

const contact = {
  email: 'bakareadewale24@mail.com',
}

export { header, about, projects, skills, contact }
