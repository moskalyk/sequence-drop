import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { auth, executeTx, getAddress, getBalance } from '.';

const PORT = process.env.PORT || 4000
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
};
  
app.use(cors(corsOptions));

app.use(bodyParser.json())

// app.use(function (req, res, next) {
//     let origin = req.headers.origin;
//     res.header("Access-Control-Allow-Origin", req.headers.host.indexOf("localhost") > -1 ? "http://localhost:3001" : origin);
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

app.post('/auth', async (req: any, res: any) => {
    try{
        console.log(req.body)
        const isValid = await auth(
                            req.body.sequenceWalletAddess,
                            req.body.ethAuthProofString,
                        )

        res.send({auth: isValid, status: 200})
    }catch(e){
        res.send({msg: e, status: 500})
    }
})

app.post('/transaction', async (req: any, res: any) => {
    try{
        const tx = await executeTx(
                            req.body.ethAuthProofString,
                            req.body.address,
                            req.body.type
                        )

        res.send({tx: tx, status: 200})
    }catch(e){
        res.send({msg: e, status: 500})
    }
})

app.listen(PORT, async () => {
    
    console.log(`listening on port: ${PORT}`)
    console.log(`relaying from this sequence wallet: ${await getAddress()}`)
    
    const balance = await getBalance();
    
    if(Number(balance) == 0)
        console.log(`please top up with the native token, your current balance is ${balance}`)

})