let Module = (() => {
    let a = 5,
        b = 10;
    let _setA = newA => a = newA
    let _setB = newB => b = newB
    return {
        changeA: (newA) => {
            _setA(newA)
        },
        changeB: (newB) => {
            _setB(newB)
        },
        getA: () => {
            return a
        },
        getB: () => {
            return b
        }
    };
})();

const testFunc = () => {
    Module.changeA(6)
    return Module.getA()
}

export default testFunc