const chainMaker = {
	ch: [],
	getLength() {
	  return this.ch.length
	},
	addLink(value) {
	  this.ch.push(`( ${value} )`)
	  return this
	},
	removeLink(position) {
	  if(position !== Number(position) || 0>=position || position>this.ch.length-1) {
	    this.ch = []
	    throw "error"
    } else {
	    this.ch.splice(position-1,1)
      return this
    }
	},
	reverseChain() {
	  this.ch.reverse()
    return this
	},
	finishChain() {
	  let newCh = this.ch.map((el, index) => {
	    if (index < this.ch.length-1) {
        return `${el}~~`
      } else {
         return `${el}`
      }
    }).join("")
    this.ch = []
    return newCh
	}
};
module.exports = chainMaker;
