import { POKEMON_TYPE_COLORS } from './constants'

const getColorByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByType;