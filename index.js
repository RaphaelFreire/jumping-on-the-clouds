// No exemplo abaixo há 7 núvens: 2 com raios e 5 normais.
// 0 representa nuvens que ela PODE pular 
// 1 representa nuvens que ela NÃO PODE pular

// 4 pulos
const cenario1 = [0, 0, 1, 0, 0, 1, 0];

//3 pulos
const cenario2 = [0, 0, 0, 0, 1, 0];

const jumpingOnClouds = c => {
  
  let len = c.length;
  let count = -1;

  for(i = 0; i<len; i++, count++){

    if (i+2 < len && c[i+2] == 0){
      i++
    } 
  }
  console.log(count)

}

jumpingOnClouds(cenario1)

//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D