import express from 'express'
import { connetDb } from './config/config.js'
import { configDotenv } from 'dotenv'
import ProductRouter from './router/productRouter.js'
import BasketRouter from './router/basketRouter.js'
import WishlistRouter from './router/wishlistRouter.js'
import cors from 'cors'
import TrProductRouter from './router/trproductRouter.js'
import RusProductRouter from './router/rusproductRouter.js'
import UsaqProductRouter from './router/usaqRouter.js'
import IngProductRouter from './router/ingproductRouter.js'
import GiftProductRouter from './router/giftRouter.js'
import BagProductRouter from './router/bagRouter.js'
import NotebookProductRouter from './router/notebookRouter.js'
import userRouter from './router/userRouter.js'
import authRouter from './router/authRouter.js'
import cookieParser from 'cookie-parser'


configDotenv()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*')) 
app.use(cookieParser())


app.use('/product', ProductRouter)

app.use('/basket', BasketRouter)

app.use('/wishlist', WishlistRouter )

app.use('/trProduct', TrProductRouter  )

app.use('/rusProduct', RusProductRouter  )

app.use('/usaqProduct', UsaqProductRouter  )

app.use('/ingProduct', IngProductRouter  )

app.use('/giftProduct', GiftProductRouter  )

app.use('/bagProduct', BagProductRouter  )

app.use('/notebookProduct', NotebookProductRouter )

app.use('/users', userRouter)

app.use('/auth', authRouter )

connetDb()

app.listen(5000,()=>{
    console.log('backend isleyir');
})