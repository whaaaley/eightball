
const { h, app } = hyperapp // eslint-disable-line

const { floor, random } = Math

const randomInt = max => floor(random() * floor(max))

// # Sound Effects
// + gta5 wasted
// + boing
// + price is right losing horn
// + o boi
// + horns
// +

// # Images
// +
// +
// +

const state = {
  answers: [
    '404',
    'did you agree to the TOS?',
    'do you hate your life?',
    'LOL SIKE',
    'never ask me that again',
    'no one likes you',
    'no, this is patrick',
    'nope, sorry',
    'o boi',
    'siiigh',
    'sorry, what?',
    'spicy bois ain\'t got chu',
    'the spicy bois have sealed yer fate',
    'try again never',
    'try me bitch',
    'WASTED',
    'what\'s the point?',
    'you don\'t deserve this',
    'you would ask a dumb question',
    'you wyld lmao',
    'YOU\'RE GARBAGE',
    'you\'re not good enough',
    'y o u \' r e   p a t h e t i c   i n   a e s t h e t i c',
    'congratulations, you played yourself'
  ]
}

const actions = {
  update: data => data,
  shake: d => (state, actions) => {
    const { answers } = state
    const { update } = actions

    update({
      isShaking: true
    })

    setTimeout(() => {
      update({
        isShaking: false,
        result: answers[randomInt(answers.length - 1)]
      })
    }, 1000)
  }
}

const EightBall = ([ state, actions ]) =>
  h('img', {
    // class: state.isShaking && 'shake',
    class: 'glitch',
    src: 'favicon.png',
    onclick () {
      actions.shake()
    }
  })

const Placeholder = children =>
  h('span', { class: 'placeholder' }, children)

const Words = ([ state ]) => {
  const children = state.isShaking
    ? Placeholder('shaking dat shit...')
    : state.result || Placeholder('yo playur, shake dat shit')

  return h('h1', { class: 'words' }, children)
}

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-box' }, [
      EightBall(args),
      Words(args)
    ])
  ])

app(state, actions, view, document.body)
