export default (string) => {
  const hashed = string.split('').reverse().map(elem => `${elem}TakNado`)
  hashed.push('sam.ne.znau.zachem')
  return hashed.join('.')
}