import styleContact from "./Contact.module.css"

export default function Contact(){



    function getNameMessage(){
        
        document.getElementById("nameMessage").innerHTML="Name"
        if(document.getElementById("nameInput").value==''){
            document.getElementById("nameMessage").innerHTML=""
        }

        if(validateName()==true){
            document.getElementById("nameMessageValidate").innerHTML=""

        }else{
            document.getElementById("nameMessageValidate").innerHTML="Name not valid , start with capital letter and at least three letter"
        }
    }

    function validateName(){
        var regex =/^[A-Z][a-zA-Z]{2,10}$/
        return regex.test(document.getElementById("nameInput").value)
    }


    function getEmailMessage(){
        
        document.getElementById("emailMessage").innerHTML="Email"
        if(document.getElementById("emailInput").value==''){
            document.getElementById("emailMessage").innerHTML=""
        }

        if(validateEmail()==true){
            document.getElementById("emailMessageValidate").innerHTML=""
        }else{
            document.getElementById("emailMessageValidate").innerHTML="email not valid , example: yyy@jjj.com"

        }
    }

    function validateEmail(){
        var regex=/^[a-zA-Z]{2,}@[a-zA-Z]{2,}.[a-zA-Z]{2,}$/
        return regex.test(document.getElementById("emailInput").value)
    }
    function getPhoneMessage(){
        
        document.getElementById("phoneMessage").innerHTML="phone Number"
        if(document.getElementById("phoneInput").value==''){
            document.getElementById("phoneMessage").innerHTML=""
        }

        if(validatePhone()==true){
            document.getElementById("phoneMessageValidate").innerHTML=""
        }else{
            document.getElementById("phoneMessageValidate").innerHTML="phone number not valid "

        }

    }
    function validatePhone(){
        var regex=/^01[1250][0-9]{8}$/
        return regex.test(document.getElementById("phoneInput").value)
    }
    function getTextAreaMessage(){
        
        document.getElementById("textMessage").innerHTML="Message"
        if(document.getElementById("messageInput").value==''){
            document.getElementById("textMessage").innerHTML=""
        }
    }

    return <>
    <section id="contact" className="py-5">
        <div className="container py-5">
        <h2 className={` ${styleContact.header} `}>CONTACT ME</h2>
                        <div className="d-flex align-items-center justify-content-center w-25 mx-auto">
                        <div className={`${styleContact.afterLine}`}></div>
                        <i class={` ${styleContact.contactIcon}   fa-solid fa-star fs-2 px-2 py-3`}></i>
                        <div className={`${styleContact.beforeLine}`}></div>
                        </div>

                        <div className="row gy-5">
                            <div className="col-md-8 mx-auto">
                                <p id="nameMessage" className={`${styleContact.message}`}></p>
                            <input id="nameInput" type="text" className="form-control" placeholder="Name" onKeyUp={getNameMessage}/>
                            <p id="nameMessageValidate" className={`text-danger`}></p>
                            </div>
                            <div className="col-md-8 mx-auto">
                            <p id="emailMessage" className={`${styleContact.message}`}></p>
                            <input id="emailInput" type="email" className="form-control" placeholder="Email Address" onKeyUp={getEmailMessage}/>
                            <p id="emailMessageValidate" className={`text-danger`}></p>

                            </div>
                            <div className="col-md-8 mx-auto">
                            <p id="phoneMessage" className={`${styleContact.message}`}></p>
                            <input id="phoneInput"  type="number" className="form-control" placeholder="Phone number" onKeyUp={getPhoneMessage}/>
                            <p id="phoneMessageValidate" className={`text-danger`}></p>

                            </div>
                            <div className="col-md-8 mx-auto">
                            <p id="textMessage" className={`${styleContact.message}`}></p>
                            <textarea id="messageInput" name=""  cols="30" className="form-control" placeholder="Message" onKeyUp={getTextAreaMessage}></textarea>
                            </div>
                                 <div className="col-md-5 mx-auto">
                                    <button className={`${styleContact.btn1} px-4 py-3 btn`}>Send</button>
                                 </div>
                         
                        </div>
        </div>
    </section>
    
    </>
}