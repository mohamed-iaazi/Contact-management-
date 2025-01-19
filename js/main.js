const contact_list=[];

function Ajouter()  {
    document.getElementById("afficher").classList.remove("active");
    document.getElementById("ajouter").classList.add("active");
   
            console.log("ajouter");
            const newdata= `
            <!-- start right side  -->
<div id="ajouter" class="side right-side col-sm-12 col-lg-5 m-2 pe-0">

    <!-- profile display pic -->
    <div class="m-4 ">
        <div class="d-flex justify-content-center ">
            <img id="ajouter-profile-img" src="./images/profile.png" alt="Profile" class="me-3">
        </div>

        <div class="container mt-5">
            <form id="form" class="row g-3">
                <div class="col-md-6">
                    <label for="inputName" class="form-label">First Name <span>*</span></label>
                    <input id="ajouter-name" type="text" class="form-control" id="inputName" required>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName" class="form-label">Last Name <span>*</span></label>
                    <input id="ajouter-last" type="text" class="form-control" id="inputLastName" required>
                </div>

                <div class="col-12">
                    <label for="inputphone" class="form-label">phone <span>*</span></label>
                    <input id="ajouter-phone" type="tel" class="form-control" id="inputphone" required>
                </div>
                <div class="col-12">
                    <label for="inputEmail" class="form-label">email <span>*</span></label>
                    <input id="ajouter-email" type="email" class="form-control" id="inputEmail" required>
                </div>

                <div class="col-sm-12">
                    <label for="ajouter-address" class="form-label" >city <span>*</span></label>
                    <select id="ajouter-address" class="form-select" required>
                        <option selected disabled>Choose...</option>
                        <option>beni mellal</option>
                        <option>Marrakech</option>
                        <option>Fès</option>
                        <option>Agadir</option>
                        <option>Chefchaouen</option>
                        <option>Ouarzazate</option>

                    </select>
                </div>

                <div>Gender  <span>*</span></div>
                <section class="d-flex justify-content-around align-items-center">
                    <!-- Option Girl -->
                    <label class="p-4 text-center choice">
                        <img src="./images/icons8-girl-light-skin-tone-48.png" class="gender-img d-block ms-3 mb-2"
                            style="width: 40px; height: 40px;">
                        <input type="radio" name="gender" value="girl" style="visibility: hidden; ">Girl
                        
        
                    </label>

                    <!-- Option Boy -->
                    <label class="p-4 text-center choice">
                           <img src="./images/rb_859.png" class="gender-img d-block ms-3 mb-2"
                            style="width: 40px; height: 40px;">
                        <input type="radio" name="gender" style="visibility: hidden;" value="boy">Boy 
                     
                       
                    </label>
                </section>

                <div class="col-12 d-flex justify-content-around align-items-center">
                    <button type="submit" class="btn btn-outline-danger text-danger">Cancel</button>
                    <button id="btn-ajouter" type="button" class="btn btn-primary "
                        style="background-color: #353A7B; border:#353A7B;">Save</button>
                </div>

            </form>
        </div>

    </div>
    <!-- end of right side  -->

</div> `
const placeholder =document.getElementById("placeholder");
const exist = placeholder.querySelectorAll(".side");
if(exist.length>1){
    document.getElementById("ajouter").remove();
}
    placeholder.insertAdjacentHTML('beforeend',newdata);
    GetInput();
                    }

function Afficher() {
    document.getElementById("ajouter").classList.remove("active");
    document.getElementById("afficher").classList.add("active");
    const exist = placeholder.querySelectorAll(".side");
if(exist.length>1){
    document.getElementById("ajouter").remove();
}

    // bring list data from local storage if exist 
    console.log("afficher");
        if(!contact_list.length){
            console.log(" null contact list")
                                }
        else{
            console.log(contact_list.length);
            const newdata= `
            <!-- start of card itemes List (Contact list) -->
                <div id="item-card" class=" d-flex flex-row m-4">
                    <img id="card-profile" src="./images/profile.png" alt="Profile" class="me-3 " style="height: 60px;
    width: 60px;">
                    <div>
                        <h2 class="fs-4" id="card-username">Kamal, ipsum.</h2>
                        <h3  class="fs-6" id="card-phone">+(...) 000 000 000</h3>
                    </div>
                </div>

                <!-- line to separate  -->

                <span class="line"></span>
            `
const placeholder =document.getElementById("list-contact");
placeholder.innerHTML='';
            placeholder.insertAdjacentHTML('beforeend',newdata);
            }

                    }

function ValidInput(target , value ){
                

                                    }
function GetInput(){
  
    const name=document.getElementById("ajouter-name").value.trim();
    const last=document.getElementById("ajouter-last").value.trim();
    const email=document.getElementById("ajouter-email").value.trim();
    const phone=document.getElementById("ajouter-phone").value.trim();
    const address=document.getElementById("ajouter-address").value.trim();



    document.getElementById("btn-ajouter").addEventListener('click' ,function(e) {
      
        let gender;
        document.getElementsByName("gender").forEach(select => {
                  if(select.checked){
                    gender=select.value;
                  }
          
        });

        
    });


   
                

                                    }

