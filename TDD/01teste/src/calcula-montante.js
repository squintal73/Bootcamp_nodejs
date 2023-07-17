function calculaMontante (capital, taxa, periodo) {
  const montante = capital * Math.pow((1 + taxa), periodo - 1)
  return montante
}

module.exports = {
  calculaMontante
}
