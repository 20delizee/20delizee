module.exports = mongoose => {
    const user = mongoose.model("user",
        mongoose.Schema({
          
            id_user: {type: String, require: true, unique:true},
            user_account: String,
            nom: String,
            prenom: String,
            password:{type: String, require: true} 
  
        })
    );
    return user;
  };