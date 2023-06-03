const router = require("express-promise-router")();
const cluster = require("cluster")

class FibonacciSeries {
    constructor() {

    }
    calculateFibonacciValue(number) {
        var s = 0;
        var returnValue;

        if (number == 0) {
            return (s);
        }
        if (number == 1) {
            s += 1;
            return (s);
        }
        else {
            return (this.calculateFibonacciValue(number - 1) + this.calculateFibonacciValue(number - 2));
        }
    }
}

module.exports = new FibonacciSeries();
router.get("/:ms",async (req,res)=>{
 try {
    console.log(`Worker Process Id - ${cluster.worker.process.pid} has accepted the request!`);
    const {ms} = req.params
    console.log("ms",ms)
    const fb = new FibonacciSeries()
    const result = fb.calculateFibonacciValue(ms)
    console.log(result)
    return res.status(200).json({result:result})
 } catch (error) {

    return res.status(500).json({error:error.message})
 }
})

module.exports = router;