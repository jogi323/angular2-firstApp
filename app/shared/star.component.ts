import {Component,OnChanges,Input} from "@angular/core";
@Component({
    selector:'el-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class starComponent {
    @Input() rating:number=4;
    starWidth:number;
ngOnChages():void{
    this.starWidth=this.rating*86/5;
}
}