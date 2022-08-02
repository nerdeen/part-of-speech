const api= 'http://localhost:3001'
// export const getWords = () =>{
//   fetch(`${api}/words`,{
//     method: 'GET',
//   })
//     .then(wordList => wordList.words)
// }
// export const getWords = () =>{
//   return fetch(`${api}/words`)
//     .then(wordList => wordList.json())
//     // console.log(wordList);
// }
export const getWords = async() =>{
  const response = await fetch(`${api}/words`)
  const wordList = await response.json()
  return wordList;
}
// export const getRank = (score) =>{
//   fetch(`${api}/rank/${score}`,{
//     method: 'POST',
//   })
//     .then(Rank => Rank.rank)
// }
export const getRank = async (score) => {
  console.log("score",score);
  const res = await fetch(`${api}/rank/${score}`, {
    method: 'POST',
    headers: {
      'Content-type': 'text/plain',
    },
    body: score,
  })

  const data = await res.json()
  console.log("data:",data)
  return data;
}
