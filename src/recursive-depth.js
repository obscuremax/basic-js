module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let num =0 ;
        for (let i=0; i<arr.length; i++) {
            if (Array.isArray(arr[i])) {
                num = num+1
                arr[i] = this.calculateDepth(arr[i])

            }
        }
        return num + 1
    }
};