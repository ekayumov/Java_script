const API_KEY = "ByZKDsBLbrcV7KuitjfprBUt7kJ4nkXy"
let queryCache = {};
let input = document.getElementById("searchInput")
let queryTimeoutID = undefined

function giphyQuery(query) {
  let getUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`
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
		let item = document.createElement('img')
		item.setAttribute('src', gif.images.fixed_height_small.url)
		myInput.append(item)
	})

	return results
}

input.addEventListener('input', (event) => {
	clearTimeout(queryTimeoutID)

	let gifResults = document.querySelector('.results')
	queryTimeoutID = setTimeout((query) => {
		giphyQuery(query).then((results) => updatePage(gifResults, results))
	}, 500, event.target.value)
})
