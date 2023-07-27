import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  @Output() addContentEvent = new EventEmitter<Content>();

	title: string;
	description: string;
	creator: string;
	imgURL: string;
	type: string;
	tags: string;

  clearForm() {
		this.title ='';
		this.description ='';
		this.creator ='';
		this.imgURL ='';
		this.type ='';
		this.tags ='';
	}

  submitContent() {
		const newContent: any = {
			title: this.title,
			description: this.description,
			creator: this.creator,
			imgURL: this.imgURL,
			type: this.type,
			tags: this.tags ? this.tags.split(',') : [],
		};
    console.log(newContent);
		this.addContentEvent.emit(newContent);
		this.clearForm();
	}
}