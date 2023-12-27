class addJobtitlePage{

     jobsubmenu(){

        return 'Job'
     }

     jobtitleOption(){

      return 'Job Titles'
     }

     addBtn(){

       return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
     }

     jobtitleInput(){

      return '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input'
     }

     jobdescriptionInput(){

      return 'textarea[placeholder="Type description here"]'
     }

     saveBtn(){

      return 'button[type="submit"]'
     }

     successMessage(){

        return 'Successfully Saved'
     }
}

const addjobtitle = new addJobtitlePage()

export default addjobtitle