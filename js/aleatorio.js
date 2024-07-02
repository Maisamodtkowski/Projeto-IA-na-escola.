const nomes = ["Kim SeokJin", "Park Jimin", "Jeon Jungkook", "Kim Namjoon", "Min Yoongi", "Jung Hoseok", "Kim Taehyung"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)