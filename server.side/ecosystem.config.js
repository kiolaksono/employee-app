module.exports = {
  apps : [{
    name   : "app1",
    script : "./app.js",
    env:{
	"PORT":80, 
	"NODE_ENV":"production", 
	"JWT_SECRET":"technical-test",
	"DATABASE_URL":"postgresql://postgres:AmKjE7Twm8sRbEGD@db.ahglltrvabkjcpnddcvk.supabase.co:5432/postgres"

}
  }]
}
