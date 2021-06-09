function subtraction() {
  let tabuada = document.querySelector('#tableSubtraction tbody')

  let valueA = parseInt(document.querySelector('#valueSubtraction').value) 

  tabuada.innerHTML = ''

  for(valueB = 1; valueB <= 9; valueB++) {
    let result = valueA - valueB

    template = `
      <td>${valueA}</td>
      <td>-</td>
      <td>${valueB}</td>
      <td>=</td>
      <td>${result}</td>
    `;

    let tr = document.createElement('tr')
    tr.innerHTML = template

    tabuada.append(tr)
  }
}
subtraction()

document.querySelector('#valueSubtraction').addEventListener('change', subtraction)