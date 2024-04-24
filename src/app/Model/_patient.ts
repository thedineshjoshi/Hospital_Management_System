import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Patient{
    public FirstName:string="";
    public LastName:string="";
    public Address:string="";
    public PhoneNumber:string="";
    public Symptoms:string="";
    public Age:string="";
    public Weight:string="";
    public Gender:string="";
    public BloodGroup:string="";
    public Doctorchoose:string="";
    public PatientRegistrationForm:FormGroup;


    constructor(){
        let formBuilder=new FormBuilder();
        this.PatientRegistrationForm=formBuilder.group({
            FirstName:new FormControl('',Validators.compose([Validators.required])),
            Doctorchoose:new FormControl('',Validators.compose([Validators.required])),
            LastName:new FormControl('',Validators.compose([Validators.required])),
            PhoneNumber:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])),
            Gender:new FormControl('',Validators.compose([Validators.required])),
            Address:new FormControl('',Validators.compose([Validators.required])),
            BloodGroup:new FormControl('',Validators.compose([Validators.required])),
            Symptoms:new FormControl('',Validators.compose([Validators.required])),
            Age:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{0,3}$')])),
            Weight:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{0,3}$')])),
          })
        }}