//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
//array of the colors in order with the right index

export const value = (values) => {
  const stringValues = values.map((value) => COLORS.indexOf(value)).join('');
  //map out each color by the index. Taking each color given and joining that number together. brown - 1; black - 0 = 10

  return parseInt(stringValues)
  //converts the string value from a string to an interger#. Taking that 10 from a string to the number 10
}
