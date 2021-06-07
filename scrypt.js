function calculoTabuada () {
  let tabuada = document.querySelector('#table tbody')

  let valueA = parseInt(document.querySelector('#valueA').value)
  
  tabuada.innerHTML = ''
  
  for (let valueB = 1; valueB <= 9; valueB++) {
    let result = valueA * valueB
  
    let template = `
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

calculoTabuada()

document.querySelector('#valueA').addEventListener('change', calculoTabuada)