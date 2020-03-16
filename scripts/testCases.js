// import "jest"

// describe("Deck constructor", ()=>{
//     it("initializes a deck of 52 cards",()+>{
//         expect(new Deck().cards).its('length').toEqual(52)
//     })
// })

function assertEqual(item1, item2) {
  const isEqual = JSON.stringify(item1) === JSON.stringify(item2);
  if (isEqual) {
    console.log("success", item1);
  } else {
    console.error("fail", item1, item2);
  }
}
