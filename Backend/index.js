const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// database for mongodb

mongoose.connect("mongodb+srv://ALWIN:beulla1977@cluster0.anadfwt.mongodb.net/Shophub")

//API creation

app.get("/", (req,res)=>{
    res.send("Express App is running")
} )

//Image storage engine

const storage = multer.diskStorage({
    destination: './upload/Images',
    filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage:storage});


//  upload endpoint 

app.use('/Images',express.static('upload/Images'))
app.post("/upload",upload.single('product'),(req,res)=>{
        res.json({
            success:1,
            image_url:`http://localhost:${port}/Images/${req.file.filename}`
        })
})

//Schema for creating  products 

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String, 
        required:true,
    },
    image:{
        type:String, 
        required:true,
    },
    category:{
        type:String, 
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({}) ;
    let id;
    if(products.length>0)
        {
        let last_product_array = products.slice(-1);
        let last_product =  last_product_array[0];
        id= last_product.id+1;
    }
    else{
        id=1; 
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for deleting products 

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })

})

// api for getting all -product

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All products  Fetched");
    res.send(products);

})

// SCHEMA creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})


// creating Endpoint for registering the user

app.post('/signup', async(req,res) =>{

    let check = await  Users.findOne({email:req.body.email});
    if(check) {
        return res.status(400).json({success:false,errors:"existing user found"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const  user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
        await user.save();

        const data = {
            user:{
                id:user.id
            }
        }

        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});

})

// creating endpoint for user login

app.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email}); 
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data ={
                user:{
                    id:user.id,
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
       
    }
     else {
            res.json({success:false,errors:"Wrong Email id "});
        }
    
})

// creating endpoint for newcollection data

app.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NEW COLLECTION FETCHED");
    res.send(newcollection);
})

// creating endpoint for popular data

app.get('/popularinwomen', async(req,res)=>{
   let products = await Product.find({category:"women"}); 
   let popular_in_women = products.slice(0,4);
   console.log("POPULAR IN wOMEN FETCHED");
   res.send(popular_in_women);
})


// creating middleware for authentication

const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate with valid address"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error){
            res.status(401).send({errors:"Please authenticate Token"})
        }
    }
}



// creating endpoint for adding products in cart data

app.post('/addtocart' ,fetchUser, async(req,res)=>{
    
    console.log("removed",req.body.itemId);

    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

// creating endpoint for remove products in cart data

app.post('/removefromcart',fetchUser,async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    console.log("removed",req.body.itemId);
    
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

//creating endpoint to get cartdata

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
    
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port " +port)
    }
    else
    {
        console.log("Error:" + error )
    }
})