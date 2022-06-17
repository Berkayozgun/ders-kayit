import React from 'react'

function Login() {
  return (
    <div>

    <div>
      <div>LOGO</div>
      <div>Ders Kayıt Sistemine Hoşgeldiniz!</div>
    </div>

    <div>
      <input placeholder="Öğrenci No/E-posta"></input>
      <input placeholder="Şifre"></input>
    </div>

    <button onClick={()=>window.location.href="/Home"}>Giriş Yap</button>

    </div>
  )
}

export default Login;