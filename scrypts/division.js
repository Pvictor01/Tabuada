function division() {
  let tabuada = document.querySelector('#tableDivision tbody')

  let valueA = parseInt(document.querySelector('#valueDivision').value) 

  tabuada.innerHTML = ''

  for(valueB = 1; valueB <= 9; valueB++) {
    let result = valueA / valueB

    template = `
      <td>${valueA}</td>
      <td>÷</td>
      <td>${valueB}</td>
      <td>=</td>
      <td>${result.toFixed(2)}</td>
    `;

    let tr = document.createElement('tr')
    tr.innerHTML = template

    tabuada.append(tr)
  }
}
division()

document.querySelector('#valueDivision').addEventListener('change', division)