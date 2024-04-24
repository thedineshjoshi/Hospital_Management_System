import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Doctor{
    public ID:string="";
    public Firstname:string="";
    public Lastname:string="";
    public Address:string="";
    public PhoneNumber:string="";
    public Specialization:string="";
    public Department:string="";
    public Patients:string="";
    public Patientchoose:string="";
    public DoctorRegistrationForm:FormGroup;
    public DoctorRegistrationForms:FormGroup;

constructor(){
    let formBuilder=new FormBuilder();
    this.DoctorRegistrationForm=formBuilder.group({
        FirstName:new FormControl('',Validators.compose([Validators.required])),
        LastName:new FormControl('',Validators.compose([Validators.required])),
        PhoneNumber:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])),
        Department:new FormControl('',Validators.compose([Validators.required])),
        Address:new FormControl('',Validators.compose([Validators.required])),
        Specialization:new FormControl('',Validators.compose([Validators.required]))
      })
      this.DoctorRegistrationForms=formBuilder.group({
        FirstName:new FormControl('',Validators.compose([Validators.required])),
        LastName:new FormControl('',Validators.compose([Validators.required])),
        PhoneNumber:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])),
        Department:new FormControl('',Validators.compose([Validators.required])),
        Address:new FormControl('',Validators.compose([Validators.required])),
        Specialization:new FormControl('',Validators.compose([Validators.required]))
      })
}
}