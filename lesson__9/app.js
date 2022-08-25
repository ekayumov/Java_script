const API_KEY = "ByZKDsBLbrcV7KuitjfprBUt7kJ4nkXy"
let queryCache = {};
const input = document.getElementById("searchInput")
let queryTimeoutID = undefined

function giphyQuery(query) {
  const getUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`
  if (query === "") return
  if (queryCache[query]) {
    return queryCache[query]
  }
  else {
    return fetch(giphyUrl)
  	.then((response) => response.json())
  	.then((json) => json.data)
  	.then((results) => {
  		queryCache[query] = results
  		 return results
  	})
  }
}

function updatePage(myInput, results) {
	myInput.textContent = ''
	results.forEach((gif) => {
		const item = document.createElement('img')
		item.setAttribute('src', gif.images.fixed_height_small.url)
		myInput.append(item)
	})

	return results
}

function queryTimeout(gifRes, event) {
  queryTimeoutID = setTimeout((query) => {
		giphyQuery(query).then((results) => updatePage(gifRes, results))
	}, 500, event.target.value)

}

input.addEventListener('input', (event) => {
	clearTimeout(queryTimeoutID)
	const gifResults = document.querySelector('.results')
	queryTimeout(gifResults, event)
})
