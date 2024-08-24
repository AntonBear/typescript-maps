const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

type Drink = [string, boolean, number] // алиас

const cola: [string, boolean, number] = ['braun', true, 40] // важен порядок следования
// cola[1] = 'black'  // error
const sprite: Drink = ['braun', true, 40]
const coffee: Drink = ['black', false, 0]
const carSpecs: [number, number] = [400, 3354]
const carSpecsObj = {
  horsepower: 400,
  weight: 3354,
}
