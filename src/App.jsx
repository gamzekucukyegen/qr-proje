"use client"
import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [website, setWebsite] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const handleInput = (e) => {
    setWebsite(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (website !== "") {
      setQrUrl(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${website}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="font-monospace">
      <h1 style={{textAlign:"center",marginBottom:"5%"}}>QR Kodu Oluşturucu</h1>
        <div className="input-group mb-3">
          <label htmlFor="website" className="input-group-text" >Web Sitesi Adı : </label>
        <input id="website" value={website} onChange={handleInput} className="input-group-text"/>
        <button type="submit" className="btn btn-outline-secondary">Qr Kod Oluştur</button>
        </div>
        
      </form>
      {qrUrl && (
        <div className="qr-holder">
          <img src={qrUrl} alt="QR" />
        </div>
      )}
    </div>
  );
};

export default App