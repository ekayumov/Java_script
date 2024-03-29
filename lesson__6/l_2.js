function constructorArray(rootElement, myArray) {
  if (Array.isArray(content)) {
    const list = document.createElement('ul')
    content.forEach(element => {
      constructorArray(list, element)
    });
    rootElement.append(list)
  }
  else {
    const li = document.createElement('li')
    const text = document.createTextNode(content)
    li.append(text)
    rootElement.append(li)
  }
}
