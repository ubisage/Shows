import React, {useEffect, useState} from 'react'
import "./Modal.css";
const Modal = (props) => {

    const [userinfo, setUserinfo] = useState({})
    
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [tel, settel] = useState('')
    const [card, setcard] = useState('')
    const [cvv, setcvv] = useState('')
    const [expiry, setexpiry] = useState('')
    
    

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("Data Submitted");
        setUserinfo({name,email,tel,card,cvv,expiry})
        window.localStorage.setItem("myInfo", JSON.stringify(userinfo));
        console.log(userinfo)
        setname('');
        setemail('');
        settel('');
        setcard('');
        setcvv('');
        setexpiry('');
    }

    const nameChangeHandler = (event)=>{setname(event.target.value)};
    const emailChangeHandler = (event)=>{setemail(event.target.value)};
    const telChangeHandler = (event)=>{settel(event.target.value)};
    const cardChangeHandler = (event)=>{setcard(event.target.value)};
    const cvvChangeHandler = (event)=>{setcvv(event.target.value)};
    const expiryChangeHandler = (event)=>{setexpiry(event.target.value)};


    
  return (
    <div className={props.hide ? "formModal_active" : "formModal"}  >
        <div className="container">  
  <form id="contact" onSubmit={submitHandler} action="" method="post">
    <h3>Checkout Form</h3>

    
    

    {/* warning as first its value is undefined then later it get updated but still works */}
    <fieldset>
        <label htmlFor="name">Movie Name:</label>
      <input value={props.data.name} type="text" name='movie' tabIndex="1" disabled />
    
    
        <label htmlFor="language">Language:</label>
      <input value={props.data.language} type="text" name='language' tabIndex="2" disabled />
    
        <label htmlFor="date">Date:</label>
      <input value={props.data.language} type="text" name='date' tabIndex="3" disabled />
    </fieldset>
    <fieldset>
        <input value={name} placeholder="Your name"   onChange={nameChangeHandler} type="text" name='name' tabIndex="4" required autoFocus/>
        <input value={email} placeholder="Your Email Address"   onChange={emailChangeHandler} type="email" name='email' tabIndex="5" required/>
        <input value={tel} placeholder="Your Phone Number "  onChange={telChangeHandler}  type="tel" name='telephone' tabIndex="6" required/>
    </fieldset>
    <fieldset>
      <input value={card} placeholder="Card No" type="text"   onChange={cardChangeHandler} name='cardNo' tabIndex="7" maxLength={16} required/>
      <input value={cvv} placeholder="CVV (Format-999)" type="text"   onChange={cvvChangeHandler} name='cvv' tabIndex="7" maxLength={3} required/>
      <input value={expiry} placeholder="Expiry (Format- 12/25)" type="text"  onChange={expiryChangeHandler} name='expiryDate' tabIndex="7" maxLength={5} required/>
    </fieldset>
    
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Submit</button>
    </fieldset>
    <button type='button' onClick={props.onClose} className='button' id="contact">Close</button>
    
  </form>
</div>
    </div>
  )
}

export default Modal