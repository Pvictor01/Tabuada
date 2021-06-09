function sum() {
  let tabuada = document.querySelector('#tableSum tbody')

  let valueA = parseInt(document.querySelector('#valueSum').value) 

  tabuada.innerHTML = ''

  for(valueB = 1; valueB <= 9; valueB++) {
    let result = valueA + valueB

    template = `
      <td>${valueA}</td>
      <td>+</td>
      <td>${valueB}</td>
      <td>=</td>
      <td>${result}</td>
    `;

    let tr = document.createElement('tr')
    tr.innerHTML = template

    tabuada.append(tr)
  }
}
sum()

document.querySelector('#valueSum').addEventListener('change', sum)