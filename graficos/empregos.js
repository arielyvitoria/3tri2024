import { getCSS} from "./common.js"

async function empregos() {
    const url='https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/ari.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeX = Object.keys (dados)
    const empregos = Object.values (dados)

    const data = [
      {
          x: nomeX, 
          y: empregos, 
          type: 'bar',
          marker: {
              color: getCSS('--primary-color')
          }
      }
  ]

  const laytout = {
      plot_bgcolor: getCSS('--bg-color'),
      paper_bgcolor: getCSS('--bg-color'),
      title: {
          text: 'Álbuns, de 2024, Mais Ouvidos',
          x: 0,
          font: {
              color: getCSS('--primary-color'),
              size: 30,
              font: getCSS('--font')
          }
      },
      xaxis: {
          tickfont: tickConfig,
          title: {
              text: 'Nome dos Artistas',
              font: {
                  color: getCSS('--secondary-color')
              }
          }
      },
      yaxis: {
          tickfont: tickConfig,
          title: {
              text: 'Bilhões de Ouvintes',
              font: {
                  color: getCSS('--secondary-color')
              }
          }
      }
  }

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, laytout)
}


empregos()