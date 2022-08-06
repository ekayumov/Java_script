element = document.getElementById('item1')
myHash = {"title": "sss", "description": "description"}

function parseTemplate(element, myHash) {
  for(let i = 0; i < element.children.length; i++) {
    let el = node.children[i]
    if (el.hasAttribute("data-field")){
      let text = myHash[el.getAttribute("data-field")]
      if (!text){
        throw Error("error")
      }
      el.textContent = text
    }
  }
}
