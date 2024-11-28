const url='https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/ari.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Em pesquisa realizada pelo Spotify, em 2024, o álbum mais ouvido foi The Tortured Poets Department, de Taylor Swift com <span>${dados.Taylor_Swift} bilhões de ouvintes</span>, para nosso segundo lugar foi o álbum Las Mujeres Ya No Lloran de Shakira com <span>${dados.Shakira} bilhões de ouvintes</span>. Na terceira colocação temos Hit Me Hard And Soft de Billie Eilish tendo <span>${dados.Billie_Eilish} bilhões de pessoas que ouviram</span>. Em quarto lugar foi o álbum de Jason Derulo, Nu King, com <span>${dados.Jason_Derulo} bilhões de ouvintes</span>. Em último colocado, com <span>${dados.Benson_Boone} bilhões</span> o álbum Fireworks & Rollerblades de Benson Boonem.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()