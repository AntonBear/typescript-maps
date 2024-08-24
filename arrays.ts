const colors: string[] = ['red', 'blue', 'yellow']

const dates = [new Date(), new Date()]

const fruitsByColor = [['tomato'], ['Apple'], ['lemon']]
const fruitsByColor1: string[][] = []

// help with inference when extracting values
const color = colors[0]
const color1 = colors.pop()
console.log(color1)

// Prevent incompatible values

// colors.push(true) // Error - > not string

// Help with 'map'
colors.map((color: string): string => {
  return color.toUpperCase()
})

// Flexible types

const importantDates: (Date | string)[] = [new Date(), '2021-11-11']
importantDates.push('2021-11-11')
importantDates.push(new Date())
// importantDates.push(10) // error date or string 



