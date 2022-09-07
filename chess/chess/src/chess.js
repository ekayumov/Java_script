var divSquare = '<dix id="$coord" class= "cell $color"></div>'
var divFigure = '<dix id="$coord" class= "figure">$figure</div>'
$(function(){
  addSquares();
  showFigures("rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR")
})

function addSquares(){
  $(".desk").html("")
  for (var coord = 0; coord < 64; coord++)
    var mycoord = [
      "A8","B8","C8","D8","E8","F8","G8","H8",
      "A7","B7","C7","D7","E7","F7","G7","H7",
      "A6","B6","C6","D6","E6","F6","G6","H6",
      "A5","B5","C5","D5","E5","F5","G5","H5",
      "A4","B4","C4","D4","E4","F4","G4","H4",
      "A3","B3","C3","D3","E3","F3","G3","H3",
      "A2","B2","C2","D2","E2","F2","G2","H2",
      "A1","B1","C1","D1","E1","F1","G1","H1",
      "A0","B0","C0","D0","E0","F0","G0","H0"
      ]
    $(".desk").append(divSquare
      .replace('$coord', mycoord[0])
      .replace('$color',
        isBlackSquareAt(coord) ? 'black' : 'white'))
}

function showFigureAt(coord, figure){
  $("#s" + coord).html(divFigure
    .replace('$coord', coord)
    .replace('$figure', getChessSymbole(figure)))
}

function showFigures (figures) {
  for (var coord = 0; coord < 64; coord++)
    showFigureAt(coord, figures.charAt(coord))

}

function getChessSymbole(figure) {
  switch (figure) {
    case "K": return '&#9812'
    case "Q": return '&#9813'
    case "R": return '&#9814'
    case "B": return '&#9815'
    case "N": return '&#9816'
    case "P": return '&#9817'
    case "k": return '&#9818'
    case "q": return '&#9819'
    case "r": return '&#9820'
    case "b": return '&#9821'
    case "n": return '&#9822'
    case "p": return '&#9823'
    default : return ''
  }
}

function isBlackSquareAt(coord){
  return (coord % 8 + Math.floor(coord / 8)) % 2
}
