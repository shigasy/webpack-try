import { returnHello } from './myutil'

const say = (value) => console.log(value)

say(returnHello())
say('webpack')
if (process.env.NODE_ENV === 'development') console.log('developだよ')