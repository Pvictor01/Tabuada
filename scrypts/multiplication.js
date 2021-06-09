function multiplication() {
  let tabuada = document.querySelector('#tableMultiplication tbody')

  let valueA = parseInt(document.querySelector('#valueMultiplication').value) 

  tabuada.innerHTML = ''

  for(valueB = 1; valueB <= 9; valueB++) {
    let result = valueA * valueB

    template = `
      <td>${valueA}</td>
      <td>x</td>
      <td>${valueB}</td>
      <td>=</td>
      <td>${result}</td>
    `;

    let tr = document.createElement('tr')
    tr.innerHTML = template

    tabuada.append(tr)
  }
}
multiplication()

document.querySelector('#valueMultiplication').addEventListener('change', multiplication)