const  express  =  require('express');

const app = express();
const appRoute = require('./routes/route.js');
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/api',appRoute);

app.listen(PORT,()=>{
    console.log('server starting');
})