import { Component,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentAdded: EventEmitter<any> = new EventEmitter<any>();

  id:any;
  title:any;
  description:any;
  creator:any;
  type:any;

  errorMessage: string | undefined;
  successMessage: string | undefined;
  requiredFieldMessage: string | undefined;

  addContent(): Promise<any> {
    return new Promise((resolve, reject) => {
     
      const newContent = {
        id: this.id,
        title: this.title,
        description: this.description,
        creator: this.creator,
        type: this.type,
      };

      if(this.id && this.title && this.description && this.creator && this.type) {
      
      this.requiredFieldMessage = '';
      setTimeout(() => {
       
        if (newContent) {
          console.log('Content added successfully:', newContent.title);
          this.errorMessage = '';
          this.successMessage = 'Content added successfully!';
          this.contentAdded.emit(newContent);
          resolve(newContent);
          this.clearField();
        } else {
          this.errorMessage = 'Failed to add content. Please try again.';
          this.successMessage = ''
          reject('Failed to add content.'); 
        }
      }, 1000); 
    } else {
      this.errorMessage = '';
      this.successMessage = '';
      this.requiredFieldMessage = 'All field is required please add at least 1 character in each input';
    }
    });
  }

  clearField(){
    this.id = '';
    this.title = '';
    this.description = '';
    this.creator = '';
    this.type = '';
  }

}
